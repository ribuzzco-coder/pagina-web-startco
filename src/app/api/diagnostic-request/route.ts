import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";
import { diagnosticRequestSchema } from "@/lib/schemas/diagnostic-request";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { getClientIp } from "@/lib/security/request";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { createBackendServices } from "@/services/bootstrap";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    applyRateLimit({
      key: `diagnostic-request:${ip}`,
      limit: env.RATE_LIMIT_MAX_PUBLIC_REQUESTS,
      windowMs: env.RATE_LIMIT_WINDOW_MS,
    });

    const body = await readJsonBody<unknown>(request);
    const parsed = diagnosticRequestSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "La solicitud tiene campos invalidos.",
        getZodFieldErrors(parsed.error),
      );
    }

    await verifyTurnstileToken(parsed.data.turnstileToken, ip);

    const { diagnosticRequestService } = createBackendServices();
    const result = await diagnosticRequestService.create({
      ...parsed.data,
      requestIp: ip,
      userAgent: request.headers.get("user-agent"),
      referrer: request.headers.get("referer"),
      honeypot: parsed.data.website,
    });

    if (result.duplicate) {
      return apiOk(
        {
          accepted: true,
          duplicate: true,
          diagnosticRequestId: result.request.id,
          status: result.request.status,
        },
        { status: 202 },
        {
          message: "Ya existe una solicitud similar reciente. Revisaremos el caso igualmente.",
        },
      );
    }

    return apiOk(
      {
        accepted: true,
        duplicate: false,
        diagnosticRequestId: result.request.id,
        status: result.request.status,
      },
      { status: 201 },
      {
        message: "Solicitud recibida correctamente.",
      },
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }
    return handleRouteError(error, "api.diagnostic_request");
  }
}
