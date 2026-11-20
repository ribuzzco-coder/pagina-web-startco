-- Run with psql against a migrated disposable database. Fixtures roll back.
begin;
do $$
declare
  sample jsonb := jsonb_build_object('nombre','Prueba','empresa','Prueba','email','test@example.invalid',
    'sector','Pruebas','source','test','submission_hash',gen_random_uuid()::text,
    'fit_score',2,'routing_tier','regalos');
  initial record;
  repeated record;
  revised record;
begin
  select * into initial from public.receive_diagnostic(sample,'a',24,true,null);
  select * into repeated from public.receive_diagnostic(sample,'a',24,true,null);
  if initial.duplicate or not repeated.duplicate or initial.id <> repeated.id then
    raise exception 'Identical submissions must resolve to the same record';
  end if;
  select * into revised from public.receive_diagnostic(
    sample || '{"fit_score":3,"routing_tier":"llamada"}'::jsonb,'b',24,true,null);
  if revised.duplicate or revised.id = initial.id or revised.routing_tier <> 'llamada' then
    raise exception 'Material updates must use the new classification';
  end if;
  if (select count(*) from public.claim_diagnostic_sheet_batch() where id in (initial.id,revised.id)) <> 2 then
    raise exception 'Both versions should be queued';
  end if;
  if exists(select 1 from public.claim_diagnostic_sheet_batch() where id in (initial.id,revised.id)) then
    raise exception 'Claimed records must remain leased';
  end if;
  update public.diagnostic_requests set sheets_next_attempt_at = null where id = initial.id;
  update public.diagnostic_requests set sheets_next_attempt_at = now() where id = revised.id;
  if not exists(select 1 from public.claim_diagnostic_sheet_batch() where id = revised.id) then
    raise exception 'An unacknowledged record must be recoverable';
  end if;
end;
$$;
rollback;
