import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";
import { diagnosticRequestSchema } from "@/lib/schemas/diagnostic-request";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { getClientIp } from "@/lib/security/request";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { createPublicBackendServices } from "@/services/bootstrap";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    await applyRateLimit({
      scope: "diagnostic-request",
      identifier: ip,
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

    const { diagnosticRequestService } = createPublicBackendServices();

    const result = await diagnosticRequestService.create({
      nombre: parsed.data.nombre,
      empresa: parsed.data.empresa,
      cargo: parsed.data.cargo,
      whatsapp: parsed.data.whatsapp,
      email: parsed.data.email,
      sector: parsed.data.sector,
      queVende: parsed.data.queVende,
      aQuienVende: parsed.data.aQuienVende,
      procesoActual: parsed.data.procesoActual,
      queFrena: parsed.data.queFrena,
      metaConcreta: parsed.data.metaConcreta,
      presupuesto: parsed.data.presupuesto,
      urgencia: parsed.data.urgencia,
      autoridad: parsed.data.autoridad,
      tamanoEquipo: parsed.data.tamanoEquipo,
      contexto: parsed.data.contexto,
      source: parsed.data.source ?? "website:diagnostico",
      dataConsent: parsed.data.dataConsent,
      requestIp: ip,
      userAgent: request.headers.get("user-agent"),
      referrer: request.headers.get("referer"),
      honeypot: parsed.data.website,
    });

    return apiOk(
      {
        received: true,
        duplicate: result.duplicate,
        fitScore: result.request.fit_score,
        routingTier: result.request.routing_tier,
      },
      { status: 202 },
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }

    return handleRouteError(error, "api.diagnostic_request");
  }
}
