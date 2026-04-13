create extension if not exists pgcrypto;

do $$
begin
  if not exists (
    select 1 from pg_type where typname = 'diagnostic_request_status'
  ) then
    create type public.diagnostic_request_status as enum (
      'pending_review',
      'reviewed',
      'qualified',
      'unqualified',
      'archived'
    );
  end if;

  if not exists (
    select 1 from pg_type where typname = 'lead_event_type'
  ) then
    create type public.lead_event_type as enum (
      'diagnostic_request_created',
      'duplicate_detected',
      'cta_clicked',
      'reviewed',
      'status_changed',
      'note_added'
    );
  end if;

  if not exists (
    select 1 from pg_type where typname = 'admin_role'
  ) then
    create type public.admin_role as enum ('owner', 'admin', 'reviewer');
  end if;

  if not exists (
    select 1 from pg_type where typname = 'audit_entity_type'
  ) then
    create type public.audit_entity_type as enum (
      'diagnostic_request',
      'lead_event',
      'admin_profile',
      'system'
    );
  end if;
end $$;

create or replace function public.set_current_timestamp()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.admin_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now()),
  email text not null unique,
  full_name text,
  role public.admin_role not null default 'reviewer',
  is_active boolean not null default true
);

comment on table public.admin_profiles is 'Internal admin users allowed to review and manage diagnostic requests.';

create or replace function public.is_active_admin(user_id uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_profiles ap
    where ap.id = coalesce(user_id, auth.uid())
      and ap.is_active = true
  );
$$;

create table if not exists public.diagnostic_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  nombre text not null,
  empresa text not null,
  cargo text,
  whatsapp text,
  email text not null,
  sector text not null,
  ya_esta_vendiendo boolean not null,
  reto_principal text not null,
  tamano_equipo text,
  contexto text,
  source text not null default 'website',
  status public.diagnostic_request_status not null default 'pending_review',
  reviewed_at timestamptz,
  reviewed_by uuid references public.admin_profiles (id) on delete set null,
  internal_notes text,
  submission_hash text not null
);

comment on table public.diagnostic_requests is 'Structured inbound diagnostic requests and leads.';

create table if not exists public.lead_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  diagnostic_request_id uuid references public.diagnostic_requests (id) on delete cascade,
  actor_id uuid references public.admin_profiles (id) on delete set null,
  event_type public.lead_event_type not null,
  metadata jsonb not null default '{}'::jsonb,
  constraint lead_events_metadata_is_object check (jsonb_typeof(metadata) = 'object')
);

comment on table public.lead_events is 'Lead lifecycle and CTA-related events.';

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  actor_id uuid references public.admin_profiles (id) on delete set null,
  action text not null,
  entity_type public.audit_entity_type not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  constraint audit_logs_metadata_is_object check (jsonb_typeof(metadata) = 'object')
);

comment on table public.audit_logs is 'Internal audit trail for sensitive administrative actions.';

drop trigger if exists set_diagnostic_requests_updated_at on public.diagnostic_requests;
create trigger set_diagnostic_requests_updated_at
before update on public.diagnostic_requests
for each row
execute function public.set_current_timestamp();

create index if not exists diagnostic_requests_created_at_idx
  on public.diagnostic_requests (created_at desc);
create index if not exists diagnostic_requests_status_created_at_idx
  on public.diagnostic_requests (status, created_at desc);
create index if not exists diagnostic_requests_email_idx
  on public.diagnostic_requests (email);
create index if not exists diagnostic_requests_source_created_at_idx
  on public.diagnostic_requests (source, created_at desc);
create index if not exists diagnostic_requests_submission_hash_idx
  on public.diagnostic_requests (submission_hash, created_at desc);
create index if not exists lead_events_diagnostic_request_created_at_idx
  on public.lead_events (diagnostic_request_id, created_at desc);
create index if not exists lead_events_event_type_created_at_idx
  on public.lead_events (event_type, created_at desc);
create index if not exists admin_profiles_is_active_idx
  on public.admin_profiles (is_active);
create index if not exists audit_logs_actor_created_at_idx
  on public.audit_logs (actor_id, created_at desc);
create index if not exists audit_logs_entity_idx
  on public.audit_logs (entity_type, entity_id, created_at desc);

alter table public.admin_profiles enable row level security;
alter table public.diagnostic_requests enable row level security;
alter table public.lead_events enable row level security;
alter table public.audit_logs enable row level security;

drop policy if exists "Admins can read admin profiles" on public.admin_profiles;
create policy "Admins can read admin profiles"
on public.admin_profiles
for select
to authenticated
using (public.is_active_admin() or auth.uid() = id);

drop policy if exists "Admins can update admin profiles" on public.admin_profiles;
create policy "Admins can update admin profiles"
on public.admin_profiles
for update
to authenticated
using (public.is_active_admin())
with check (public.is_active_admin());

drop policy if exists "Admins can read diagnostic requests" on public.diagnostic_requests;
create policy "Admins can read diagnostic requests"
on public.diagnostic_requests
for select
to authenticated
using (public.is_active_admin());

drop policy if exists "Admins can update diagnostic requests" on public.diagnostic_requests;
create policy "Admins can update diagnostic requests"
on public.diagnostic_requests
for update
to authenticated
using (public.is_active_admin())
with check (public.is_active_admin());

drop policy if exists "Admins can read lead events" on public.lead_events;
create policy "Admins can read lead events"
on public.lead_events
for select
to authenticated
using (public.is_active_admin());

drop policy if exists "Admins can insert lead events" on public.lead_events;
create policy "Admins can insert lead events"
on public.lead_events
for insert
to authenticated
with check (public.is_active_admin());

drop policy if exists "Admins can read audit logs" on public.audit_logs;
create policy "Admins can read audit logs"
on public.audit_logs
for select
to authenticated
using (public.is_active_admin());

drop policy if exists "Admins can insert audit logs" on public.audit_logs;
create policy "Admins can insert audit logs"
on public.audit_logs
for insert
to authenticated
with check (public.is_active_admin());
