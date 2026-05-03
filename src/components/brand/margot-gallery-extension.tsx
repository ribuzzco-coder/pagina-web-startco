import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/margot/hero-look.jpg",
  "/images/brand-landings/margot/heart-look.jpg",
  "/images/brand-landings/margot/hero-look.jpg",
  "/images/brand-landings/margot/heart-look.jpg",
  "/images/brand-landings/margot/hero-look.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Moda con gesto",
    title: "Una extension para que la landing se sienta mas editorial, mas viva y mas marca.",
    body: "La base del biolink sigue resolviendo accesos rapidos, pero debajo sumamos una segunda franja con imagen, actitud y ritmo visual para que Margot se sienta mas cercana a una marca de moda en movimiento.",
  },
  {
    eyebrow: "Estilo y contenido",
    title: "Una composicion que mezcla look, tipografia y una energia mas social.",
    body: "Estas fotos piden una landing con mas presencia visual. Por eso esta extension toma el lenguaje de fashion content y lo cruza con la estructura limpia que ya venimos usando en las otras marcas.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/margot/heart-look.jpg",
    alt: "Look de Margot con detalle de corazon rojo en la espalda",
    label: "Back detail",
  },
  {
    src: "/images/brand-landings/margot/hero-look.jpg",
    alt: "Editorial de moda de Margot con texto rojo y estilismo urbano",
    label: "Editorial",
  },
] as const;

export function MargotGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(29,13,27,0.26),rgba(36,14,28,0.52)_18%,rgba(24,10,20,0.8)_52%,rgba(19,9,17,0.92)_78%,#130912_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,71,106,0.22),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(213,86,255,0.18),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.12),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF476A]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-assistant)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Margot gana una segunda capa mas editorial, mas fashion y mas pensada para contenido.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#E6D9F0] sm:text-lg">
            Mantenemos el acceso directo del biolink arriba y debajo sumamos bloques con fondo de imagen para que la
            landing se sienta mas viva: look en escena, detalle de prenda y una direccion visual mas cercana a marca de
            moda que a una pagina de enlaces.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              style={{
                background: "linear-gradient(180deg,rgba(34,18,39,0.86),rgba(18,10,24,0.94))",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FF476A]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-assistant)] text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#E6D9F0]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            style={{
              background: "linear-gradient(180deg,rgba(34,18,39,0.88),rgba(18,10,24,0.96))",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FF476A]">
              Look y narrativa
            </p>
            <h3 className="mt-3 [font-family:var(--font-assistant)] text-3xl font-semibold tracking-[-0.04em] text-white">
              La imagen entra como styling, actitud y movimiento de marca.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#E6D9F0]">
              Esta extension busca que Margot se sienta mas cercana a un universo de moda activo: prendas con
              personalidad, contenido para redes y una landing que empieza a comunicar estilo antes incluso de tocar los
              enlaces.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/8">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/margot/hero-look.jpg"
                  alt="Editorial principal de Margot usada como apoyo visual de la landing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(19,9,18,0.56))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFD4DE]">
                    Social fashion
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana una lectura mas editorial y mas memorable.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(19,9,18,0.58))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFD4DE]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
          style={{
            background: "linear-gradient(180deg,rgba(34,18,39,0.86),rgba(18,10,24,0.94))",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FF476A]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-assistant)] text-3xl font-semibold tracking-[-0.04em] text-white">
                Una landing mas cercana a una marca de moda con contenido y actitud.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#E6D9F0]">
                Desde aqui podemos seguir sumando drops, categorias o mas imagenes de styling, pero ya con una base
                mucho mas viva para TikTok, Instagram y catalogo.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#FF476A,#D556FF)] hover:bg-[linear-gradient(135deg,#ff5b7b,#df69ff)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-white/14 bg-white/10 text-white hover:border-white/24 hover:bg-white/16">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
