"use client";

import { useEffect } from "react";

export function NunaClickTracking() {
  useEffect(() => {
    function track(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>("[data-nuna-links] a");
      if (!anchor) return;
      const analytics = window as Window & { gtag?: (command: string, event: string, params: Record<string, string>) => void };
      const href = anchor.href;
      const category = href.includes("/products/") ? "product"
        : href.includes("instagram.com") ? "instagram"
        : href.includes("wa.me") ? "whatsapp"
        : href.includes("/regalo") ? "gift"
        : href.includes("/collections/") ? "shop" : "other";
      analytics.gtag?.("event", "nuna_link_click", {
        link_category: category,
        link_url: href,
        link_label: anchor.getAttribute("aria-label") ?? anchor.textContent?.trim() ?? "",
      });
    }
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, []);
  return null;
}
