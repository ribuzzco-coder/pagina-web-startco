import "server-only";

import { env } from "@/lib/env";
import { ApiError } from "@/lib/api/errors";

type TurnstileVerificationResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export function isTurnstileEnabled() {
  return Boolean(env.TURNSTILE_SECRET_KEY && env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
}

export async function verifyTurnstileToken(token?: string | null, remoteIp?: string | null) {
  if (!isTurnstileEnabled()) {
    if (env.NODE_ENV === "production") {
      throw new ApiError(
        503,
        "FORM_PROTECTION_UNAVAILABLE",
        "El formulario no esta disponible temporalmente.",
      );
    }

    return;
  }

  if (!token) {
    throw new ApiError(400, "TURNSTILE_REQUIRED", "Falta la verificacion anti-spam.");
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY!,
      response: token,
      remoteip: remoteIp ?? "",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new ApiError(502, "TURNSTILE_UNAVAILABLE", "No pudimos validar la proteccion anti-spam.");
  }

  const result = (await response.json()) as TurnstileVerificationResponse;

  if (!result.success) {
    throw new ApiError(400, "TURNSTILE_INVALID", "La verificacion anti-spam no fue valida.");
  }
}

