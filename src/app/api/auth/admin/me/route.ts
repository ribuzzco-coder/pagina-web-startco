import { apiOk, handleRouteError } from "@/lib/api/response";
import { requireAdminAccess } from "@/services/admin-access-service";

export async function GET(request: Request) {
  try {
    const actor = await requireAdminAccess(request);
    return apiOk({ actor });
  } catch (error) {
    return handleRouteError(error, "api.auth.admin.me");
  }
}

