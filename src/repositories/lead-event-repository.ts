import type { SupabaseClient } from "@supabase/supabase-js";

import { ApiError } from "@/lib/api/errors";
import type { Database, LeadEventInsert } from "@/types/database";

export class LeadEventRepository {
  constructor(private readonly db: SupabaseClient<Database>) {}

  async create(payload: LeadEventInsert) {
    const { data, error } = await this.db
      .from("lead_events")
      .insert(payload)
      .select("*")
      .single();

    if (error || !data) {
      throw new ApiError(500, "LEAD_EVENT_CREATE_FAILED", "No pudimos registrar el evento.", {
        cause: error,
        expose: false,
      });
    }

    return data;
  }
}

