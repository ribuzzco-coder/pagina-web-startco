import type { Json } from "@/types/database";

export function toJsonValue(value: unknown): Json {
  return JSON.parse(JSON.stringify(value ?? {})) as Json;
}

