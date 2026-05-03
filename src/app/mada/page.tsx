import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { MadaGalleryExtension } from "@/components/brand/mada-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("mada");

export const metadata = createPageMetadata({
  title: "MaDa Complements",
  description: config?.tagline ?? "Correas, cinturones y accesorios en cuero.",
  path: "/mada",
});

export default function MadaPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <MadaGalleryExtension />
    </>
  );
}
