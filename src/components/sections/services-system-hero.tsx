import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { ServicesHillsBackground } from "@/components/ui/services-hills-background";

type ServicesSystemHeroProps = {
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

export function ServicesSystemHero({
  primaryCtaHref,
  secondaryCtaHref,
}: ServicesSystemHeroProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden py-12 sm:py-16">
      <ServicesHeroAtmosphere />
      <Container className="relative z-10 flex justify-center">
        <div className="mx-auto max-w-[48rem] text-center">
          <PillBadge>C&oacute;mo trabajamos</PillBadge>
          <h1 className="mx-auto mt-5 max-w-3xl text-[2rem] leading-[1.05] text-[#E4DFF7] [text-wrap:balance] sm:text-[2.55rem] xl:text-[2.95rem] [font-family:var(--font-saira)] font-semibold">
            Deja de adivinar qu&eacute; necesita tu negocio para{" "}
            <span className="text-[#8b6ff0]">crecer</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[38rem] text-[0.96rem] leading-relaxed text-[#CEC6E0] [text-wrap:pretty] sm:text-[0.98rem]">
            Diagnosticamos tu momento actual y ordenamos la ruta correcta: estrategia, activos, tecnolog&iacute;a, pauta o seguimiento seg&uacute;n lo que realmente haga falta.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={primaryCtaHref} size="lg" variant="shimmer">
              Completa la aplicaci&oacute;n
            </Button>
            <Button href={secondaryCtaHref} size="lg" variant="secondary">
              Ver paquetes por etapa
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesHeroAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(120,95,221,0.16),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(75,132,255,0.12),transparent_30%),radial-gradient(circle_at_62%_86%,rgba(105,57,226,0.2),transparent_40%),linear-gradient(135deg,#070314_0%,#12043a_48%,#05020e_100%)]" />
      <ServicesHillsBackground className="opacity-100 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,transparent_0%,rgba(5,2,14,0.12)_48%,rgba(5,2,14,0.56)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,transparent_0%,rgba(7,3,20,0.28)_70%,rgba(7,3,20,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(118,222,255,0.055)_42%,transparent_58%)] opacity-60" />
      <div className="services-hero-stars services-hero-stars--near absolute inset-0 opacity-45" />
      <div className="services-hero-stars services-hero-stars--far absolute inset-0 opacity-28" />
    </div>
  );
}
