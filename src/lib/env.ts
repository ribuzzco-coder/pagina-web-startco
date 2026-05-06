import "server-only";

import { z } from "zod";

const optionalUrl = z.preprocess((value) => (value === "" ? undefined : value), z.string().url().optional());
const optionalNonEmptyString = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().min(1).optional(),
);
const encryptionKeySchema = z
  .string()
  .min(24)
  .superRefine((value, ctx) => {
    try {
      const decoded = Buffer.from(value, "base64");

      if (decoded.length !== 32) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SENSITIVE_FIELD_ENCRYPTION_KEY debe ser una cadena base64 de 32 bytes.",
        });
      }
    } catch {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "SENSITIVE_FIELD_ENCRYPTION_KEY debe ser una cadena base64 valida.",
      });
    }
  });
const trustedIpHeaderSchema = z.enum([
  "x-vercel-forwarded-for",
  "cf-connecting-ip",
  "x-real-ip",
  "x-forwarded-for",
]);

const envSchema = z
  .object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    NEXT_PUBLIC_APP_URL: optionalUrl,
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(20),
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: optionalNonEmptyString,
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(20),
    SENSITIVE_FIELD_ENCRYPTION_KEY: encryptionKeySchema,
    INTERNAL_HEALTHCHECK_TOKEN: optionalNonEmptyString,
    TURNSTILE_SECRET_KEY: optionalNonEmptyString,
    TRUSTED_IP_HEADER: trustedIpHeaderSchema.default("x-vercel-forwarded-for"),
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

export type ServerEnv = z.infer<typeof envSchema>;

let cachedEnv: ServerEnv | undefined;

function readRawEnv() {
  return {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SENSITIVE_FIELD_ENCRYPTION_KEY: process.env.SENSITIVE_FIELD_ENCRYPTION_KEY,
    INTERNAL_HEALTHCHECK_TOKEN: process.env.INTERNAL_HEALTHCHECK_TOKEN,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
    TRUSTED_IP_HEADER: process.env.TRUSTED_IP_HEADER,
    RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS,
    RATE_LIMIT_MAX_PUBLIC_REQUESTS: process.env.RATE_LIMIT_MAX_PUBLIC_REQUESTS,
    CTA_TRACK_RATE_LIMIT_MAX: process.env.CTA_TRACK_RATE_LIMIT_MAX,
    DIAGNOSTIC_DUPLICATE_WINDOW_HOURS: process.env.DIAGNOSTIC_DUPLICATE_WINDOW_HOURS,
  };
}

export function getEnv(): ServerEnv {
  if (!cachedEnv) {
    cachedEnv = envSchema.parse(readRawEnv());
  }

  return cachedEnv;
}

export const env = new Proxy({} as ServerEnv, {
  get(_target, property) {
    return getEnv()[property as keyof ServerEnv];
  },
  has(_target, property) {
    return property in getEnv();
  },
  ownKeys() {
    return Reflect.ownKeys(getEnv());
  },
  getOwnPropertyDescriptor(_target, property) {
    const descriptor = Object.getOwnPropertyDescriptor(getEnv(), property);

    return (
      descriptor ?? {
        configurable: true,
        enumerable: true,
      }
    );
  },
});

