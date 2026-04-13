import { normalizeEmail, normalizeNullableString, normalizeWhitespace } from "@/lib/utils/strings";
import { sha256 } from "@/lib/utils/crypto";

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function buildDiagnosticSubmissionHash(input: {
  empresa: string;
  email: string;
  retoPrincipal: string;
}) {
  return sha256(
    [
      normalizeWhitespace(input.empresa).toLowerCase(),
      normalizeEmail(input.email),
      normalizeWhitespace(input.retoPrincipal).toLowerCase(),
    ].join("::"),
  );
}

export function normalizeDiagnosticInput(input: {
  nombre: string;
  empresa: string;
  cargo?: string | null;
  whatsapp?: string | null;
  email: string;
  sector: string;
  yaEstaVendiendo: boolean;
  retoPrincipal: string;
  tamanoEquipo?: string | null;
  contexto?: string | null;
  source?: string | null;
}) {
  return {
    nombre: normalizeWhitespace(input.nombre),
    empresa: normalizeWhitespace(input.empresa),
    cargo: normalizeNullableString(input.cargo),
    whatsapp: normalizeNullableString(input.whatsapp),
    email: normalizeEmail(input.email),
    sector: normalizeWhitespace(input.sector),
    yaEstaVendiendo: Boolean(input.yaEstaVendiendo),
    retoPrincipal: normalizeWhitespace(input.retoPrincipal),
    tamanoEquipo: normalizeNullableString(input.tamanoEquipo),
    contexto: normalizeNullableString(input.contexto),
    source: normalizeNullableString(input.source) ?? "website",
  };
}

export function normalizeInternalNotes(value?: string | null) {
  return normalizeNullableString(value);
}

