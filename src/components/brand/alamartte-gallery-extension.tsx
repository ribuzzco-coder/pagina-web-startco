import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/alamartte/hero-lingerie.jpg",
  "/images/brand-landings/alamartte/studio-shadow.jpg",
  "/images/brand-landings/alamartte/hero-lingerie.jpg",
  "/images/brand-landings/alamartte/studio-shadow.jpg",
  "/images/brand-landings/alamartte/hero-lingerie.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Lingerie con presencia",
    title: "Una extension para que la landing se sienta mas sensual, mas premium y mas marca.",
    body: "La base del biolink mantiene el acceso directo a enlaces y contacto. Debajo sumamos una segunda franja con imagen, luz y textura para que Alamartte se perciba como una marca mas construida y mas deseable.",
  },
  {
    eyebrow: "Sets, bodys y corsets",
    title: "Una composicion pensada para colecciones femeninas con tono intimista.",
    body: "Las imagenes piden una landing menos generica y mucho mas visual. Por eso esta extension mezcla escena, detalle de producto y una atmosfera mas editorial sin perder conversion.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/alamartte/studio-shadow.jpg",
    alt: "Set de lenceria negra de Alamartte con luz dramatica de estudio",
    label: "Shadow set",
  },
  {
    src: "/images/brand-landings/alamartte/logo.jpg",
    alt: "Logo de Alamartte Collection",
    label: "Identity",
  },
] as const;

export function AlamartteGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(18,12,11,0.26),rgba(31,19,16,0.54)_18%,rgba(18,11,10,0.82)_52%,rgba(12,8,8,0.94)_78%,#0d0908_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(212,165,112,0.16),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(194,130,87,0.14),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.12),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A570]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-open-sans)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Alamartte gana una segunda capa mas sensual, mas limpia y mas cercana a una marca de coleccion.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#E8D9CF] sm:text-lg">
            Mantenemos arriba el acceso directo del biolink y debajo sumamos bloques con fondo de imagen para que la
            landing se sienta mas rica: piezas en escena, identidad mas presente y una atmosfera mas elegante.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              style={{
                background: "linear-gradient(180deg,rgba(30,19,16,0.86),rgba(17,11,10,0.94))",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#D4A570]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#E8D9CF]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            style={{
              background: "linear-gradient(180deg,rgba(30,19,16,0.88),rgba(17,11,10,0.96))",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#D4A570]">
              Escena e intimidad
            </p>
            <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-white">
              La imagen entra como atmosfera de coleccion y no solo como apoyo decorativo.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#E8D9CF]">
              Esta extension busca que Alamartte se sienta como una marca femenina y cuidada: luz dramatica, encuadres
              cercanos, producto protagonista y una lectura mas refinada para sets, bodys y corsets.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/8">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/alamartte/studio-shadow.jpg"
                  alt="Set de lenceria negra de Alamartte en escena de luz y sombra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(13,9,8,0.56))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#F7E5D3]">
                    Intimate drop
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana tono de marca y mas profundidad visual.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className={item.label === "Identity" ? "object-contain bg-white/94 p-8" : "object-cover transition duration-500 group-hover:scale-[1.03]"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(13,9,8,0.58))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#F7E5D3]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          style={{
            background: "linear-gradient(180deg,rgba(30,19,16,0.86),rgba(17,11,10,0.94))",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#D4A570]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-white">
                Una landing mas cercana a una marca de lingerie con coleccion y deseo visual.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#E8D9CF]">
                Desde aqui podemos seguir sumando categorias, drops o mas imagenes de producto, pero ya con una base
                mucho mas alineada con el tono de Alamartte.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#D4A570,#B87B56)] hover:bg-[linear-gradient(135deg,#ddb282,#c58963)]">
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
