do $$
begin
  if not exists (
    select 1 from pg_type where typname = 'diagnostic_routing_tier'
  ) then
    create type public.diagnostic_routing_tier as enum ('llamada', 'regalos', 'newsletter');
  end if;
end $$;

-- Los campos originales de la primera versión del formulario quedan opcionales:
-- se reemplazan por proceso_actual (etapa) y que_frena (bloqueo), más completos.
alter table public.diagnostic_requests
  alter column ya_esta_vendiendo drop not null,
  alter column reto_principal drop not null;

alter table public.diagnostic_requests
  add column if not exists que_vende text,
  add column if not exists a_quien_vende text,
  add column if not exists proceso_actual text,
  add column if not exists que_frena text,
  add column if not exists meta_concreta text,
  add column if not exists presupuesto text,
  add column if not exists urgencia text,
  add column if not exists autoridad text,
  add column if not exists fit_score integer not null default 0,
  add column if not exists routing_tier public.diagnostic_routing_tier not null default 'newsletter';

comment on column public.diagnostic_requests.proceso_actual is 'Etapa/madurez declarada: aun_validando | funciona_informal | consistente.';
comment on column public.diagnostic_requests.presupuesto is 'Presupuesto declarado: definido | aproximado | explorando.';
comment on column public.diagnostic_requests.urgencia is 'Urgencia declarada: ya | proximo_mes | tres_meses | explorando.';
comment on column public.diagnostic_requests.autoridad is 'Autoridad de decision: yo_decido | en_conjunto | no_decido.';
comment on column public.diagnostic_requests.fit_score is 'Cuantas de las 3 condiciones de calificacion cumple (presupuesto por etapa, urgencia, autoridad). 0-3.';
comment on column public.diagnostic_requests.routing_tier is 'Destino asignado automaticamente segun fit_score: llamada (3/3), regalos (2/3) o newsletter (0-1/3).';

create index if not exists diagnostic_requests_routing_tier_created_at_idx
  on public.diagnostic_requests (routing_tier, created_at desc);
