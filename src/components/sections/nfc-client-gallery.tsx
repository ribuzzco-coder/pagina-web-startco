import { NFCCard } from "@/components/ui/nfc-card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";

type ClientCardSample = {
  brand: string;
  role: string;
  accent: string;
  frontImage: string;
  backImage: string;
};

type NfcClientGalleryProps = {
  items: readonly ClientCardSample[];
};

export function NfcClientGallery({ items }: NfcClientGalleryProps) {
  return (
    <>
      <SectionDivider />
      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            eyebrow="Tarjetas diseñadas"
            title="Ejemplos de tarjetas creadas para clientes"
            description="Cada ejemplo usa el frente y reverso real de una tarjeta ya producida para mostrar mejor el nivel de personalización y acabado."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={item.brand}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#161925,#10121B)] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.3)]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-4 top-4 h-24 rounded-full bg-gradient-to-r ${item.accent} opacity-30 blur-2xl`}
                />
                <div className="relative">
                  <NFCCard
                    frontImage={item.frontImage}
                    backImage={item.backImage}
                    previewOnMount={index === 0}
                    className="max-w-none"
                    showFooter={false}
                  />
                </div>
                <div className="mt-4 border-t border-white/8 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#98A0B3]">
                    Cliente 0{index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-[#F5F7FA]">
                    {item.brand}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#C7CBD6]">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
