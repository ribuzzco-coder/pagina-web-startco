import "server-only";

import { decryptDiagnosticFields } from "@/lib/security/sensitive-fields";
import type { DiagnosticRequestRow } from "@/types/database";

export type AdminDiagnosticRequestDto = {
  id: string;
  createdAt: string;
  updatedAt: string;
  nombre: string;
  empresa: string;
  cargo: string | null;
  whatsapp: string | null;
  email: string;
  sector: string;
  queVende: string | null;
  aQuienVende: string | null;
  procesoActual: string | null;
  queFrena: string | null;
  metaConcreta: string | null;
  presupuesto: string | null;
  urgencia: string | null;
  autoridad: string | null;
  fitScore: number;
  routingTier: DiagnosticRequestRow["routing_tier"];
  tamanoEquipo: string | null;
  contexto: string | null;
  source: string;
  status: DiagnosticRequestRow["status"];
  reviewedAt: string | null;
  reviewedBy: string | null;
  internalNotes: string | null;
};

export function toAdminDiagnosticRequestDto(
  row: DiagnosticRequestRow,
): AdminDiagnosticRequestDto {
  const decryptedFields = decryptDiagnosticFields({
    email: row.email,
    whatsapp: row.whatsapp,
    contexto: row.contexto,
  });

  return {
    id: row.id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    nombre: row.nombre,
    empresa: row.empresa,
    cargo: row.cargo,
    whatsapp: decryptedFields.whatsapp,
    email: decryptedFields.email,
    sector: row.sector,
    queVende: row.que_vende,
    aQuienVende: row.a_quien_vende,
    procesoActual: row.proceso_actual,
    queFrena: row.que_frena,
    metaConcreta: row.meta_concreta,
    presupuesto: row.presupuesto,
    urgencia: row.urgencia,
    autoridad: row.autoridad,
    fitScore: row.fit_score,
    routingTier: row.routing_tier,
    tamanoEquipo: row.tamano_equipo,
    contexto: decryptedFields.contexto,
    source: row.source,
    status: row.status,
    reviewedAt: row.reviewed_at,
    reviewedBy: row.reviewed_by,
    internalNotes: row.internal_notes,
  };
}

export function toAdminDiagnosticRequestListDto(result: {
  items: DiagnosticRequestRow[];
  count: number;
  nextCursor: string | null;
}) {
  return {
    items: result.items.map(toAdminDiagnosticRequestDto),
    count: result.count,
    nextCursor: result.nextCursor,
  };
}
