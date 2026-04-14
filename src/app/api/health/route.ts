import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getHealthStatus } from "@/services/health-service";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const health = await getHealthStatus();

    if (!health.ok) {
      return apiError(503, "SERVICE_UNHEALTHY", "El backend no esta saludable.");
    }

    return apiOk(health);
  } catch (error) {
    return handleRouteError(error, "api.health");
  }
}
