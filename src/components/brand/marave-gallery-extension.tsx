import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/marave/hero-hat.jpg",
  "/images/brand-landings/marave/boots-product.jpg",
  "/images/brand-landings/marave/hero-hat.jpg",
  "/images/brand-landings/marave/boots-product.jpg",
  "/images/brand-landings/marave/hero-hat.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Cuero con identidad",
    title: "Una extension para que la landing se sienta mas marca, mas producto y mas oficio.",
    body: "La base del biolink mantiene los accesos rapidos, pero debajo sumamos una segunda franja con imagen, textura y presencia para que Marave se perciba como una marca de cuero con universo propio.",
  },
  {
    eyebrow: "Western premium",
    title: "Una composicion que mezcla bota, estilo y un tono mas editorial.",
    body: "Las referencias visuales piden una landing menos plana y mucho mas construida. Por eso esta extension cruza escena de marca, producto en detalle y una atmosfera sobria y elegante.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/marave/boots-product.jpg",
    alt: "Botas negras de cuero de Marave sobre fondo de madera",
    label: "Leather craft",
  },
  {
    src: "/images/brand-landings/marave/logo.jpg",
    alt: "Logo de Marave Taller de Cuero",
    label: "Identity",
  },
] as const;

export function MaraveGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.28),rgba(28,22,18,0.56)_18%,rgba(18,14,11,0.84)_52%,rgba(10,8,7,0.94)_78%,#0a0807_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(168,119,74,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(210,181,137,0.16),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.12),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C59563]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-playfair)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Marave gana una segunda capa mas sobria, mas western y mas cercana a un taller con firma propia.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#E8DCCF] sm:text-lg">
            Mantenemos arriba el acceso rapido del biolink y debajo sumamos bloques con fondo de imagen para que la
            landing se sienta mas rica: estilo en escena, bota protagonista y una identidad de cuero mas contundente.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
              style={{
                background: "linear-gradient(180deg,rgba(27,21,18,0.86),rgba(15,11,9,0.94))",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#C59563]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#E8DCCF]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
            style={{
              background: "linear-gradient(180deg,rgba(27,21,18,0.88),rgba(15,11,9,0.96))",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#C59563]">
              Estilo y oficio
            </p>
            <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-white">
              La imagen entra como caracter de marca y el producto como prueba de calidad.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#E8DCCF]">
              Esta extension busca que Marave se sienta como una marca de cuero con autenticidad: botas, silueta,
              taller, detalle y una puesta en escena mas fuerte para conectar con compra y comunidad.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/8">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/marave/boots-product.jpg"
                  alt="Botas de cuero de Marave como producto protagonista de la landing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(10,8,7,0.56))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#F4E4D1]">
                    Crafted leather
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana mas producto, mas contexto y mas firma visual.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className={item.label === "Identity" ? "object-contain bg-[#070707] p-8" : "object-cover transition duration-500 group-hover:scale-[1.03]"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(10,8,7,0.58))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#F4E4D1]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
          style={{
            background: "linear-gradient(180deg,rgba(27,21,18,0.86),rgba(15,11,9,0.94))",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#C59563]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-white">
                Una landing mas cercana a una marca de cuero con producto, comunidad y estilo.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#E8DCCF]">
                Desde aqui podemos seguir sumando categorias, sale, eventos o mas referencias de producto, pero ya con
                una base mucho mas alineada con el universo visual de Marave.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#C59563,#8C5A34)] hover:bg-[linear-gradient(135deg,#d2a26f,#9a6842)]">
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
