import { z } from "zod";

const optionalUrl = z.preprocess((value) => (value === "" ? undefined : value), z.string().url().optional());
const optionalNonEmptyString = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().min(1).optional(),
);

const publicEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: optionalUrl,
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(20),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: optionalNonEmptyString,
  NEXT_PUBLIC_AUTH_CALLBACK_PATH: z.string().startsWith("/").default("/api/auth/callback"),
  NEXT_PUBLIC_AUTH_POST_LOGIN_PATH: z.string().startsWith("/").default("/"),
  NEXT_PUBLIC_AUTH_ERROR_PATH: z.string().startsWith("/").default("/login"),
});

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  NEXT_PUBLIC_AUTH_CALLBACK_PATH: process.env.NEXT_PUBLIC_AUTH_CALLBACK_PATH,
  NEXT_PUBLIC_AUTH_POST_LOGIN_PATH: process.env.NEXT_PUBLIC_AUTH_POST_LOGIN_PATH,
  NEXT_PUBLIC_AUTH_ERROR_PATH: process.env.NEXT_PUBLIC_AUTH_ERROR_PATH,
});

