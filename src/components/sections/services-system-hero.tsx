import { RibuzzSystemScene } from "@/components/interactive/ribuzz-system-scene";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";

type ServicesSystemHeroProps = {
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

const systemLayers = [
  "Capa 01: Diseno",
  "Capa 02: Implementacion",
  "Capa 03: Acompanamiento",
] as const;

export function ServicesSystemHero({
  primaryCtaHref,
  secondaryCtaHref,
}: ServicesSystemHeroProps) {
  return (
    <section className="relative overflow-hidden pb-18 pt-14 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(15,239,253,0.05),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(230,37,255,0.08),transparent_26%),radial-gradient(circle_at_60%_80%,rgba(77,109,255,0.07),transparent_28%)]" />
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="max-w-[31rem]">
          <PillBadge>Servicios RiBuzz</PillBadge>
          <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.05] text-[#F5F7FA] sm:text-[2.55rem] xl:text-[2.95rem] [font-family:var(--font-saira)] font-semibold">
            Tres capas para convertir desorden comercial en una operación clara y sostenible
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C7CBD6] sm:text-[1.02rem]">
            RiBuzz no interviene tareas aisladas. Interviene el sistema: primero disena
            la logica del flujo, luego instala capacidad operativa real y despues sostiene
            la mejora con acompanamiento estrategico.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#98A0B3] sm:text-[0.98rem]">
            La escena muestra como un nucleo comercial disperso se ordena por capas,
            gana estructura, activa soluciones y entra en un ciclo de continuidad.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {systemLayers.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C7CBD6]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCtaHref} size="lg">
              Solicita tu diagnostico gratuito
            </Button>
            <Button href={secondaryCtaHref} size="lg" variant="secondary">
              Ver metodologia
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,37,255,0.16),transparent_48%)] blur-3xl" />
          <RibuzzSystemScene className="relative" />
        </div>
      </Container>
    </section>
  );
}
