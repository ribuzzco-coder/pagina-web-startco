export function normalizeWhitespace(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function normalizeNullableString(value?: string | null) {
  if (!value) {
    return null;
  }

  const normalized = normalizeWhitespace(value);
  return normalized.length > 0 ? normalized : null;
}

export function normalizeEmail(value: string) {
  return normalizeWhitespace(value).toLowerCase();
}

