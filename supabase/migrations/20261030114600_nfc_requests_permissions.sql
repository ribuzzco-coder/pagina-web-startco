grant usage on schema public to authenticated, service_role;
grant select on table public.nfc_requests to authenticated;
grant select, insert on table public.nfc_requests to service_role;
