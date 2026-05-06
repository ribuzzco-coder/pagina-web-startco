import "server-only";

import { ApiError } from "@/lib/api/errors";
import { env } from "@/lib/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { sha256 } from "@/lib/utils/crypto";

type WindowEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  scope: string;
  identifier: string;
  limit: number;
  windowMs: number;
};

type SharedRateLimitResult = {
  allowed: boolean;
  remaining: number;
  reset_at: string;
};

const store = globalThis.__ribuzzRateLimitStore ?? new Map<string, WindowEntry>();
let rateLimitClient: ReturnType<typeof createSupabaseAdminClient> | null = null;

if (!globalThis.__ribuzzRateLimitStore) {
  globalThis.__ribuzzRateLimitStore = store;
}

declare global {
  var __ribuzzRateLimitStore: Map<string, WindowEntry> | undefined;
}

export async function applyRateLimit({ scope, identifier, limit, windowMs }: RateLimitOptions) {
  const normalizedIdentifier = identifier.trim() || "unknown";

  try {
    const result = await applySharedRateLimit({
      scope,
      identifier: normalizedIdentifier,
      limit,
      windowMs,
    });

    if (!result.allowed) {
      throw new ApiError(
        429,
        "RATE_LIMITED",
        "Se alcanzo el limite temporal de solicitudes. Intenta de nuevo en unos minutos.",
      );
    }

    return;
  } catch (error) {
    if (!(error instanceof ApiError) || error.code !== "RATE_LIMIT_UNAVAILABLE") {
      throw error;
    }

    if (env.NODE_ENV !== "development") {
      throw error;
    }
  }

  // Development fallback so local iteration does not depend on the database.
  const localKey = `${scope}:${normalizedIdentifier}`;
  const now = Date.now();
  const current = store.get(localKey);

  if (!current || current.resetAt <= now) {
    store.set(localKey, {
      count: 1,
      resetAt: now + windowMs,
    });
    return;
  }

  if (current.count >= limit) {
    throw new ApiError(
      429,
      "RATE_LIMITED",
      "Se alcanzo el limite temporal de solicitudes. Intenta de nuevo en unos minutos.",
    );
  }

  current.count += 1;
  store.set(localKey, current);
}

async function applySharedRateLimit({
  scope,
  identifier,
  limit,
  windowMs,
}: RateLimitOptions): Promise<SharedRateLimitResult> {
  const { data, error } = await getRateLimitClient().rpc("check_rate_limit", {
    p_scope: scope,
    p_identifier_hash: sha256(identifier),
    p_limit: limit,
    p_window_ms: windowMs,
  });

  if (error) {
    throw new ApiError(
      503,
      "RATE_LIMIT_UNAVAILABLE",
      "No pudimos validar el limite de solicitudes.",
      {
        cause: error,
        expose: false,
      },
    );
  }

  const result = Array.isArray(data) ? data[0] : data;

  if (
    !result ||
    typeof result !== "object" ||
    !("allowed" in result) ||
    !("remaining" in result) ||
    !("reset_at" in result)
  ) {
    throw new ApiError(
      503,
      "RATE_LIMIT_UNAVAILABLE",
      "No pudimos validar el limite de solicitudes.",
      {
        expose: false,
      },
    );
  }

  return result as SharedRateLimitResult;
}

function getRateLimitClient() {
  if (!rateLimitClient) {
    rateLimitClient = createSupabaseAdminClient();
  }

  return rateLimitClient;
}
