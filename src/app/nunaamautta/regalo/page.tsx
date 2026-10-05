import { createPageMetadata } from "@/lib/metadata";

import { NunaGiftExperience } from "../nuna-gift-experience";

const nunaLinks = {
  instagram: "https://www.instagram.com/nunaamautta/",
} as const;

const logoSrc = "/images/nunaamautta/logo.png";

export const metadata = createPageMetadata({
  title: "Reclama tu regalo | Nuna Amautta",
  description:
    "Formulario y ruleta de premios de Nuna Amautta con descuentos para reclamar en Instagram.",
  path: "/nunaamautta/regalo",
});
metadata.openGraph = { ...metadata.openGraph, images: [{ url: "/images/nunaamautta/nov-2025/nuna-nov-2025-22.jpg", width: 1280, height: 1920, alt: "Regalo Nuna Amautta" }] };
metadata.twitter = { ...metadata.twitter, images: ["/images/nunaamautta/nov-2025/nuna-nov-2025-22.jpg"] };

export default function NunaAmauttaGiftPage() {
  return (
    <div className="-mt-[76px] min-h-[100dvh]">
      <NunaGiftExperience instagramUrl={nunaLinks.instagram} logoSrc={logoSrc} />
    </div>
  );
}
