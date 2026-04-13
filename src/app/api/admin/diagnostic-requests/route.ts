import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors } from "@/lib/api/validation";
import { adminDiagnosticRequestListQuerySchema } from "@/lib/schemas/admin-diagnostic-request";
import { requireAdminAccess } from "@/services/admin-access-service";
import { createBackendServices } from "@/services/bootstrap";

export async function GET(request: Request) {
  try {
    const actor = await requireAdminAccess(request);
    const query = Object.fromEntries(new URL(request.url).searchParams.entries());
    const parsed = adminDiagnosticRequestListQuerySchema.safeParse(query);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_QUERY",
        "Los parametros de consulta no son validos.",
        getZodFieldErrors(parsed.error),
      );
    }

    const { diagnosticRequestService } = createBackendServices();
    const result = await diagnosticRequestService.list(parsed.data);

    return apiOk(result, undefined, {
      actorRole: actor.role,
    });
  } catch (error) {
    return handleRouteError(error, "api.admin.diagnostic_requests.list");
  }
}
