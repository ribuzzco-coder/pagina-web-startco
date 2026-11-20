/** Only fixed, non-identifying values are allowed in funnel events. */
export const funnelEvents = ["hero_cta", "case_open", "diagnostic_cta", "diagnostic_start", "diagnostic_step", "diagnostic_submit", "diagnostic_error", "diagnostic_complete"] as const;
export type FunnelEvent = (typeof funnelEvents)[number];
export type FunnelParameter = "hero" | "case" | "diagnostic" | "contacto" | "negocio" | "decision" | "llamada" | "regalos" | "newsletter" | "request" | "validation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** No field values, URLs, lead identifiers, or error text leave the form. */
export function trackFunnelEvent(event: FunnelEvent, parameter?: FunnelParameter) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, parameter ? { funnel_stage: parameter } : {});
  } catch {
    // Analytics must never interfere with the form.
  }
}
