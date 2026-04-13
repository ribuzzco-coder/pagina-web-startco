import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function getHealthStatus() {
  const startedAt = Date.now();
  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from("diagnostic_requests").select("id", { head: true, count: "estimated" });

  return {
    ok: !error,
    checkedAt: new Date().toISOString(),
    database: error ? "unhealthy" : "healthy",
    latencyMs: Date.now() - startedAt,
  };
}
