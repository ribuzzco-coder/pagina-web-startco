import { z } from "zod";

export const diagnosticRequestStatusSchema = z.enum([
  "pending_review",
  "reviewed",
  "qualified",
  "unqualified",
  "archived",
]);

export const adminDiagnosticRequestListQuerySchema = z.object({
  status: diagnosticRequestStatusSchema.optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().datetime().optional(),
});

export const updateDiagnosticRequestSchema = z
  .object({
    status: diagnosticRequestStatusSchema.optional(),
    internalNotes: z.string().trim().max(4000).optional().nullable(),
  })
  .refine((value) => value.status !== undefined || value.internalNotes !== undefined, {
    message: "Debes enviar al menos un campo para actualizar.",
  });

export type AdminDiagnosticRequestListQuery = z.infer<
  typeof adminDiagnosticRequestListQuerySchema
>;
export type UpdateDiagnosticRequestInput = z.infer<typeof updateDiagnosticRequestSchema>;
