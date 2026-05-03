import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { KyndGalleryExtension } from "@/components/brand/kynd-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("kynd");

export const metadata = createPageMetadata({
  title: "KYND",
  description: config?.tagline ?? "One of a kind pieces that feel kind to your body.",
  path: "/kynd",
});

export default function KyndPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <KyndGalleryExtension />
    </>
  );
}
