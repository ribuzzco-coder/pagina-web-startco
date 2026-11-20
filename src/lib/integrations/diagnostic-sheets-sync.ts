import "server-only";

import { env } from "@/lib/env";
import { decryptDiagnosticFields } from "@/lib/security/sensitive-fields";
import { SITE_CONFIG } from "@/lib/site-config";
import type { DiagnosticRequestRow } from "@/types/database";

export function submissionFields(row: DiagnosticRequestRow) {
  const contact = decryptDiagnosticFields(row);
  return {
    nombre: row.nombre,
    empresa: row.empresa,
    cargo: row.cargo,
    whatsapp: contact.whatsapp,
    email: contact.email,
    sector: row.sector,
    queVende: row.que_vende,
    aQuienVende: row.a_quien_vende,
    procesoActual: row.proceso_actual,
    queFrena: row.que_frena,
    metaConcreta: row.meta_concreta,
    presupuesto: row.presupuesto,
    urgencia: row.urgencia,
    autoridad: row.autoridad,
    tamanoEquipo: row.tamano_equipo,
    contexto: contact.contexto,
    source: row.source,
  };
}

export async function syncDiagnosticRequestToSheets(row: DiagnosticRequestRow) {
  if (!env.DIAGNOSTIC_SHEETS_WEBHOOK_URL) return false;
  const response = await fetch(env.DIAGNOSTIC_SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(6000),
    body: JSON.stringify({
      ...submissionFields(row),
      id: row.id,
      submittedAt: row.created_at,
      fitScore: row.fit_score,
      routingTier: row.routing_tier,
      adminUrl: `${SITE_CONFIG.url}/admin/solicitudes`,
    }),
  });
  if (!response.ok) return false;
  const result = await response.json();
  return result?.ok === true;
}
