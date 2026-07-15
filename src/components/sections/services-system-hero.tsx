import { RibuzzSystemScene } from "@/components/interactive/ribuzz-system-scene";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";

type ServicesSystemHeroProps = {
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

export function ServicesSystemHero({
  primaryCtaHref,
  secondaryCtaHref,
}: ServicesSystemHeroProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden py-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(120,95,221,0.05),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(105,57,226,0.08),transparent_26%),radial-gradient(circle_at_60%_80%,rgba(77,109,255,0.07),transparent_28%)]" />
      <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="max-w-[28rem]">
          <PillBadge>Cómo trabajamos</PillBadge>
          <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.05] text-[#E4DFF7] sm:text-[2.55rem] xl:text-[2.95rem] [font-family:var(--font-saira)] font-semibold">
            Así operamos, sin letra pequeña
          </h1>
          <p className="mt-4 max-w-lg text-[0.96rem] leading-relaxed text-[#CEC6E0] sm:text-[0.98rem]">
            La oferta de RiBuzz se adapta a la etapa de tu empresa, no al revés. Cada paquete tiene alcance claro y se cobra con retainer mensual — sin piezas sueltas ni cotizaciones improvisadas.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4">
            <Button href={primaryCtaHref} size="lg" variant="shimmer">
              Agenda tu llamada de introducción
            </Button>
            <Button href={secondaryCtaHref} size="lg" variant="secondary">
              Ver cómo lo hacemos
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(105,57,226,0.16),transparent_48%)] blur-3xl" />
          <RibuzzSystemScene className="relative max-w-[620px]" />
        </div>
      </Container>
    </section>
  );
}
