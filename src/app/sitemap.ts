import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/site-config";

/**
 * Cubre las páginas core del embudo de RiBuzz. No incluye las landings de marca
 * de clientes (Kynd, Neomech, hoteles, etc.) a propósito — si en algún momento
 * se quiere que también aparezcan indexadas bajo ribuzz.com, es una decisión de
 * negocio (¿todas? ¿solo el portafolio? ¿con qué prioridad?), no algo para
 * decidir por defecto acá.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/diagnostico", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.6, changeFrequency: "monthly" },
    { path: "/regalos", priority: 0.6, changeFrequency: "monthly" },
    { path: "/tarjetas-nfc", priority: 0.6, changeFrequency: "monthly" },
    { path: "/landings", priority: 0.5, changeFrequency: "monthly" },
    { path: "/politica-de-privacidad", priority: 0.3, changeFrequency: "yearly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
