import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ApiError } from "@/lib/api/errors";
import { AdminProfileRepository } from "@/repositories/admin-profile-repository";

export type AdminActor = {
  actorId: string;
  actorEmail: string;
  authStrategy: "supabase_auth";
  role: "owner" | "admin" | "reviewer";
};

export async function requireAdminAccess(): Promise<AdminActor> {
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

  const adminRepository = new AdminProfileRepository(supabase);
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

