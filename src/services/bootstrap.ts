import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { AuditLogRepository } from "@/repositories/audit-log-repository";
import { DiagnosticRequestRepository } from "@/repositories/diagnostic-request-repository";
import { LeadEventRepository } from "@/repositories/lead-event-repository";
import { AuditLogService } from "@/services/audit-log-service";
import { AuthService } from "@/services/auth-service";
import { DiagnosticRequestService } from "@/services/diagnostic-request-service";
import { LeadEventsService } from "@/services/lead-events-service";

export function createBackendServices() {
  const adminClient = createSupabaseAdminClient();
  const authService = new AuthService();
  const leadEventsService = new LeadEventsService(new LeadEventRepository(adminClient));
  const auditLogService = new AuditLogService(new AuditLogRepository(adminClient));
  const diagnosticRequestService = new DiagnosticRequestService(
    new DiagnosticRequestRepository(adminClient),
    leadEventsService,
    auditLogService,
  );

  return {
    authService,
    auditLogService,
    diagnosticRequestService,
    leadEventsService,
  };
}

