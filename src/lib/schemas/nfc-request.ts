import { z } from "zod";

export const nfcRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  business: z.string().trim().max(160).optional().nullable(),
  whatsapp: z.string().trim().min(7).max(40),
  product: z.string().trim().min(2).max(80),
  purpose: z.string().trim().min(2).max(120),
  quantity: z.string().trim().min(2).max(80),
  addOn: z.string().trim().min(2).max(120),
  dataConsent: z.boolean().refine((value) => value === true, {
    message: "Debes aceptar el tratamiento de datos personales para continuar.",
  }),
});

export type NfcRequestInput = z.infer<typeof nfcRequestSchema>;
