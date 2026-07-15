alter table public.diagnostic_requests
  add column if not exists data_consent_at timestamptz;

comment on column public.diagnostic_requests.data_consent_at is 'Momento en que el titular acepto la Politica de tratamiento de datos personales al enviar el formulario. Null en registros previos a esta migracion, donde no se capturaba consentimiento explicito.';
