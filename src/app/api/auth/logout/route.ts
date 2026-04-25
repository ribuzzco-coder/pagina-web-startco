import { apiOk, handleRouteError } from "@/lib/api/response";
import { createBackendServices } from "@/services/bootstrap";

export async function POST() {
  try {
    const { authService } = createBackendServices();
    await authService.logout();

    return apiOk({ loggedOut: true }, undefined, { message: "Sesion cerrada." });
  } catch (error) {
    return handleRouteError(error, "api.auth.logout");
  }
}

