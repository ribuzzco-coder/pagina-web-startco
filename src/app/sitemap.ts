import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/site-config";

import { corporatePaths } from "@/lib/company-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return corporatePaths.map((path) => ({ url: new URL(path, SITE_CONFIG.url).href }));
}
