-- Keep retries in the same transaction as classification and queue creation.
alter table public.diagnostic_requests
  add column submission_revision text,
  add column sheets_next_attempt_at timestamptz;

create index diagnostic_sheets_ready_idx on public.diagnostic_requests (sheets_next_attempt_at)
  where sheets_next_attempt_at is not null;

create function public.receive_diagnostic(
  p_request jsonb, p_revision text, p_lookback_hours integer, p_sync boolean, p_legacy_match uuid
) returns table (id uuid, fit_score integer, routing_tier public.diagnostic_routing_tier, duplicate boolean)
language plpgsql set search_path = '' as $$
declare
  incoming public.diagnostic_requests;
  recent public.diagnostic_requests;
begin
  incoming := jsonb_populate_record(null::public.diagnostic_requests, p_request);
  perform pg_advisory_xact_lock(hashtextextended(incoming.submission_hash, 0));
  select r.* into recent from public.diagnostic_requests r
    where r.submission_hash = incoming.submission_hash
      and r.created_at >= now() - make_interval(hours => p_lookback_hours)
    order by r.created_at desc limit 1;

  if found and (recent.submission_revision = p_revision or
      (recent.submission_revision is null and recent.id = p_legacy_match)) then
    return query select recent.id, recent.fit_score::integer, recent.routing_tier, true;
    return;
  end if;

  insert into public.diagnostic_requests (
    nombre, empresa, cargo, whatsapp, email, sector, que_vende, a_quien_vende, proceso_actual, que_frena, meta_concreta, presupuesto, urgencia, autoridad, fit_score, routing_tier, tamano_equipo, contexto, source, submission_hash, data_consent_at, submission_revision, sheets_next_attempt_at
  ) values (
    incoming.nombre, incoming.empresa, incoming.cargo, incoming.whatsapp, incoming.email, incoming.sector, incoming.que_vende, incoming.a_quien_vende, incoming.proceso_actual, incoming.que_frena, incoming.meta_concreta, incoming.presupuesto, incoming.urgencia, incoming.autoridad, incoming.fit_score, incoming.routing_tier, incoming.tamano_equipo, incoming.contexto, incoming.source, incoming.submission_hash, incoming.data_consent_at, p_revision, case when p_sync then now() end
  ) returning * into recent;
  return query select recent.id, recent.fit_score::integer, recent.routing_tier, false;
end;
$$;

-- A lease makes unfinished work available again after a crash.
create function public.claim_diagnostic_sheet_batch()
returns setof public.diagnostic_requests language sql set search_path = '' as $$
  with ready as (
    select id from public.diagnostic_requests where sheets_next_attempt_at <= now()
    order by sheets_next_attempt_at limit 4 for update skip locked
  )
  update public.diagnostic_requests r set sheets_next_attempt_at = now() + interval '5 minutes'
  from ready where r.id = ready.id returning r.*;
$$;

revoke all on function public.receive_diagnostic(jsonb,text,integer,boolean,uuid) from public, anon, authenticated;
revoke all on function public.claim_diagnostic_sheet_batch() from public, anon, authenticated;
grant execute on function public.receive_diagnostic(jsonb,text,integer,boolean,uuid) to service_role;
grant execute on function public.claim_diagnostic_sheet_batch() to service_role;
