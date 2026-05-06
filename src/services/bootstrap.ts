import type { SupabaseClient } from "@supabase/supabase-js";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AuditLogRepository } from "@/repositories/audit-log-repository";
import { DiagnosticRequestRepository } from "@/repositories/diagnostic-request-repository";
import { LeadEventRepository } from "@/repositories/lead-event-repository";
import { AuditLogService } from "@/services/audit-log-service";
import { DiagnosticRequestService } from "@/services/diagnostic-request-service";
import { LeadEventsService } from "@/services/lead-events-service";
import type { Database } from "@/types/database";

function createBackendServicesForClient(client: SupabaseClient<Database>) {
  const leadEventsService = new LeadEventsService(new LeadEventRepository(client));
  const auditLogService = new AuditLogService(new AuditLogRepository(client));
  const diagnosticRequestService = new DiagnosticRequestService(
    new DiagnosticRequestRepository(client),
    leadEventsService,
    auditLogService,
  );

  return {
    auditLogService,
    diagnosticRequestService,
    leadEventsService,
  };
}

export function createPublicBackendServices() {
  return createBackendServicesForClient(createSupabaseAdminClient());
}

export async function createAdminBackendServices() {
  return createBackendServicesForClient(await createSupabaseServerClient());
}

