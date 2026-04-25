import { apiOk, handleRouteError } from "@/lib/api/response";
import { createBackendServices } from "@/services/bootstrap";

export async function GET() {
  try {
    const { authService } = createBackendServices();
    const session = await authService.getSession();

    return apiOk({
      authenticated: Boolean(session),
      session,
    });
  } catch (error) {
    return handleRouteError(error, "api.auth.session");
  }
}

