import type { SupabaseClient } from "@supabase/supabase-js";

import { ApiError } from "@/lib/api/errors";
import type { AdminProfileRow, Database } from "@/types/database";

export class AdminProfileRepository {
  constructor(private readonly db: SupabaseClient<Database>) {}

  async findActiveById(id: string) {
    const { data, error } = await this.db
      .from("admin_profiles")
      .select("*")
      .eq("id", id)
      .eq("is_active", true)
      .maybeSingle();

    if (error) {
      throw new ApiError(500, "ADMIN_PROFILE_FETCH_FAILED", "No pudimos validar el acceso administrativo.", {
        cause: error,
        expose: false,
      });
    }

    return data as AdminProfileRow | null;
  }
}

