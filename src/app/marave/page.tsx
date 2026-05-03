import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { MaraveGalleryExtension } from "@/components/brand/marave-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("marave");

export const metadata = createPageMetadata({
  title: "Marave Taller de Cuero",
  description: config?.tagline ?? "Productos en cuero hechos a mano.",
  path: "/marave",
});

export default function MaravePage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <MaraveGalleryExtension />
    </>
  );
}
