import "server-only";

import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";

import { env } from "@/lib/env";

const ENCRYPTION_VERSION = "v1";
const ENCRYPTION_PREFIX = `enc:${ENCRYPTION_VERSION}`;
const IV_LENGTH = 12;

type SensitiveFieldValue = string | null | undefined;

type EncryptedDiagnosticFields = {
  email: string;
  whatsapp: string | null;
  contexto: string | null;
};

type DecryptedDiagnosticFields = {
  email: string;
  whatsapp: string | null;
  contexto: string | null;
};

export function encryptDiagnosticFields(input: {
  email: string;
  whatsapp?: SensitiveFieldValue;
  contexto?: SensitiveFieldValue;
}): EncryptedDiagnosticFields {
  return {
    email: encryptSensitiveValue(input.email) ?? "",
    whatsapp: encryptSensitiveValue(input.whatsapp),
    contexto: encryptSensitiveValue(input.contexto),
  };
}

export function decryptDiagnosticFields(input: {
  email: string;
  whatsapp?: SensitiveFieldValue;
  contexto?: SensitiveFieldValue;
}): DecryptedDiagnosticFields {
  return {
    email: decryptSensitiveValue(input.email) ?? "",
    whatsapp: decryptSensitiveValue(input.whatsapp),
    contexto: decryptSensitiveValue(input.contexto),
  };
}

export function encryptSensitiveValue(value: SensitiveFieldValue) {
  if (!value) {
    return null;
  }

  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv("aes-256-gcm", getEncryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return `${ENCRYPTION_PREFIX}:${iv.toString("base64")}:${authTag.toString("base64")}:${encrypted.toString("base64")}`;
}

export function decryptSensitiveValue(value: SensitiveFieldValue) {
  if (!value) {
    return null;
  }

  if (!value.startsWith(`${ENCRYPTION_PREFIX}:`)) {
    return value;
  }

  const [, , ivPart, authTagPart, encryptedPart] = value.split(":");

  if (!ivPart || !authTagPart || !encryptedPart) {
    throw new Error("Invalid encrypted sensitive field payload.");
  }

  const decipher = createDecipheriv(
    "aes-256-gcm",
    getEncryptionKey(),
    Buffer.from(ivPart, "base64"),
  );
  decipher.setAuthTag(Buffer.from(authTagPart, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedPart, "base64")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

function getEncryptionKey() {
  return Buffer.from(env.SENSITIVE_FIELD_ENCRYPTION_KEY, "base64");
}
