import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";
import { ApiError } from "@/lib/api/errors";
import { AdminProfileRepository } from "@/repositories/admin-profile-repository";
import type { Database } from "@/types/database";

type AdminRole = Database["public"]["Enums"]["admin_role"];

export type AdminActor = {
  actorId: string | null;
  actorEmail: string | null;
  authStrategy: "internal_api_key" | "supabase_auth";
  role: "system" | AdminRole;
};

export async function requireAdminAccess(request: Request): Promise<AdminActor> {
  const bearerToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();
  const headerToken = request.headers.get("x-admin-api-key")?.trim();
  const providedToken = bearerToken || headerToken;

  if (providedToken && providedToken === env.INTERNAL_ADMIN_API_KEY) {
    return {
      actorId: null,
      actorEmail: null,
      authStrategy: "internal_api_key",
      role: "system",
    };
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new ApiError(401, "ADMIN_AUTH_FAILED", "No pudimos validar la sesion administrativa.", {
      cause: error,
      expose: false,
    });
  }

  if (!user) {
    throw new ApiError(401, "UNAUTHORIZED", "No autorizado.");
  }

  const adminRepository = new AdminProfileRepository(createSupabaseAdminClient());
  const adminProfile = await adminRepository.findActiveById(user.id);

  if (!adminProfile) {
    throw new ApiError(403, "FORBIDDEN", "No tienes permisos administrativos.");
  }

  return {
    actorId: adminProfile.id,
    actorEmail: adminProfile.email,
    authStrategy: "supabase_auth",
    role: adminProfile.role,
  };
}

export type AuthenticatedUser = {
  id: string;
  email: string | null;
};

export async function requireUserAccess(): Promise<AuthenticatedUser> {
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

  if (!user) {
    throw new ApiError(401, "UNAUTHORIZED", "No autorizado.");
  }

  return {
    id: user.id,
    email: user.email ?? null,
  };
}

export function requireAdminRole(
  actor: AdminActor,
  allowedRoles: ReadonlyArray<AdminRole | "system">,
): AdminActor {
  if (!allowedRoles.includes(actor.role)) {
    throw new ApiError(403, "FORBIDDEN", "No tienes permisos para esta accion.");
  }

  return actor;
}

