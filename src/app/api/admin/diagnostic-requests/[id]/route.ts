import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { toAdminDiagnosticRequestDto } from "@/lib/dto/admin-diagnostic-request";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { updateDiagnosticRequestSchema } from "@/lib/schemas/admin-diagnostic-request";
import { requireAdminAccess } from "@/services/admin-access-service";
import { createAdminBackendServices } from "@/services/bootstrap";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const actor = await requireAdminAccess();
    const { id } = await context.params;
    const body = await readJsonBody<unknown>(request);
    const parsed = updateDiagnosticRequestSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "El cuerpo de actualizacion no es valido.",
        getZodFieldErrors(parsed.error),
      );
    }

    const { diagnosticRequestService } = await createAdminBackendServices();
    const updated = await diagnosticRequestService.update({
      id,
      status: parsed.data.status,
      internalNotes: parsed.data.internalNotes,
      actor,
    });

    return apiOk(toAdminDiagnosticRequestDto(updated));
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }

    return handleRouteError(error, "api.admin.diagnostic_requests.update");
  }
}
