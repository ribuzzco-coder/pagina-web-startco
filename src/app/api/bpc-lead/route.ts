import { z } from "zod";

import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { env } from "@/lib/env";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(140),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(30),
  interest: z.enum(["marca", "maquila", "formulacion", "invima", "distribucion", "otro"]),
  stage: z.enum(["idea", "desarrollo", "marca-activa", "escalamiento"]),
  volume: z.enum(["piloto", "pequena", "media", "gran-escala", "por-definir"]),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const parsed = leadSchema.safeParse(await readJsonBody<unknown>(request));
    if (!parsed.success) {
      return apiError(400, "INVALID_PAYLOAD", "Revisa los campos requeridos.", getZodFieldErrors(parsed.error));
    }

    const webhookUrl = env.BPC_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      return apiError(503, "GOOGLE_SHEETS_NOT_CONFIGURED", "El registro comercial está temporalmente en configuración.");
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        source: "landing-bpc-rueda-negocios",
        submittedAt: new Date().toISOString(),
        userAgent: request.headers.get("user-agent") ?? "",
      }),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      return apiError(502, "GOOGLE_SHEETS_REQUEST_FAILED", "No pudimos confirmar el registro. Inténtalo de nuevo.");
    }

    return apiOk({ saved: true }, { status: 202 });
  } catch (error) {
    if (error instanceof SyntaxError) return apiError(400, "INVALID_JSON", "La solicitud no es válida.");
    return handleRouteError(error, "api.bpc_lead");
  }
}
