import { createHmac } from "node:crypto";

import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";
import { NUNA_DISCOUNT_CODES, nunaDiscountUrl } from "@/lib/nuna-discounts";
import { BIONDA_DISCOUNT_CODES, biondaDiscountUrl } from "@/lib/bionda-discounts";
import { giftLeadSchema } from "@/lib/schemas/gift-lead";
import { getClientIp } from "@/lib/security/request";

const BRAND_LABELS = {
  nunaamautta: "Nuna Amautta",
  biondaymora: "Bionda y Mora",
} as const;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const giftLeadRateLimitStore =
  globalThis.__ribuzzGiftLeadRateLimitStore ?? new Map<string, RateLimitEntry>();

if (!globalThis.__ribuzzGiftLeadRateLimitStore) {
  globalThis.__ribuzzGiftLeadRateLimitStore = giftLeadRateLimitStore;
}

declare global {
  var __ribuzzGiftLeadRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const key = identifier.trim() || "unknown";
  const current = giftLeadRateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    giftLeadRateLimitStore.set(key, {
      count: 1,
      resetAt: now + env.RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= env.RATE_LIMIT_MAX_PUBLIC_REQUESTS) {
    return true;
  }

  current.count += 1;
  giftLeadRateLimitStore.set(key, current);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return apiError(
        429,
        "RATE_LIMITED",
        "Se alcanzo el limite temporal de solicitudes. Intenta de nuevo en unos minutos.",
      );
    }

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

    const webhookUrl = parsed.data.brand === "biondaymora"
      ? env.BIONDA_SHEETS_WEBHOOK_URL
      : env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      return apiError(
        503,
        "GOOGLE_SHEETS_NOT_CONFIGURED",
        "Google Sheets no esta configurado para recibir leads.",
      );
    }

    // A stable server-side assignment prevents repeat submissions from changing the prize.
    const assignment = parsed.data.brand === "nunaamautta"
      ? createHmac("sha256", env.SENSITIVE_FIELD_ENCRYPTION_KEY)
          .update(`nuna-gift-v1:${parsed.data.email}`)
          .digest("hex")
      : null;
    const discount = assignment ? [10, 15, 20][parseInt(assignment.slice(0, 8), 16) % 3] : null;
    const shopifyCode = discount ? NUNA_DISCOUNT_CODES[`discount-${discount}`] : undefined;
    const prize = assignment && discount ? {
      id: `discount-${discount}`,
      validationCode: `NUNA${discount}-${assignment.slice(8, 20).toUpperCase()}`,
      label: `${discount}% en tu pedido`,
      shopifyCode,
      redemptionUrl: shopifyCode ? nunaDiscountUrl(shopifyCode) : undefined,
    } : null;

    const biondaAssignment = parsed.data.brand === "biondaymora"
      ? createHmac("sha256", env.SENSITIVE_FIELD_ENCRYPTION_KEY)
          .update(`bionda-gift-v1:${parsed.data.email}`).digest("hex")
      : null;
    const chance = biondaAssignment ? parseInt(biondaAssignment.slice(0, 8), 16) % 100 : 0;
    const biondaId = chance < 10 ? "discount-5" : chance < 70 ? "discount-10" : chance < 95 ? "discount-15" : "scarf";
    const biondaCode = BIONDA_DISCOUNT_CODES[biondaId];
    const awardedPrize = biondaAssignment ? {
      id: biondaId,
      validationCode: `BYM-${biondaAssignment.slice(8, 20).toUpperCase()}`,
      label: biondaId === "scarf" ? "Pañoleta gratis" : `${biondaId.slice(9)}% de descuento`,
      shopifyCode: biondaCode,
      redemptionUrl: biondaCode ? biondaDiscountUrl(biondaCode) : undefined,
    } : prize;

    const payload = {
      submittedAt: new Date().toISOString(),
      brand: parsed.data.brand,
      brandLabel: BRAND_LABELS[parsed.data.brand],
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      birthday: parsed.data.birthday ?? "",
      productInterest: parsed.data.productInterest ?? "",
      purchaseStatus: parsed.data.purchaseStatus,
      consent: parsed.data.consent ?? false,
      prize: awardedPrize?.label ?? "",
      validationCode: awardedPrize?.validationCode ?? "",
      shopifyCode: awardedPrize?.shopifyCode ?? "",
      sourcePath: parsed.data.sourcePath ?? "",
      userAgent: request.headers.get("user-agent") ?? "",
      referrer: request.headers.get("referer") ?? "",
    };

    // ContentService redirects to a one-time URL containing the script's result.
    let response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "manual",
      signal: AbortSignal.timeout(15000),
    });

    if (response.status === 302) {
      const location = response.headers.get("location");
      const target = location ? new URL(location, webhookUrl) : null;
      if (!target || target.protocol !== "https:" || target.hostname !== "script.googleusercontent.com") {
        return apiError(502, "GOOGLE_SHEETS_REQUEST_FAILED", "Google Sheets no confirmó el registro.");
      }
      response = await fetch(target, { method: "GET", cache: "no-store", redirect: "error", signal: AbortSignal.timeout(15000) });
    }

    const confirmation: { ok?: boolean } | null = response.status === 200
      ? await response.json().catch(() => null)
      : null;
    const accepted = confirmation?.ok === true;

    if (!accepted) {
      return apiError(
        502,
        "GOOGLE_SHEETS_REQUEST_FAILED",
        "No pudimos guardar el lead en Google Sheets.",
      );
    }

    return apiOk({ saved: true, prize: awardedPrize }, { status: 202 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON valido.");
    }

    return handleRouteError(error, "api.gift_leads");
  }
}
