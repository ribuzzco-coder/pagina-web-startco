import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";
import { trackCtaSchema } from "@/lib/schemas/track-cta";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { getClientIp } from "@/lib/security/request";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { createPublicBackendServices } from "@/services/bootstrap";
import { sha256 } from "@/lib/utils/crypto";
import { toJsonValue } from "@/lib/utils/json";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    await applyRateLimit({
      scope: "track-cta",
      identifier: ip,
      limit: env.CTA_TRACK_RATE_LIMIT_MAX,
      windowMs: env.RATE_LIMIT_WINDOW_MS,
    });

    const body = await readJsonBody<unknown>(request);
    const parsed = trackCtaSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "El evento CTA tiene campos invalidos.",
        getZodFieldErrors(parsed.error),
      );
    }

    await verifyTurnstileToken(parsed.data.turnstileToken, ip);

    const { leadEventsService } = createPublicBackendServices();
    await leadEventsService.recordCtaClicked({
      diagnosticRequestId: parsed.data.diagnosticRequestId ?? null,
      metadata: {
        label: parsed.data.label,
        location: parsed.data.location,
        href: parsed.data.href,
        source: parsed.data.source ?? "website",
        metadata: toJsonValue(parsed.data.metadata ?? {}),
        request_ip_hash: sha256(ip),
        user_agent: request.headers.get("user-agent"),
        referrer: request.headers.get("referer"),
      },
    });

    return apiOk(
      {
        tracked: true,
      },
      { status: 202 },
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }

    return handleRouteError(error, "api.track_cta");
  }
}
