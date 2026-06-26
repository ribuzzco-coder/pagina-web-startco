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

export default function NunaAmauttaGiftPage() {
  return (
    <main className="fiammata-page nunaamautta-page -mt-[76px] min-h-[100dvh]">
      <NunaGiftExperience instagramUrl={nunaLinks.instagram} logoSrc={logoSrc} />
    </main>
  );
}
