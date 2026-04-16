import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { NFCCard } from "@/components/ui/nfc-card";

type NfcHeroProps = {
  primaryHref: string;
};

export function NfcHero({ primaryHref }: NfcHeroProps) {
  return (
    <section className="overflow-hidden pb-12 pt-12 sm:pb-14 sm:pt-14">
      <Container className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center xl:gap-10">
        <div className="max-w-[41rem]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
            Tarjetas NFC
          </p>
          <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.05] text-[#F5F7FA] sm:text-[2.55rem] xl:text-[2.95rem] [font-family:var(--font-saira)] font-semibold">
            Convierte cada acción en un contacto real con tarjetas NFC
          </h1>
          <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-[#98A0B3] sm:text-base">
            Comparte tu información, redes o negocio con un solo toque.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#B8EAF0]">
            Tarjeta desde $79.900 COP
          </p>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#98A0B3]">
            Si también necesitas el diseño de la tarjeta, el paquete tarjeta + diseño
            cuesta $140.000 COP.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} size="lg" external>
              Solicitar tarjeta
            </Button>
            <Button href="#como-funciona" size="lg" variant="secondary">
              Ver cómo funciona
            </Button>
          </div>
        </div>

        <Card className="relative overflow-hidden rounded-[32px] px-4 py-5 sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute -right-20 top-0 h-52 w-52 rounded-full bg-[#E625FF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-4 h-44 w-44 rounded-full bg-[#0FEFFD]/14 blur-3xl" />

          <div className="relative flex justify-center items-center">
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="pointer-events-none absolute inset-x-[14%] -top-4 h-20 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.28),transparent_68%)] blur-2xl" />
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
