import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/diusatti/hero-sneakers.jpg",
  "/images/brand-landings/diusatti/sportwear-group.jpg",
  "/images/brand-landings/diusatti/hero-sneakers.jpg",
  "/images/brand-landings/diusatti/sportwear-group.jpg",
  "/images/brand-landings/diusatti/hero-sneakers.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Sportwear en escena",
    title: "Una extension para que la landing se sienta mas coleccion, mas performance y mas marca.",
    body: "La base del biolink mantiene el acceso rapido, pero debajo sumamos una segunda franja con imagen, set deportivo y una lectura mas potente del universo Diusatti.",
  },
  {
    eyebrow: "Fuerza y estilo",
    title: "Una composicion que mezcla producto, actitud y una energia mas activa.",
    body: "Estas fotos piden una landing menos neutra y mas visual. Por eso esta extension trabaja con cancha, movimiento, color y una presentacion mas cercana a una marca de sportwear actual.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/diusatti/sportwear-group.jpg",
    alt: "Coleccion sportwear de Diusatti presentada por tres modelos en cancha",
    label: "Collection drop",
  },
  {
    src: "/images/brand-landings/diusatti/hero-sneakers.jpg",
    alt: "Sneakers y medias deportivas de Diusatti sobre cancha azul",
    label: "Footwear mood",
  },
] as const;

export function DiusattiGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(244,247,250,0.14),rgba(224,234,246,0.34)_18%,rgba(207,223,242,0.66)_52%,rgba(240,244,248,0.88)_78%,#f4f7fb_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(71,117,255,0.16),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(230,155,131,0.16),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.3),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E69B83]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-open-sans)] text-4xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-5xl">
            Diusatti gana una segunda capa mas deportiva, mas comercial y mas cercana a una coleccion activa.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#595555] sm:text-lg">
            La landing mantiene arriba el acceso directo del biolink y debajo suma bloques con fondo de imagen para que
            la marca se sienta mas completa: producto en contexto, sets en escena y una lectura visual mas fuerte.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(17,17,17,0.08)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,245,242,0.96))",
                borderColor: "rgba(51,51,51,0.1)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#E69B83]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-2xl font-semibold tracking-[-0.04em] text-[#171717]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#595555]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(17,17,17,0.08)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,245,242,0.96))",
              borderColor: "rgba(51,51,51,0.1)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#E69B83]">
              Actitud y producto
            </p>
            <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#171717]">
              El deporte entra como estilo de vida, no solo como prenda.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#595555]">
              Esta extension busca que Diusatti se vea menos como una pagina de enlaces y mas como una marca activa:
              colecciones en movimiento, calzado, sets y una puesta en escena que conecta mejor con compra y contenido.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#e8dfd9] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/diusatti/sportwear-group.jpg"
                  alt="Coleccion deportiva de Diusatti presentada en cancha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(23,23,23,0.42))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFEADF]">
                    Active collection
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana presencia de producto y direccion visual.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#e8dfd9] bg-white/88 shadow-[0_18px_36px_rgba(17,17,17,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(23,23,23,0.46))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFEADF]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(17,17,17,0.08)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,244,241,0.96))",
            borderColor: "rgba(51,51,51,0.1)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#E69B83]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#171717]">
                Una landing mas cercana a una marca de sportwear con coleccion y movimiento.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#595555]">
                Desde aqui podemos seguir sumando drops, categorias o mas imagenes de campaña, pero ya con una base
                mucho mas fuerte para compra, redes y lanzamientos.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#171717,#E69B83)] hover:bg-[linear-gradient(135deg,#262626,#eeaa95)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#171717]/10 bg-white/70 text-[#171717] hover:border-[#171717]/18 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
