import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { InnataGalleryExtension } from "@/components/brand/innata-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("innata");

export const metadata = createPageMetadata({
  title: "INNATA",
  description: config?.tagline ?? "Joyeria con significado.",
  path: "/innata",
});

export default function InnataPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <InnataGalleryExtension />
    </>
  );
}
