import "server-only";

import { ApiError } from "@/lib/api/errors";

type WindowEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

const store = globalThis.__ribuzzRateLimitStore ?? new Map<string, WindowEntry>();

if (!globalThis.__ribuzzRateLimitStore) {
  globalThis.__ribuzzRateLimitStore = store;
}

declare global {
  var __ribuzzRateLimitStore: Map<string, WindowEntry> | undefined;
}

export function applyRateLimit({ key, limit, windowMs }: RateLimitOptions) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, {
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
  store.set(key, current);
}
