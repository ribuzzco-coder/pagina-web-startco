import type { ZodError } from "zod";

import type { ApiFieldErrors } from "@/types/api";

export function getZodFieldErrors(error: ZodError): ApiFieldErrors {
  return error.flatten().fieldErrors as ApiFieldErrors;
}

export async function readJsonBody<T>(request: Request) {
  return (await request.json()) as T;
}

