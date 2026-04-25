import { z } from "zod";

const emailSchema = z.email("Ingresa un correo valido.").max(320, "El correo es demasiado largo.");
const passwordSchema = z
  .string()
  .min(8, "La contrasena debe tener al menos 8 caracteres.")
  .max(128, "La contrasena es demasiado larga.");
const optionalRedirectSchema = z.url("La URL de redireccion no es valida.").optional();
const optionalDisplayNameSchema = z.string().trim().min(2).max(120).optional();

export const authSignupSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  fullName: optionalDisplayNameSchema,
});

export const authLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "La contrasena es obligatoria."),
});

export const authForgotPasswordSchema = z.object({
  email: emailSchema,
  redirectTo: optionalRedirectSchema,
});

export const authResetPasswordSchema = z.object({
  password: passwordSchema,
});

export const authGoogleOauthSchema = z.object({
  redirectTo: optionalRedirectSchema,
  nextPath: z.string().trim().min(1).max(512).optional(),
});

export const authCallbackQuerySchema = z.object({
  code: z.string().min(1).optional(),
  next: z.string().trim().min(1).max(512).optional(),
  error: z.string().min(1).optional(),
  error_description: z.string().min(1).optional(),
});

