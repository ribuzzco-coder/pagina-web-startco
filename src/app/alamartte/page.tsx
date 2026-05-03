import { AlamartteGalleryExtension } from "@/components/brand/alamartte-gallery-extension";
import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("alamartte");

export const metadata = createPageMetadata({
  title: "Alamartte Collection",
  description: config?.tagline ?? "Ropa interior femenina.",
  path: "/alamartte",
});

export default function AlamarttePage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <AlamartteGalleryExtension />
    </>
  );
}
