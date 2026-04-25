import { NextResponse } from "next/server";

import { AUTH_ERROR_PATH, AUTH_POST_LOGIN_PATH } from "@/lib/env";
import { authCallbackQuerySchema } from "@/lib/schemas/auth";
import { createBackendServices } from "@/services/bootstrap";

function getSafeRedirectPath(path?: string | null) {
  if (!path || !path.startsWith("/")) {
    return AUTH_POST_LOGIN_PATH;
  }

  return path;
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const queryInput = Object.fromEntries(requestUrl.searchParams.entries());
  const parsed = authCallbackQuerySchema.safeParse(queryInput);

  const fallbackUrl = new URL(AUTH_ERROR_PATH, requestUrl.origin);

  if (!parsed.success) {
    fallbackUrl.searchParams.set("reason", "invalid_callback_query");
    return NextResponse.redirect(fallbackUrl);
  }

  const { code, error, error_description: errorDescription, next } = parsed.data;

  if (error) {
    fallbackUrl.searchParams.set("reason", error);
    if (errorDescription) {
      fallbackUrl.searchParams.set("description", errorDescription);
    }
    return NextResponse.redirect(fallbackUrl);
  }

  if (!code) {
    fallbackUrl.searchParams.set("reason", "missing_code");
    return NextResponse.redirect(fallbackUrl);
  }

  const redirectPath = getSafeRedirectPath(next);

  try {
    const { authService } = createBackendServices();
    await authService.exchangeCodeForSession(code);

    return NextResponse.redirect(new URL(redirectPath, requestUrl.origin));
  } catch {
    fallbackUrl.searchParams.set("reason", "session_exchange_failed");
    return NextResponse.redirect(fallbackUrl);
  }
}

