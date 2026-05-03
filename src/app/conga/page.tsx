import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { CongaGalleryExtension } from "@/components/brand/conga-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("conga");

export const metadata = createPageMetadata({
  title: "Conga conga",
  description: config?.tagline ?? "Shop online.",
  path: "/conga",
});

export default function CongaPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <CongaGalleryExtension />
    </>
  );
}
