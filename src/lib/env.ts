import "server-only";

import { z } from "zod";

const optionalUrl = z.preprocess((value) => (value === "" ? undefined : value), z.string().url().optional());
const optionalNonEmptyString = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().min(1).optional(),
);

const envSchema = z
  .object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    NEXT_PUBLIC_APP_URL: optionalUrl,
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(20),
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: optionalNonEmptyString,
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(20),
    INTERNAL_ADMIN_API_KEY: z.string().min(32),
    TURNSTILE_SECRET_KEY: optionalNonEmptyString,
    RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60_000),
    RATE_LIMIT_MAX_PUBLIC_REQUESTS: z.coerce.number().int().positive().default(10),
    CTA_TRACK_RATE_LIMIT_MAX: z.coerce.number().int().positive().default(60),
    DIAGNOSTIC_DUPLICATE_WINDOW_HOURS: z.coerce.number().int().positive().default(24),
  })
  .superRefine((values, ctx) => {
    const hasTurnstileSecret = Boolean(values.TURNSTILE_SECRET_KEY);
    const hasTurnstileSiteKey = Boolean(values.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

    if (hasTurnstileSecret !== hasTurnstileSiteKey) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "TURNSTILE_SECRET_KEY y NEXT_PUBLIC_TURNSTILE_SITE_KEY deben configurarse juntos o dejarse vacios.",
      });
    }
  });

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  INTERNAL_ADMIN_API_KEY: process.env.INTERNAL_ADMIN_API_KEY,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX_PUBLIC_REQUESTS: process.env.RATE_LIMIT_MAX_PUBLIC_REQUESTS,
  CTA_TRACK_RATE_LIMIT_MAX: process.env.CTA_TRACK_RATE_LIMIT_MAX,
  DIAGNOSTIC_DUPLICATE_WINDOW_HOURS: process.env.DIAGNOSTIC_DUPLICATE_WINDOW_HOURS,
});

