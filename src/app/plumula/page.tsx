import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { PlumulaGalleryExtension } from "@/components/brand/plumula-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("plumula");

export const metadata = createPageMetadata({
  title: "Plumula",
  description: config?.tagline ?? "El arte del vidrio hecho joya.",
  path: "/plumula",
});

export default function PlumulaPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <PlumulaGalleryExtension />
    </>
  );
}
