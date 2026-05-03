import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/plumula/hero-necklace.jpg",
  "/images/brand-landings/plumula/glass-piece.jpg",
  "/images/brand-landings/plumula/hero-necklace.jpg",
  "/images/brand-landings/plumula/glass-piece.jpg",
  "/images/brand-landings/plumula/hero-necklace.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Vidrio hecho joya",
    title: "Una extension para que la landing se sienta mas objeto, mas autora y mas marca.",
    body: "La base del biolink mantiene el acceso rapido, pero debajo sumamos una segunda franja con fotografia, materia e identidad para que Plumula se perciba como una propuesta artesanal con caracter propio.",
  },
  {
    eyebrow: "Handcrafted in Colombia",
    title: "Una composicion delicada, artistica y muy enfocada en pieza unica.",
    body: "Las referencias piden una landing menos comercial y mas curada. Por eso esta extension mezcla modelo, objeto y simbolo de marca para construir una experiencia visual mas sensible.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/plumula/glass-piece.jpg",
    alt: "Pieza de vidrio de Plumula sobre fondo rosa",
    label: "Glass object",
  },
  {
    src: "/images/brand-landings/plumula/logo.jpg",
    alt: "Simbolo de marca de Plumula",
    label: "Identity",
  },
] as const;

export function PlumulaGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(251,246,241,0.24),rgba(243,233,228,0.48)_18%,rgba(236,221,220,0.78)_52%,rgba(248,242,239,0.92)_78%,#fbf6f2_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(174,93,120,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(255,166,214,0.18),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.34),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A24D6D]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-playfair)] text-4xl font-semibold tracking-[-0.04em] text-[#3E2731] sm:text-5xl">
            Plumula gana una segunda capa mas artistica, mas material y mas cercana a una joya de autor.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6D5560] sm:text-lg">
            Mantenemos arriba el acceso rapido del biolink y debajo sumamos bloques con fondo de imagen para que la
            landing se sienta mas rica: cuerpo, objeto, vidrio y una identidad mucho mas afinada.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(92,57,73,0.08)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,243,241,0.96))",
                borderColor: "rgba(162,77,109,0.14)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#A24D6D]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-2xl font-semibold tracking-[-0.04em] text-[#3E2731]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#6D5560]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(92,57,73,0.08)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,242,240,0.96))",
              borderColor: "rgba(162,77,109,0.14)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#A24D6D]">
              Objeto y cuerpo
            </p>
            <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-[#3E2731]">
              La joya entra como pieza escultorica y como gesto de estilo.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#6D5560]">
              Esta extension busca que Plumula se sienta menos como un link de venta y mas como una propuesta artistica:
              vidrio trabajado, forma organica, color sutil y una presencia visual mas evocadora.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#ecd7df] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/plumula/glass-piece.jpg"
                  alt="Pieza de vidrio de Plumula usada como apoyo visual principal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(62,39,49,0.42))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFE7F2]">
                    Handcrafted piece
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana objeto, detalle y una lectura mas curada.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#ecd7df] bg-white/88 shadow-[0_18px_36px_rgba(92,57,73,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className={item.label === "Identity" ? "object-contain bg-[#f7f3ef] p-8" : "object-cover transition duration-500 group-hover:scale-[1.03]"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(62,39,49,0.46))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFE7F2]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/88">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Card
          interactiveGlow={false}
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(92,57,73,0.08)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(249,241,239,0.96))",
            borderColor: "rgba(162,77,109,0.14)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#A24D6D]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-[#3E2731]">
                Una landing mas cercana a una joyeria de autor con objeto, materia y firma propia.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#6D5560]">
                Desde aqui podemos seguir sumando piezas, colecciones o mas imagenes de uso, pero ya con una base visual
                mucho mas alineada con el universo Plumula.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#A24D6D,#E59AC3)] hover:bg-[linear-gradient(135deg,#b05b7a,#eda8ce)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#A24D6D]/14 bg-white/70 text-[#3E2731] hover:border-[#A24D6D]/24 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
