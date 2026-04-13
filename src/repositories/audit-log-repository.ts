import type { SupabaseClient } from "@supabase/supabase-js";

import { ApiError } from "@/lib/api/errors";
import type { AuditLogInsert, Database } from "@/types/database";

export class AuditLogRepository {
  constructor(private readonly db: SupabaseClient<Database>) {}

  async create(payload: AuditLogInsert) {
    const { data, error } = await this.db
      .from("audit_logs")
      .insert(payload)
      .select("id")
      .single();

    if (error || !data) {
      throw new ApiError(500, "AUDIT_LOG_CREATE_FAILED", "No pudimos registrar la auditoria.", {
        cause: error,
        expose: false,
      });
    }

    return data;
  }
}

