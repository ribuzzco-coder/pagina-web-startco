import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { SuspirosGalleryExtension } from "@/components/brand/suspiros-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("suspiros");

export const metadata = createPageMetadata({
  title: "Suspiros",
  description: config?.tagline ?? "Pijamas con estilo.",
  path: "/suspiros",
});

export default function SuspirosPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <SuspirosGalleryExtension />
    </>
  );
}
