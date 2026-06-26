import { z } from "zod";

const birthdaySchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato YYYY-MM-DD.")
  .refine((value) => {
    const birthdayTime = Date.parse(`${value}T00:00:00`);

    return !Number.isNaN(birthdayTime) && birthdayTime <= Date.now();
  }, "La fecha de cumpleanos no puede ser futura.");

export const giftLeadSchema = z
  .object({
    brand: z.enum(["nunaamautta", "biondaymora"]),
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
  });

export type GiftLeadInput = z.infer<typeof giftLeadSchema>;
