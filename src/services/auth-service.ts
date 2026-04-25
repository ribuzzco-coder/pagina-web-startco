import { ApiError } from "@/lib/api/errors";
import { AUTH_EMAIL_CALLBACK_PATH, env } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type SignupInput = {
  email: string;
  password: string;
  fullName?: string;
};

type LoginInput = {
  email: string;
  password: string;
};

type ForgotPasswordInput = {
  email: string;
  redirectTo?: string;
};

type GoogleOauthInput = {
  redirectTo?: string;
  nextPath?: string;
};

function normalizeAuthUser(user: {
  id: string;
  email?: string;
  app_metadata?: Record<string, unknown>;
  user_metadata?: Record<string, unknown>;
}) {
  return {
    id: user.id,
    email: user.email ?? null,
    provider: typeof user.app_metadata?.provider === "string" ? user.app_metadata.provider : null,
    fullName:
      typeof user.user_metadata?.full_name === "string" ? user.user_metadata.full_name : null,
  };
}

function buildAbsoluteUrl(path: string) {
  if (!env.NEXT_PUBLIC_APP_URL) {
    throw new ApiError(
      500,
      "APP_URL_NOT_CONFIGURED",
      "No se pudo construir la URL de autenticacion.",
      { expose: false },
    );
  }

  return new URL(path, env.NEXT_PUBLIC_APP_URL).toString();
}

export class AuthService {
  async signup(input: SignupInput) {
    const supabase = await createSupabaseServerClient();
    const emailRedirectTo = buildAbsoluteUrl(AUTH_EMAIL_CALLBACK_PATH);

    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
      options: {
        emailRedirectTo,
        data: {
          full_name: input.fullName ?? null,
        },
      },
    });

    if (error) {
      throw new ApiError(400, "AUTH_SIGNUP_FAILED", "No pudimos crear tu cuenta.", {
        cause: error,
      });
    }

    return {
      user: data.user ? normalizeAuthUser(data.user) : null,
      session: data.session
        ? {
            accessToken: data.session.access_token,
            expiresAt: data.session.expires_at ?? null,
          }
        : null,
    };
  }

  async login(input: LoginInput) {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: input.email,
      password: input.password,
    });

    if (error) {
      throw new ApiError(401, "AUTH_LOGIN_FAILED", "Credenciales invalidas.", {
        cause: error,
      });
    }

    if (!data.user || !data.session) {
      throw new ApiError(401, "AUTH_LOGIN_FAILED", "No pudimos iniciar sesion.");
    }

    return {
      user: normalizeAuthUser(data.user),
      session: {
        accessToken: data.session.access_token,
        expiresAt: data.session.expires_at ?? null,
      },
    };
  }

  async logout() {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new ApiError(500, "AUTH_LOGOUT_FAILED", "No pudimos cerrar la sesion.", {
        cause: error,
      });
    }
  }

  async getSession() {
    const supabase = await createSupabaseServerClient();
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw new ApiError(401, "AUTH_SESSION_FAILED", "No pudimos validar la sesion.", {
        cause: error,
      });
    }

    if (!session) {
      return null;
    }

    return {
      accessToken: session.access_token,
      expiresAt: session.expires_at ?? null,
      user: normalizeAuthUser(session.user),
    };
  }

  async getCurrentUser() {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      throw new ApiError(401, "AUTH_USER_FAILED", "No pudimos validar el usuario autenticado.", {
        cause: error,
      });
    }

    return user ? normalizeAuthUser(user) : null;
  }

  async sendPasswordRecovery(input: ForgotPasswordInput) {
    const supabase = await createSupabaseServerClient();
    const redirectTo = input.redirectTo ?? buildAbsoluteUrl(AUTH_EMAIL_CALLBACK_PATH);
    const { error } = await supabase.auth.resetPasswordForEmail(input.email, {
      redirectTo,
    });

    if (error) {
      throw new ApiError(
        400,
        "AUTH_PASSWORD_RECOVERY_FAILED",
        "No pudimos enviar el correo de recuperacion.",
        {
          cause: error,
        },
      );
    }
  }

  async resetPassword(password: string) {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      throw new ApiError(400, "AUTH_PASSWORD_RESET_FAILED", "No pudimos actualizar la contrasena.", {
        cause: error,
      });
    }

    return {
      user: data.user ? normalizeAuthUser(data.user) : null,
    };
  }

  async getGoogleOauthUrl(input: GoogleOauthInput) {
    const supabase = await createSupabaseServerClient();
    const callbackUrl = input.redirectTo ?? buildAbsoluteUrl(AUTH_EMAIL_CALLBACK_PATH);
    const normalizedNextPath = input.nextPath?.startsWith("/") ? input.nextPath : undefined;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: normalizedNextPath
          ? `${callbackUrl}?next=${encodeURIComponent(normalizedNextPath)}`
          : callbackUrl,
      },
    });

    if (error) {
      throw new ApiError(400, "AUTH_GOOGLE_OAUTH_FAILED", "No pudimos iniciar Google OAuth.", {
        cause: error,
      });
    }

    if (!data.url) {
      throw new ApiError(500, "AUTH_GOOGLE_OAUTH_FAILED", "No se recibio URL de autenticacion.");
    }

    return data.url;
  }

  async exchangeCodeForSession(code: string) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      throw new ApiError(401, "AUTH_CALLBACK_FAILED", "No pudimos completar el inicio de sesion.", {
        cause: error,
      });
    }
  }
}

