import { z } from "zod";

const booleanish = z
  .union([z.boolean(), z.literal("true"), z.literal("false"), z.literal("1"), z.literal("0")])
  .transform((value) => value === true || value === "true" || value === "1");

export const diagnosticRequestSchema = z.object({
  nombre: z.string().trim().min(2).max(120),
  empresa: z.string().trim().min(2).max(160),
  cargo: z.string().trim().max(120).optional().nullable(),
  whatsapp: z.string().trim().min(7).max(40).optional().nullable(),
  email: z.string().trim().email().max(160),
  sector: z.string().trim().min(2).max(120),
  yaEstaVendiendo: booleanish,
  retoPrincipal: z.string().trim().min(10).max(600),
  tamanoEquipo: z.string().trim().max(80).optional().nullable(),
  contexto: z.string().trim().max(3000).optional().nullable(),
  source: z.string().trim().min(2).max(80).optional(),
  turnstileToken: z.string().trim().optional().nullable(),
  website: z.string().trim().max(0).optional(),
});

export type DiagnosticRequestInput = z.infer<typeof diagnosticRequestSchema>;
