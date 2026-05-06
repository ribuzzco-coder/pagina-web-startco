create table if not exists public.rate_limit_buckets (
  scope text not null,
  identifier_hash text not null,
  window_start timestamptz not null,
  count integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  primary key (scope, identifier_hash, window_start),
  constraint rate_limit_buckets_count_non_negative check (count >= 0)
);

comment on table public.rate_limit_buckets is 'Shared request throttling buckets for public-facing endpoints.';

drop trigger if exists set_rate_limit_buckets_updated_at on public.rate_limit_buckets;
create trigger set_rate_limit_buckets_updated_at
before update on public.rate_limit_buckets
for each row
execute function public.set_current_timestamp();

create index if not exists rate_limit_buckets_updated_at_idx
  on public.rate_limit_buckets (updated_at desc);

alter table public.rate_limit_buckets enable row level security;

create or replace function public.check_rate_limit(
  p_scope text,
  p_identifier_hash text,
  p_limit integer,
  p_window_ms integer
)
returns table (
  allowed boolean,
  remaining integer,
  reset_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  bucket_start timestamptz;
  window_interval interval;
  current_count integer;
begin
  if p_limit <= 0 then
    raise exception 'p_limit must be positive';
  end if;

  if p_window_ms <= 0 then
    raise exception 'p_window_ms must be positive';
  end if;

  bucket_start := to_timestamp(
    floor(extract(epoch from clock_timestamp()) * 1000 / p_window_ms) * p_window_ms / 1000.0
  );
  window_interval := (p_window_ms::text || ' milliseconds')::interval;

  insert into public.rate_limit_buckets as buckets (
    scope,
    identifier_hash,
    window_start,
    count
  )
  values (
    p_scope,
    p_identifier_hash,
    bucket_start,
    1
  )
  on conflict (scope, identifier_hash, window_start)
  do update set
    count = buckets.count + 1,
    updated_at = timezone('utc', now())
  returning count into current_count;

  allowed := current_count <= p_limit;
  remaining := greatest(p_limit - current_count, 0);
  reset_at := bucket_start + window_interval;

  return next;
end;
$$;
