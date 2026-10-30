import { apiError, apiOk, handleRouteError } from "@/lib/api/response";
import { getZodFieldErrors, readJsonBody } from "@/lib/api/validation";
import { nfcRequestSchema } from "@/lib/schemas/nfc-request";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { getClientIp } from "@/lib/security/request";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    await applyRateLimit({
      scope: "nfc-request",
      identifier: ip,
      limit: 10,
      windowMs: 60_000,
    });

    const body = await readJsonBody<unknown>(request);
    const parsed = nfcRequestSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(
        400,
        "INVALID_PAYLOAD",
        "La solicitud NFC tiene campos inválidos.",
        getZodFieldErrors(parsed.error),
      );
    }

    const { error } = await createSupabaseAdminClient()
      .from("nfc_requests")
      .insert({
        name: parsed.data.name,
        business: parsed.data.business || null,
        whatsapp: parsed.data.whatsapp,
        product: parsed.data.product,
        purpose: parsed.data.purpose,
        quantity: parsed.data.quantity,
        add_on: parsed.data.addOn,
        request_ip: ip,
        user_agent: request.headers.get("user-agent"),
        referrer: request.headers.get("referer"),
      });

    if (error) throw error;

    return apiOk({ saved: true }, { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return apiError(400, "INVALID_JSON", "El cuerpo enviado no es JSON válido.");
    }

    return handleRouteError(error, "api.nfc_request");
  }
}
