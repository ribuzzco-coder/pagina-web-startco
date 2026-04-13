import { NextResponse } from "next/server";

import { ApiError } from "@/lib/api/errors";
import { logger } from "@/lib/logger";
import type { ApiErrorPayload, ApiFieldErrors, ApiSuccess } from "@/types/api";

export function apiOk<T>(data: T, init?: ResponseInit, meta?: Record<string, unknown>) {
  return NextResponse.json<ApiSuccess<T>>(
    {
      ok: true,
      data,
      meta,
    },
    init,
  );
}

export function apiError(
  status: number,
  code: string,
  message: string,
  fieldErrors?: ApiFieldErrors,
) {
  return NextResponse.json<ApiErrorPayload>(
    {
      ok: false,
      error: {
        code,
        message,
        fieldErrors,
      },
    },
    { status },
  );
}

export function handleRouteError(error: unknown, context: string) {
  if (error instanceof ApiError) {
    if (error.status >= 500) {
      logger.error(context, error.message, { code: error.code, cause: error.cause });
    }

    return apiError(
      error.status,
      error.code,
      error.expose ? error.message : "Ocurrio un error interno.",
      error.fieldErrors,
    );
  }

  logger.error(context, "Unhandled route error", { error });
  return apiError(500, "INTERNAL_SERVER_ERROR", "Ocurrio un error interno.");
}

