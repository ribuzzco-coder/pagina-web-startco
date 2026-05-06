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
  yaEstaVendiendo: boolean;
  retoPrincipal: string;
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
    yaEstaVendiendo: row.ya_esta_vendiendo,
    retoPrincipal: row.reto_principal,
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
