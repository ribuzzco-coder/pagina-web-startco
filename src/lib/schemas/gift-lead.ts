import { z } from "zod";

const birthdaySchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato YYYY-MM-DD.")
  .refine((value) => {
    const birthdayTime = Date.parse(`${value}T00:00:00Z`);
    return !Number.isNaN(birthdayTime) && new Date(birthdayTime).toISOString().slice(0, 10) === value && birthdayTime <= Date.now();
  }, "Selecciona una fecha válida que no sea futura.");

export const giftLeadSchema = z
  .object({
    brand: z.literal("nunaamautta"),
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(160).toLowerCase(),
    phone: z
      .string()
      .trim()
      .min(7)
      .max(30)
      .refine((value) => {
        const digits = value.replace(/\D/g, "");

        return digits.length >= 7 && digits.length <= 15;
      }, "Ingresa un celular valido."),
    birthday: z.preprocess(
      (value) => (value === "" ? undefined : value),
      birthdaySchema,
    ),
    sourcePath: z.string().trim().max(200).optional(),
    productInterest: z.string().trim().max(300).optional(),
    purchaseStatus: z.enum(["purchased", "interested"]),
  })
  .superRefine((value, ctx) => {
    if (value.brand === "nunaamautta" && (!value.productInterest || value.productInterest.length < 2)) {
      ctx.addIssue({ code: "custom", path: ["productInterest"], message: "Cuéntanos qué producto compraste o te interesó." });
    }
  });

export type GiftLeadInput = z.infer<typeof giftLeadSchema>;
