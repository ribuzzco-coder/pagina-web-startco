import { z } from "zod";

export const trackCtaSchema = z.object({
  label: z.string().trim().min(2).max(120),
  location: z.string().trim().min(2).max(120),
  href: z.string().trim().url().max(500),
  source: z.string().trim().min(2).max(80).optional(),
  diagnosticRequestId: z.string().uuid().optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  turnstileToken: z.string().trim().optional().nullable(),
  website: z.string().trim().max(0).optional(),
});

export type TrackCtaInput = z.infer<typeof trackCtaSchema>;
