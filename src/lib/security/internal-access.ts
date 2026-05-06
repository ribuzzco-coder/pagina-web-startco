import "server-only";

import { timingSafeEqual } from "node:crypto";

import { ApiError } from "@/lib/api/errors";
import { env } from "@/lib/env";

export function requireHealthcheckAccess(request: Request) {
  const expectedToken = env.INTERNAL_HEALTHCHECK_TOKEN?.trim();

  if (!expectedToken) {
    if (env.NODE_ENV === "production") {
      throw new ApiError(
        503,
        "HEALTHCHECK_NOT_CONFIGURED",
        "La comprobacion interna de salud no esta disponible temporalmente.",
      );
    }

    return;
  }

  const providedToken =
    extractBearerToken(request.headers.get("authorization")) ??
    request.headers.get("x-healthcheck-token")?.trim() ??
    null;

  if (!providedToken || !safeCompareSecret(providedToken, expectedToken)) {
    throw new ApiError(401, "UNAUTHORIZED", "No autorizado.");
  }
}

function extractBearerToken(authorizationHeader?: string | null) {
  return authorizationHeader?.replace(/^Bearer\s+/i, "").trim() || null;
}

function safeCompareSecret(candidate: string, expected: string) {
  const candidateBuffer = Buffer.from(candidate);
  const expectedBuffer = Buffer.from(expected);

  if (candidateBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(candidateBuffer, expectedBuffer);
}
