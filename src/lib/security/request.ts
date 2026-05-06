import "server-only";

import { isIP } from "node:net";

import { env } from "@/lib/env";
import { normalizeEmail, normalizeNullableString, normalizeWhitespace } from "@/lib/utils/strings";
import { sha256 } from "@/lib/utils/crypto";

export function getClientIp(request: Request) {
  const trustedHeaderValue = request.headers.get(env.TRUSTED_IP_HEADER);
  const trustedIp = getIpFromHeaderValue(trustedHeaderValue);

  if (trustedIp) {
    return trustedIp;
  }

  if (env.NODE_ENV === "development") {
    for (const headerName of ["x-forwarded-for", "x-real-ip", "cf-connecting-ip"]) {
      const fallbackIp = getIpFromHeaderValue(request.headers.get(headerName));

      if (fallbackIp) {
        return fallbackIp;
      }
    }
  }

  return "unknown";
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

function getIpFromHeaderValue(value?: string | null) {
  if (!value) {
    return null;
  }

  for (const part of value.split(",")) {
    const normalized = normalizeIpCandidate(part);

    if (normalized) {
      return normalized;
    }
  }

  return null;
}

function normalizeIpCandidate(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  const withoutIpv6Brackets = trimmed.replace(/^\[([^[\]]+)\](?::\d+)?$/, "$1");
  const withoutIpv4Port = withoutIpv6Brackets.replace(
    /^(\d{1,3}(?:\.\d{1,3}){3}):\d+$/,
    "$1",
  );

  return isIP(withoutIpv4Port) ? withoutIpv4Port : null;
}

