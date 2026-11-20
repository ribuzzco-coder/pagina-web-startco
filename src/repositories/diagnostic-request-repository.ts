import type { SupabaseClient } from "@supabase/supabase-js";

import { ApiError } from "@/lib/api/errors";
import type {
  Database,
  DiagnosticRequestInsert,
  DiagnosticRequestRow,
  DiagnosticRequestUpdate,
} from "@/types/database";

type ListDiagnosticRequestsInput = {
  status?: DiagnosticRequestRow["status"];
  limit: number;
  cursor?: string;
};

export class DiagnosticRequestRepository {
  constructor(private readonly db: SupabaseClient<Database>) {}

  async receive(payload: DiagnosticRequestInsert, revision: string, lookbackHours: number, sync: boolean, legacyMatch: string | null) {
    const { data, error } = await this.db
      .rpc("receive_diagnostic", { p_request: payload, p_revision: revision, p_lookback_hours: lookbackHours, p_sync: sync, p_legacy_match: legacyMatch })
      .single();

    if (error || !data) {
      throw new ApiError(500, "DIAGNOSTIC_REQUEST_CREATE_FAILED", "No pudimos guardar la solicitud.", {
        cause: error,
        expose: false,
      });
    }

    return data;
  }

  async findById(id: string) {
    const { data, error } = await this.db
      .from("diagnostic_requests")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      throw new ApiError(500, "DIAGNOSTIC_REQUEST_FETCH_FAILED", "No pudimos consultar la solicitud.", {
        cause: error,
        expose: false,
      });
    }

    return data;
  }

  async findRecentLegacySubmission(submissionHash: string, lookbackHours: number) {
    const cutoffDate = new Date(Date.now() - lookbackHours * 60 * 60 * 1000).toISOString();

    const { data, error } = await this.db
      .from("diagnostic_requests")
      .select("*")
      .eq("submission_hash", submissionHash)
      .is("submission_revision", null)
      .gte("created_at", cutoffDate)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      throw new ApiError(500, "DIAGNOSTIC_REQUEST_DUPLICATE_CHECK_FAILED", "No pudimos verificar duplicados.", {
        cause: error,
        expose: false,
      });
    }

    return data;
  }

  async claimPendingSheetRows() {
    const { data, error } = await this.db.rpc("claim_diagnostic_sheet_batch");
    if (error) throw error;
    return data;
  }

  async markSheetDelivered(id: string) {
    const { error } = await this.db.from("diagnostic_requests").update({ sheets_next_attempt_at: null }).eq("id", id);
    if (error) throw error;
  }

  async list({ status, limit, cursor }: ListDiagnosticRequestsInput) {
    let query = this.db
      .from("diagnostic_requests")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .limit(limit + 1);

    if (status) {
      query = query.eq("status", status);
    }

    if (cursor) {
      query = query.lt("created_at", cursor);
    }

    const { data, error, count } = await query;

    if (error || !data) {
      throw new ApiError(500, "DIAGNOSTIC_REQUEST_LIST_FAILED", "No pudimos listar las solicitudes.", {
        cause: error,
        expose: false,
      });
    }

    const hasMore = data.length > limit;
    const items = hasMore ? data.slice(0, limit) : data;
    const nextCursor = hasMore ? items.at(-1)?.created_at ?? null : null;

    return {
      items,
      count: count ?? items.length,
      nextCursor,
    };
  }

  async updateById(id: string, payload: DiagnosticRequestUpdate) {
    const { data, error } = await this.db
      .from("diagnostic_requests")
      .update(payload)
      .eq("id", id)
      .select("*")
      .single();

    if (error || !data) {
      throw new ApiError(500, "DIAGNOSTIC_REQUEST_UPDATE_FAILED", "No pudimos actualizar la solicitud.", {
        cause: error,
        expose: false,
      });
    }

    return data;
  }
}

