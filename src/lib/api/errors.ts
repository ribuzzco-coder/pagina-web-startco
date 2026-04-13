import type { ApiFieldErrors } from "@/types/api";

export class ApiError extends Error {
  status: number;
  code: string;
  fieldErrors?: ApiFieldErrors;
  expose: boolean;

  constructor(
    status: number,
    code: string,
    message: string,
    options?: {
      fieldErrors?: ApiFieldErrors;
      expose?: boolean;
      cause?: unknown;
    },
  ) {
    super(message, options?.cause ? { cause: options.cause } : undefined);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fieldErrors = options?.fieldErrors;
    this.expose = options?.expose ?? true;
  }
}

