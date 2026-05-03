import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { DiusattiGalleryExtension } from "@/components/brand/diusatti-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("diusatti");

export const metadata = createPageMetadata({
  title: "Diusatti",
  description: config?.tagline ?? "Sportwear.",
  path: "/diusatti",
});

export default function DiusattiPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <DiusattiGalleryExtension />
    </>
  );
}
