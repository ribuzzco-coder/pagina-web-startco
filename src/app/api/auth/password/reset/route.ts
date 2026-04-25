import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { authResetPasswordSchema } from "@/lib/schemas/auth";
import { createBackendServices } from "@/services/bootstrap";

export async function POST(request: Request) {
  try {
    const body = await readJsonBody<unknown>(request);
    const parsed = authResetPasswordSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "La solicitud tiene campos invalidos.",
        getZodFieldErrors(parsed.error),
      );
    }

    const { authService } = createBackendServices();
    const result = await authService.resetPassword(parsed.data.password);

    return apiOk(result, undefined, { message: "Contrasena actualizada correctamente." });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }
    return handleRouteError(error, "api.auth.password.reset");
  }
}

