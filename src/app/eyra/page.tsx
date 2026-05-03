import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { EyraGalleryExtension } from "@/components/brand/eyra-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("eyra");

export const metadata = createPageMetadata({
  title: "Eyra Organico",
  description: config?.tagline ?? "Cuidado capilar organico.",
  path: "/eyra",
});

export default function EyraPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <EyraGalleryExtension />
    </>
  );
}
