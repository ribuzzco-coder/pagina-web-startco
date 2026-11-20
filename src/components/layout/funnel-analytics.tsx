"use client";

import { useEffect } from "react";
import { trackFunnelEvent, type FunnelEvent, type FunnelParameter } from "@/lib/funnel-analytics";

const events: Record<string, { event: FunnelEvent; parameter: FunnelParameter }> = {
  hero_cta: { event: "hero_cta", parameter: "hero" },
  case_open: { event: "case_open", parameter: "case" },
  diagnostic_cta: { event: "diagnostic_cta", parameter: "diagnostic" },
  booking_click: { event: "booking_click", parameter: "llamada" },
  resource_open: { event: "resource_open", parameter: "regalos" },
  newsletter_click: { event: "newsletter_click", parameter: "newsletter" },
};

export function FunnelAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-funnel-event]");
      const value = target?.dataset.funnelEvent;
      const match = value && Object.hasOwn(events, value) ? events[value] : undefined;
      if (value === "whatsapp_click") trackFunnelEvent("whatsapp_click");
      else if (match) trackFunnelEvent(match.event, match.parameter);
      else if (event.target.closest('main[data-company-page] a[href^="https://wa.me/"], footer a[href^="https://wa.me/"]')) {
        trackFunnelEvent("whatsapp_click");
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
