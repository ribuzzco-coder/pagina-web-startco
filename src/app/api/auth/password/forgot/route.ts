import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";
import { authForgotPasswordSchema } from "@/lib/schemas/auth";
import { getClientIp } from "@/lib/security/request";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { createBackendServices } from "@/services/bootstrap";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    applyRateLimit({
      key: `auth-password-forgot:${ip}`,
      limit: env.AUTH_RATE_LIMIT_MAX_FORGOT_PASSWORD,
      windowMs: env.RATE_LIMIT_WINDOW_MS,
    });

    const body = await readJsonBody<unknown>(request);
    const parsed = authForgotPasswordSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "La solicitud tiene campos invalidos.",
        getZodFieldErrors(parsed.error),
      );
    }

    const { authService } = createBackendServices();
    await authService.sendPasswordRecovery(parsed.data);

    return apiOk(
      { accepted: true },
      undefined,
      { message: "Si el correo existe, enviaremos instrucciones para recuperar la contrasena." },
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }
    return handleRouteError(error, "api.auth.password.forgot");
  }
}

