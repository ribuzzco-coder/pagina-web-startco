import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { NFCCard } from "@/components/ui/nfc-card";

type NfcHeroProps = {
  primaryHref: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function NfcHero({
  primaryHref,
  primaryLabel = "Cotizar mi NFC",
  secondaryHref = "#como-funciona",
  secondaryLabel = "Ver cómo funciona",
}: NfcHeroProps) {
  return (
    <section className="nfc-product-hero overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <Container className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center xl:gap-10">
        <div className="max-w-[41rem]">
          <p className="nfc-product-kicker text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0] [text-wrap:balance]">
            Tecnología NFC para negocios
          </p>
          <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.05] text-[#E4DFF7] [text-wrap:balance] sm:text-[2.55rem] xl:text-[2.95rem] [font-family:var(--font-saira)] font-semibold">
            Acerca. Abre. <span className="text-[#B8FFE9]">Convierte.</span>
          </h1>
          <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-[#D9D3EC] [text-wrap:pretty] sm:text-lg">
            Una tarjeta o llavero abre el siguiente paso de tu negocio: WhatsApp, catálogo, reserva, contacto, pago o cualquier enlace.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-[#D9D3EC]" aria-label="Así funciona NFC">
            <FlowPoint icon="tap" label="Acerca" />
            <FlowArrow />
            <FlowPoint icon="link" label="Se abre" />
            <FlowArrow />
            <FlowPoint icon="spark" label="Sucede algo" />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} size="lg" variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </div>

        <Card className="nfc-product-hero-card relative overflow-hidden rounded-[26px] px-4 py-5 sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute -right-20 top-0 h-52 w-52 rounded-full bg-[#6939E2]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-4 h-44 w-44 rounded-full bg-[#785FDD]/14 blur-3xl" />

          <div className="relative flex justify-center items-center">
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="pointer-events-none absolute inset-x-[14%] -top-4 h-20 rounded-full bg-[radial-gradient(circle,rgba(105,57,226,0.28),transparent_68%)] blur-2xl" />
              <NFCCard
                frontImage="/images/nfc-front.png"
                backImage="/images/nfc-back.png"
                previewOnMount
                className="max-w-[500px]"
              />
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

function FlowPoint({ icon, label }: { icon: "tap" | "link" | "spark"; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-2">
      <FlowIcon type={icon} />
      <span>{label}</span>
    </span>
  );
}

function FlowArrow() {
  return <span className="text-[#B8FFE9]" aria-hidden>→</span>;
}

function FlowIcon({ type }: { type: "tap" | "link" | "spark" }) {
  if (type === "link") return <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#B8FFE9]" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><path d="M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" /><path d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1.15-1.15" /></svg>;
  if (type === "spark") return <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#B8FFE9]" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></svg>;
  return <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#B8FFE9]" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M10 5h4M12 18.5h.01" /><path d="M4 9c-1.2 1.2-1.2 3.8 0 5M20 9c1.2 1.2 1.2 3.8 0 5" /></svg>;
}
