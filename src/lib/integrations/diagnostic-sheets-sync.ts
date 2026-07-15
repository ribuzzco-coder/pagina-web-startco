import "server-only";

import { env } from "@/lib/env";
import { logger } from "@/lib/logger";
import { SITE_CONFIG } from "@/lib/site-config";

type DiagnosticSheetsSyncInput = {
  id: string;
  nombre: string;
  empresa: string;
  cargo?: string | null;
  email: string;
  whatsapp?: string | null;
  sector: string;
  queVende: string;
  aQuienVende: string;
  procesoActual: string;
  queFrena: string;
  metaConcreta?: string | null;
  presupuesto: string;
  urgencia: string;
  autoridad: string;
  tamanoEquipo?: string | null;
  contexto?: string | null;
  fitScore: number;
  routingTier: "llamada" | "regalos" | "newsletter";
  source: string;
};

/**
 * Reenvia la solicitud de diagnostico a un Google Sheet via Apps Script webhook,
 * mismo patron que /api/gift-leads. Desde esa hoja, el equipo conecta su propia
 * automatizacion (Make/Zapier) para notificarse por Telegram o WhatsApp.
 *
 * Es "best effort": si DIAGNOSTIC_SHEETS_WEBHOOK_URL no esta configurado o la
 * llamada falla, se registra en el logger pero nunca se propaga el error — un
 * problema con Sheets no debe tumbar la creacion de la solicitud en si.
 */
export async function syncDiagnosticRequestToSheets(input: DiagnosticSheetsSyncInput) {
  if (!env.DIAGNOSTIC_SHEETS_WEBHOOK_URL) {
    logger.warn(
      "diagnostic_sheets_sync.skipped",
      "DIAGNOSTIC_SHEETS_WEBHOOK_URL no configurado — la solicitud no se reenvio a Sheets.",
      { diagnosticRequestId: input.id },
    );
    return;
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    id: input.id,
    nombre: input.nombre,
    empresa: input.empresa,
    cargo: input.cargo ?? "",
    email: input.email,
    whatsapp: input.whatsapp ?? "",
    sector: input.sector,
    queVende: input.queVende,
    aQuienVende: input.aQuienVende,
    procesoActual: input.procesoActual,
    queFrena: input.queFrena,
    metaConcreta: input.metaConcreta ?? "",
    presupuesto: input.presupuesto,
    urgencia: input.urgencia,
    autoridad: input.autoridad,
    tamanoEquipo: input.tamanoEquipo ?? "",
    contexto: input.contexto ?? "",
    fitScore: input.fitScore,
    routingTier: input.routingTier,
    source: input.source,
    adminUrl: `${SITE_CONFIG.url}/admin/solicitudes`,
  };

  try {
    // Google Apps Script devuelve 302 redirect después de procesar el POST.
    // Seguir el redirect convierte el POST en GET (405). Se usa redirect:"manual"
    // y se trata 302 como éxito — el script ya ejecutó antes de redirigir.
    const response = await fetch(env.DIAGNOSTIC_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "manual",
    });

    const accepted = response.status === 200 || response.status === 302;

    if (!accepted) {
      logger.error(
        "diagnostic_sheets_sync.failed",
        "Google Sheets respondio con un estado inesperado.",
        { diagnosticRequestId: input.id, status: response.status },
      );
      return;
    }

    logger.info("diagnostic_sheets_sync.sent", "Solicitud de diagnostico reenviada a Sheets", {
      diagnosticRequestId: input.id,
      routingTier: input.routingTier,
    });
  } catch (error) {
    logger.error("diagnostic_sheets_sync.failed", "No se pudo reenviar la solicitud a Sheets", {
      diagnosticRequestId: input.id,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
