import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";
import { giftLeadSchema } from "@/lib/schemas/gift-lead";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { getClientIp } from "@/lib/security/request";

const BRAND_LABELS = {
  nunaamautta: "Nuna Amautta",
  biondaymora: "Bionda y Mora",
} as const;

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    await applyRateLimit({
      scope: "gift-leads",
      identifier: ip,
      limit: env.RATE_LIMIT_MAX_PUBLIC_REQUESTS,
      windowMs: env.RATE_LIMIT_WINDOW_MS,
    });

    const body = await readJsonBody<unknown>(request);
    const parsed = giftLeadSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "El lead tiene campos invalidos.",
        getZodFieldErrors(parsed.error),
      );
    }

    if (!env.GOOGLE_SHEETS_WEBHOOK_URL) {
      return apiError(
        503,
        "GOOGLE_SHEETS_NOT_CONFIGURED",
        "Google Sheets no esta configurado para recibir leads.",
      );
    }

    const payload = {
      submittedAt: new Date().toISOString(),
      brand: parsed.data.brand,
      brandLabel: BRAND_LABELS[parsed.data.brand],
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      birthday: parsed.data.birthday ?? "",
      sourcePath: parsed.data.sourcePath ?? "",
      userAgent: request.headers.get("user-agent") ?? "",
      referrer: request.headers.get("referer") ?? "",
    };

    const response = await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      return apiError(
        502,
        "GOOGLE_SHEETS_REQUEST_FAILED",
        "No pudimos guardar el lead en Google Sheets.",
      );
    }

    return apiOk({ saved: true }, { status: 202 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }

    return handleRouteError(error, "api.gift_leads");
  }
}
