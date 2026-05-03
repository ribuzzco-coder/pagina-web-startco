import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { MargotGalleryExtension } from "@/components/brand/margot-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("margot");

export const metadata = createPageMetadata({
  title: "Margot",
  description: config?.tagline ?? "Tus tejidos favoritos.",
  path: "/margot",
});

export default function MargotPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <MargotGalleryExtension />
    </>
  );
}
