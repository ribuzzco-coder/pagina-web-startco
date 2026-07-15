import { z } from "zod";

const procesoActualEnum = z.enum(["aun_validando", "funciona_informal", "consistente"]);
const presupuestoEnum = z.enum(["definido", "aproximado", "explorando"]);
const urgenciaEnum = z.enum(["ya", "proximo_mes", "tres_meses", "explorando"]);
const autoridadEnum = z.enum(["yo_decido", "en_conjunto", "no_decido"]);

export const diagnosticRequestSchema = z.object({
  nombre: z.string().trim().min(2).max(120),
  empresa: z.string().trim().min(2).max(160),
  cargo: z.string().trim().max(120).optional().nullable(),
  whatsapp: z.string().trim().min(7).max(40).optional().nullable(),
  email: z.string().trim().email().max(160),
  sector: z.string().trim().min(2).max(120),
  queVende: z.string().trim().min(2).max(200),
  aQuienVende: z.string().trim().min(2).max(200),
  procesoActual: procesoActualEnum,
  queFrena: z.string().trim().min(2).max(600),
  metaConcreta: z.string().trim().max(600).optional().nullable(),
  presupuesto: presupuestoEnum,
  urgencia: urgenciaEnum,
  autoridad: autoridadEnum,
  tamanoEquipo: z.string().trim().max(80).optional().nullable(),
  contexto: z.string().trim().max(3000).optional().nullable(),
  source: z.string().trim().min(2).max(80).optional(),
  turnstileToken: z.string().trim().optional().nullable(),
  website: z.string().trim().max(0).optional(),
  dataConsent: z
    .boolean()
    .refine((value) => value === true, {
      message: "Debes aceptar el tratamiento de datos personales para continuar.",
    }),
});

export type DiagnosticRequestInput = z.infer<typeof diagnosticRequestSchema>;
