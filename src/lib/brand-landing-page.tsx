import { notFound } from "next/navigation";

import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { BrandInteractiveEditorialLanding } from "@/components/brand/brand-interactive-editorial-landing";
import { brandLandings, isInteractiveEditorialLanding } from "@/lib/brand-landings";
import { createPageMetadata } from "@/lib/metadata";

export function getBrandLandingConfig(slug: string) {
  return brandLandings[slug];
}

export function createBrandLandingMetadata(slug: string) {
  const config = getBrandLandingConfig(slug);

  if (!config) {
    return createPageMetadata({
      title: "Landing",
      description: "Landing de marca",
      path: `/${slug}`,
    });
  }

  return createPageMetadata({
    title: config.title,
    description: config.tagline,
    path: `/${slug}`,
  });
}

export function BrandLandingPage({ slug }: { slug: string }) {
  const config = getBrandLandingConfig(slug);

  if (!config) {
    notFound();
  }

  if (isInteractiveEditorialLanding(config)) {
    return <BrandInteractiveEditorialLanding config={config} />;
  }

  return <BrandBioLanding config={config} />;
}
