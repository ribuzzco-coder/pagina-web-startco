import { BimbaMascotasGalleryExtension } from "@/components/brand/bimbamascotas-gallery-extension";
import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("bimbamascotas");

export const metadata = createPageMetadata({
  title: "Bimba Mascotas",
  description: config?.tagline ?? "Accesorios y amor para mascotas.",
  path: "/bimbamascotas",
});

export default function BimbaMascotasPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <BimbaMascotasGalleryExtension />
    </>
  );
}
