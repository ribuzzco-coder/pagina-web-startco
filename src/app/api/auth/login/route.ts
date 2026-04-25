import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";
import { authLoginSchema } from "@/lib/schemas/auth";
import { getClientIp } from "@/lib/security/request";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { createBackendServices } from "@/services/bootstrap";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    applyRateLimit({
      key: `auth-login:${ip}`,
      limit: env.AUTH_RATE_LIMIT_MAX_LOGIN,
      windowMs: env.RATE_LIMIT_WINDOW_MS,
    });

    const body = await readJsonBody<unknown>(request);
    const parsed = authLoginSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "La solicitud tiene campos invalidos.",
        getZodFieldErrors(parsed.error),
      );
    }

    const { authService } = createBackendServices();
    const result = await authService.login(parsed.data);

    return apiOk(result, undefined, { message: "Sesion iniciada." });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }
    return handleRouteError(error, "api.auth.login");
  }
}

