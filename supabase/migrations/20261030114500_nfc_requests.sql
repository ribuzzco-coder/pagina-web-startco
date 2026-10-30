create table if not exists public.nfc_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  name text not null,
  business text,
  whatsapp text not null,
  product text not null,
  purpose text not null,
  quantity text not null,
  add_on text not null,
  source text not null default 'website:nfc',
  data_consent_at timestamptz not null default timezone('utc', now()),
  request_ip text,
  user_agent text,
  referrer text
);

comment on table public.nfc_requests is 'Inbound quote requests for NFC products.';

create index if not exists nfc_requests_created_at_idx
  on public.nfc_requests (created_at desc);
create index if not exists nfc_requests_whatsapp_idx
  on public.nfc_requests (whatsapp);
create index if not exists nfc_requests_product_created_at_idx
  on public.nfc_requests (product, created_at desc);

alter table public.nfc_requests enable row level security;

drop policy if exists "Admins can read NFC requests" on public.nfc_requests;
create policy "Admins can read NFC requests"
on public.nfc_requests
for select
to authenticated
using (public.is_active_admin());
