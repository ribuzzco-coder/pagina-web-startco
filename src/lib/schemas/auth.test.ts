import assert from "node:assert/strict";
import test from "node:test";

import {
  authForgotPasswordSchema,
  authGoogleOauthSchema,
  authLoginSchema,
  authResetPasswordSchema,
  authSignupSchema,
} from "@/lib/schemas/auth";

test("authSignupSchema acepta payload valido", () => {
  const parsed = authSignupSchema.safeParse({
    email: "equipo@ribuzz.co",
    password: "secreto123",
    fullName: "Equipo RiBuzz",
  });

  assert.equal(parsed.success, true);
});

test("authLoginSchema rechaza payload sin contrasena", () => {
  const parsed = authLoginSchema.safeParse({
    email: "equipo@ribuzz.co",
    password: "",
  });

  assert.equal(parsed.success, false);
});

test("authForgotPasswordSchema valida redirect URL", () => {
  const parsed = authForgotPasswordSchema.safeParse({
    email: "equipo@ribuzz.co",
    redirectTo: "https://ribuzz.co/reset-password",
  });

  assert.equal(parsed.success, true);
});

test("authResetPasswordSchema exige minimo de contrasena", () => {
  const parsed = authResetPasswordSchema.safeParse({
    password: "123",
  });

  assert.equal(parsed.success, false);
});

test("authGoogleOauthSchema valida nextPath opcional", () => {
  const parsed = authGoogleOauthSchema.safeParse({
    nextPath: "/panel",
  });

  assert.equal(parsed.success, true);
});

