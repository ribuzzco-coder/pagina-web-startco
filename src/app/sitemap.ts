import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/site-config";

const corporatePaths = [
  "/", "/about", "/services", "/diagnostico", "/contacto", "/regalos",
  "/proyectos/arkos-wear", "/portafolio", "/landings", "/nfc",
  "/tarjetas-nfc", "/politica-de-privacidad",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return corporatePaths.map((path) => ({ url: new URL(path, SITE_CONFIG.url).href }));
}
