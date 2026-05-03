import { AlmaBorealGalleryExtension } from "@/components/brand/almaboreal-gallery-extension";
import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("almaboreal");

export const metadata = createPageMetadata({
  title: "Alma Boreal",
  description: config?.tagline ?? "Joyas con significado.",
  path: "/almaboreal",
});

export default function AlmaBorealPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <AlmaBorealGalleryExtension />
    </>
  );
}
