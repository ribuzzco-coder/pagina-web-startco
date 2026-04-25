/**
 * Lightweight connectivity check against Supabase (PostgREST + service role).
 *
 * Usage:
 *   `npm run test:supabase` — loads `.env.local` then `.env` if present.
 *   `npm run test:supabase:docker` — same, then forces `.env.supabase.docker`
 *   so the target is the local stack from `supabase start` (Docker).
 */

import { createClient } from "@supabase/supabase-js";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dockerMode = process.argv.includes("docker");

/**
 * @param {string} relativePath
 * @param {{ force?: boolean }} [opts]
 */
function loadEnvFile(relativePath, opts = {}) {
  const { force = false } = opts;
  const absolutePath = join(process.cwd(), relativePath);
  if (!existsSync(absolutePath)) {
    return;
  }
  const text = readFileSync(absolutePath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const eq = trimmed.indexOf("=");
    if (eq === -1) {
      continue;
    }
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!key) {
      continue;
    }
    if (force || process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

if (dockerMode) {
  loadEnvFile(".env.supabase.docker", { force: true });
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    dockerMode
      ? "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY after loading .env.supabase.docker.\n" +
          "Ensure `supabase start` is running, then run: npm run test:supabase:docker"
      : "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n" +
          "Copy .env.example to .env.local and set your Supabase values, then run: npm run test:supabase",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const started = Date.now();
const { error, count } = await supabase.from("diagnostic_requests").select("id", { head: true, count: "estimated" });

if (error) {
  console.error("Supabase smoke test failed:", error.message);
  if (dockerMode) {
    console.error("Hint: run `supabase start` and apply migrations (`supabase db reset` or `supabase migration up --local`).");
  }
  process.exit(1);
}

console.log("Supabase smoke test OK", {
  mode: dockerMode ? "docker" : "env",
  url,
  latencyMs: Date.now() - started,
  diagnosticRequestsEstimatedCount: count ?? null,
});
