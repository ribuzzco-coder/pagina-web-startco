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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(15,239,253,0.05),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(230,37,255,0.08),transparent_26%),radial-gradient(circle_at_60%_80%,rgba(77,109,255,0.07),transparent_28%)]" />
      <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="max-w-[28rem]">
          <PillBadge>Servicios RiBuzz</PillBadge>
          <h1 className="mt-4 max-w-3xl font-heading text-[2.6rem] leading-[0.98] text-[#F5F7FA] sm:text-[2.95rem] xl:text-[3.15rem]">
            Tres capas para optimizar tu sistema comercial
          </h1>
          <p className="mt-4 max-w-lg text-[0.96rem] leading-relaxed text-[#C7CBD6] sm:text-[0.98rem]">
            RiBuzz ofrece tres etapas secuenciales: diseño, implementación y acompañamiento. No se venden piezas sueltas; cada capa responde a un momento distinto del negocio
          </p>

          <div className="mt-8 flex flex-col items-start gap-4">
            <Button href={primaryCtaHref} size="lg">
              Solicita tu diagnostico gratuito
            </Button>
            <Button href={secondaryCtaHref} size="lg" variant="secondary">
              Ver metodologia
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,37,255,0.16),transparent_48%)] blur-3xl" />
          <RibuzzSystemScene className="relative max-w-[620px]" />
        </div>
      </Container>
    </section>
  );
}
