import { apiOk, handleRouteError } from "@/lib/api/response";
import { requireUserAccess } from "@/services/admin-access-service";
import { createBackendServices } from "@/services/bootstrap";

export async function GET() {
  try {
    const actor = await requireUserAccess();
    const { authService } = createBackendServices();
    const user = await authService.getCurrentUser();

    return apiOk({
      user,
      actor,
    });
  } catch (error) {
    return handleRouteError(error, "api.auth.me");
  }
}

