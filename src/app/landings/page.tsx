import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HeroGalaxy } from "@/components/ui/hero-galaxy";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

type LandingGalleryItem = {
  title: string;
  description: string;
  status: string;
  href?: string;
  active?: boolean;
};

export const metadata = createPageMetadata({
  title: "Landings",
  description:
    "Acceso privado a landings RiBuzz para explorar ideas de p\u00e1ginas, biolinks y experiencias digitales a la medida.",
  path: "/landings",
});

const galleryItems: LandingGalleryItem[] = [
  {
    title: "Startco",
    description: "Biolink activo para presentar marca, accesos y rutas de contacto.",
    href: "/startco",
    status: "Ver ejemplo",
    active: true,
  },
  {
    title: "Oferta premium",
    description: "Una landing breve para vender una propuesta clara con presencia.",
    status: "Pr\u00f3ximamente",
  },
  {
    title: "Evento o lanzamiento",
    description: "Una experiencia compacta para convocar, explicar y convertir.",
    status: "Pr\u00f3ximamente",
  },
  {
    title: "Portafolio personal",
    description: "Una carta digital con estilo propio y llamados a la acci\u00f3n.",
    status: "Pr\u00f3ximamente",
  },
];

function KeyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[#ffb3f7] drop-shadow-[0_0_20px_rgba(230,37,255,0.5)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="14.5" r="3.5" />
      <path d="M10.2 12 20 2.2" />
      <path d="m15.4 6.8 1.8 1.8" />
      <path d="m13.2 9 1.8 1.8" />
    </svg>
  );
}

export default function LandingsPage() {
  return (
    <section className="relative -mt-[76px] min-h-[100dvh] overflow-hidden py-28 sm:py-32">
      <HeroGalaxy />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_18%,rgba(230,37,255,0.18),transparent_30%),radial-gradient(circle_at_72%_54%,rgba(255,77,109,0.14),transparent_32%),linear-gradient(180deg,rgba(11,11,16,0.12),rgba(11,11,16,0.88)_70%,#0B0B10_100%)]" />

      <Container className="relative z-10">
        <Card className="mx-auto max-w-5xl overflow-hidden rounded-[34px] border-[#E625FF]/24 bg-[linear-gradient(180deg,rgba(22,16,30,0.92),rgba(11,11,16,0.98))] p-7 text-center shadow-[0_0_0_1px_rgba(230,37,255,0.1),0_0_48px_rgba(230,37,255,0.16),0_28px_70px_rgba(0,0,0,0.34)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(230,37,255,0.14),transparent_26%),radial-gradient(circle_at_86%_20%,rgba(15,239,253,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,77,109,0.14),transparent_36%)]" />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E625FF]/32 bg-[#E625FF]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_30px_rgba(230,37,255,0.22)]">
              <KeyIcon />
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF9EF2]">
              Acceso reservado
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#F5F7FA] sm:text-5xl">
              Landings RiBuzz
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#A9B0C0] sm:text-base">
              Un biolink bien hecho no es solo una lista de botones: es una primera experiencia de marca. Con RiBuzz puedes tener una p&aacute;gina a tu medida, de todo tu gusto, personalizada, clara y cool, pensada para conectar mejor con quienes llegan desde redes, eventos o contactos directos.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={SITE_CONFIG.whatsappUrl} size="lg">
                Pide la tuya por WhatsApp
              </Button>
              <Button href="/startco" variant="secondary" size="lg">
                Ver Startco
              </Button>
            </div>

            <div className="landing-gallery mt-12">
              <div className="landing-gallery__track">
                {[...galleryItems, ...galleryItems].map((item, index) => {
                  const content = (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,37,255,0.16),transparent_38%)]" />
                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF9EF2]">
                            {item.active ? "Ejemplo activo" : "Espacio reservado"}
                          </p>
                          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                            {item.title}
                          </h2>
                          <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                            {item.description}
                          </p>
                        </div>
                        <span className="mt-7 inline-flex self-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-[#F5F7FA]">
                          {item.status}
                        </span>
                      </div>
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={`${item.title}-${index}`}
                        href={item.href}
                        className="landing-gallery__card landing-gallery__card--active"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <article key={`${item.title}-${index}`} className="landing-gallery__card">
                      {content}
                    </article>
                  );
                })}
              </div>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f8798]">
              Ejemplos previos
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}
