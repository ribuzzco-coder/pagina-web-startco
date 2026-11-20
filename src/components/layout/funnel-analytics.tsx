"use client";

import { useEffect } from "react";
import { trackFunnelEvent, type FunnelEvent, type FunnelParameter } from "@/lib/funnel-analytics";

const events: Record<string, { event: FunnelEvent; parameter: FunnelParameter }> = {
  hero_cta: { event: "hero_cta", parameter: "hero" },
  case_open: { event: "case_open", parameter: "case" },
  diagnostic_cta: { event: "diagnostic_cta", parameter: "diagnostic" },
};

export function FunnelAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-funnel-event]");
      const value = target?.dataset.funnelEvent;
      const match = value && Object.hasOwn(events, value) ? events[value] : undefined;
      if (match) trackFunnelEvent(match.event, match.parameter);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
