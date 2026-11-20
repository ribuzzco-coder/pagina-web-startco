import type { ApiErrorPayload, ApiSuccess } from "@/types/api";

export type DiagnosticTier = "llamada" | "regalos" | "newsletter";
type Success = ApiSuccess<{ received: boolean; duplicate: boolean; fitScore: number; routingTier: DiagnosticTier }>;

/** The fetcher can be replaced by an in-memory fake; it never runs until the user submits. */
export async function submitDiagnostic(payload: Record<string, unknown>, fetcher: typeof fetch = fetch) {
  try {
    const response = await fetcher("/api/diagnostic-request", {
      method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload),
    });
    const result = (await response.json()) as Success | ApiErrorPayload;
    if (!response.ok || !result.ok) {
      const error = result as ApiErrorPayload;
      return { ok: false as const, message: error.error?.message ?? "No pudimos enviar el formulario. Intenta de nuevo.", fieldErrors: error.error?.fieldErrors ?? {} };
    }
    const tier = result.data?.routingTier;
    if (tier !== "llamada" && tier !== "regalos" && tier !== "newsletter") {
      return { ok: false as const, message: "No pudimos confirmar el siguiente paso. Contáctanos para recibir ayuda.", fieldErrors: {} };
    }
    return { ok: true as const, tier };
  } catch {
    return { ok: false as const, message: "No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.", fieldErrors: {} };
  }
}
