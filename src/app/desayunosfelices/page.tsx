import { BrandBioLanding } from "@/components/brand/brand-bio-landing";
import { DesayunosFelicesGalleryExtension } from "@/components/brand/desayunosfelices-gallery-extension";
import { getBrandLandingConfig } from "@/lib/brand-landing-page";
import { createPageMetadata } from "@/lib/metadata";

const config = getBrandLandingConfig("desayunosfelices");

export const metadata = createPageMetadata({
  title: "Desayunos Felices",
  description: config?.tagline ?? "Desayunos, brunch, flores y detalles especiales.",
  path: "/desayunosfelices",
});

export default function DesayunosFelicesPage() {
  if (!config) {
    return null;
  }

  return (
    <>
      <div id="top">
        <BrandBioLanding config={config} />
      </div>
      <DesayunosFelicesGalleryExtension />
    </>
  );
}
