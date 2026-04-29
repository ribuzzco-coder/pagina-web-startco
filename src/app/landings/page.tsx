import { LandingCarousel } from "@/components/sections/landing-carousel";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HeroGalaxy } from "@/components/ui/hero-galaxy";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Landings",
  description:
    "Acceso privado a landings RiBuzz para explorar ideas de p\u00e1ginas, biolinks y experiencias digitales a la medida.",
  path: "/landings",
});

export default function LandingsPage() {
  return (
    <section className="relative -mt-[76px] min-h-[100dvh] overflow-hidden py-28 sm:py-32">
      <HeroGalaxy />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_18%,rgba(230,37,255,0.18),transparent_30%),radial-gradient(circle_at_72%_54%,rgba(255,77,109,0.14),transparent_32%),linear-gradient(180deg,rgba(11,11,16,0.12),rgba(11,11,16,0.88)_70%,#0B0B10_100%)]" />

      <Container className="relative z-10">
        <Card className="mx-auto max-w-6xl overflow-hidden rounded-[34px] border-[#E625FF]/24 bg-[linear-gradient(180deg,rgba(22,16,30,0.92),rgba(11,11,16,0.98))] p-7 text-center shadow-[0_0_0_1px_rgba(230,37,255,0.1),0_0_48px_rgba(230,37,255,0.16),0_28px_70px_rgba(0,0,0,0.34)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(230,37,255,0.14),transparent_26%),radial-gradient(circle_at_86%_20%,rgba(15,239,253,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,77,109,0.14),transparent_36%)]" />

          <div className="relative z-10">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#F5F7FA] sm:text-5xl">
              Landings RiBuzz
            </h1>

            <div className="mx-auto mt-7 grid max-w-4xl gap-3 text-center md:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#F5F7FA]">Biolinks con intenci&oacute;n</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  No son solo botones: son una primera experiencia de marca para quien llega desde redes, eventos o contactos.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#F5F7FA]">A tu medida</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  Dise&ntilde;amos una p&aacute;gina de todo tu gusto, personalizada, clara y alineada a lo que quieres proyectar.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#F5F7FA]">Cool y funcional</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  Una experiencia visual con orden, presencia y rutas directas para contacto, contenido o venta.
                </p>
              </div>
            </div>

            <LandingCarousel />

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f8798]">
              Ejemplos previos
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}
