import { LandingCarousel } from "@/components/sections/landing-carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HeroGalaxy } from "@/components/ui/hero-galaxy";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

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
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_18%,rgba(105,57,226,0.18),transparent_30%),radial-gradient(circle_at_72%_54%,rgba(255,77,109,0.14),transparent_32%),linear-gradient(180deg,rgba(11,11,16,0.12),rgba(11,11,16,0.88)_70%,#08041E_100%)]" />

      <Container className="relative z-10">
        <Card className="mx-auto max-w-6xl overflow-hidden rounded-[34px] border-[#6939E2]/24 bg-[linear-gradient(180deg,rgba(22,16,30,0.92),rgba(11,11,16,0.98))] p-7 text-center shadow-[0_0_0_1px_rgba(105,57,226,0.1),0_0_48px_rgba(105,57,226,0.16),0_28px_70px_rgba(0,0,0,0.34)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(105,57,226,0.14),transparent_26%),radial-gradient(circle_at_86%_20%,rgba(120,95,221,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,77,109,0.14),transparent_36%)]" />

          <div className="relative z-10">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#E4DFF7] sm:text-5xl">
              Landings que convierten visitas en conversaciones
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              Diseñamos experiencias digitales con una acción clara: contacto, reserva, compra,
              lead o validación. No son páginas bonitas aisladas; son activos de conversión.
            </p>

            <div className="mx-auto mt-7 grid max-w-4xl gap-3 text-center md:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#E4DFF7]">Rutas de decisi&oacute;n</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  No son solo botones: cada bloque debe llevar al usuario a una acci&oacute;n concreta.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#E4DFF7]">Alineadas a tu oferta</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  La estructura parte de lo que vendes, a qui&eacute;n se lo vendes y qu&eacute; objeci&oacute;n debe resolver.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#E4DFF7]">Conectadas al seguimiento</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  Pueden alimentar WhatsApp, agenda, formularios o el flujo comercial que ya tengas.
                </p>
              </div>
            </div>

            <LandingCarousel />

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f8798]">
              Ejemplos previos
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={SITE_CONFIG.whatsappUrl} external size="lg" variant="shimmer">
                Quiero una landing
              </Button>
              <Button href={SITE_CONFIG.diagnosisPath} size="lg" variant="secondary">
                Revisar primero el sistema
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
