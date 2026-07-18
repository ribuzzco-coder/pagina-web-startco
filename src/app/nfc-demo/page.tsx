import { NFCCard } from "@/components/ui/nfc-card";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Demo tarjeta NFC",
  description:
    "Vista demo de la tarjeta NFC RiBuzz con animacion 3D y frente/reverso reales.",
  path: "/nfc-demo",
});

export default function NfcDemoPage() {
  return (
    <section className="cv-auto py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-8">
        <div className="max-w-2xl text-center">
          <div className="flex justify-center">
            <PillBadge>Demo NFC</PillBadge>
          </div>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-[#E4DFF7] [text-wrap:balance] sm:text-5xl">
            Tarjeta NFC con flip 3D y arte real de RiBuzz
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-lg">
            Frente y reverso reales, animacion suave y una presentacion pensada para
            sentirse como un showcase de producto premium.
          </p>
        </div>

        <NFCCard
          frontImage="/images/nfc-front.png"
          backImage="/images/nfc-back.png"
        />
      </Container>
    </section>
  );
}
