import { apiOk, handleRouteError } from "@/lib/api/response";
import { requireAdminAccess } from "@/services/admin-access-service";
import { createPublicBackendServices } from "@/services/bootstrap";

export async function POST() {
  try {
    await requireAdminAccess();
    const { diagnosticRequestService } = createPublicBackendServices();
    return apiOk(await diagnosticRequestService.deliverPendingSheets());
  } catch (error) {
    return handleRouteError(error, "api.admin.diagnostic_requests.retry_sheets");
  }
}
