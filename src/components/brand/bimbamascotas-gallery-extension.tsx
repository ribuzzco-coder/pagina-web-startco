import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/bimbamascotas/harness-brown.jpg",
  "/images/brand-landings/bimbamascotas/harness-blue.jpg",
  "/images/brand-landings/bimbamascotas/logo.jpg",
  "/images/brand-landings/bimbamascotas/harness-brown.jpg",
  "/images/brand-landings/bimbamascotas/harness-blue.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Arneses con estilo",
    title: "Una extension para que la landing se sienta mas producto, mas tierna y mas lista para vender.",
    body: "La base del biolink mantiene el acceso rapido. Debajo sumamos una segunda franja con producto real para que Bimba Mascotas ya no se sienta solo como identidad, sino como una marca con oferta visible.",
  },
  {
    eyebrow: "Color y coleccion",
    title: "Una composicion pensada para mostrar modelos, colores y una marca amigable.",
    body: "Los nuevos assets permiten construir una landing mucho mas clara: arneses manos libres, collares y una direccion visual que mezcla ternura, recordacion y producto en escena.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/bimbamascotas/harness-brown.jpg",
    alt: "Arnes y correa cafe de Bimba Mascotas con charms decorativos",
    label: "Brown set",
  },
  {
    src: "/images/brand-landings/bimbamascotas/harness-blue.jpg",
    alt: "Arnes y correa azul claro de Bimba Mascotas con detalles decorativos",
    label: "Blue set",
  },
] as const;

export function BimbaMascotasGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(63,82,238,0.2),rgba(72,83,224,0.42)_18%,rgba(76,76,222,0.72)_52%,rgba(80,70,214,0.88)_78%,#4d45cf_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,195,232,0.22),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.12),transparent_24%)]" />
      <div className="absolute inset-0 z-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:22px_22px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFD0EE]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-open-sans)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Bimba Mascotas gana una segunda capa mas visual, mas tierna y mucho mas apoyada en producto real.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#EFEAFF] sm:text-lg">
            Con estos nuevos assets la landing ya puede mostrar lo que vende la marca: arneses, colores, detalles y una
            identidad amable que se siente mucho mas cercana y mas lista para convertir.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(26,24,104,0.18)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))",
                borderColor: "rgba(255,255,255,0.16)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FFD0EE]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#EFEAFF]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(26,24,104,0.18)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.1))",
              borderColor: "rgba(255,255,255,0.16)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FFD0EE]">
              Producto y personalidad
            </p>
            <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-white">
              El producto ya puede entrar como protagonista sin perder el tono alegre de la marca.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#EFEAFF]">
              Esta extension busca que Bimba Mascotas se sienta menos como una promesa y mas como una tienda en marcha:
              colores reconocibles, modelos claros y una lectura inmediata del tipo de accesorio que ofrece.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-white/16 bg-white/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/bimbamascotas/harness-blue.jpg"
                  alt="Arnes azul de Bimba Mascotas usado como imagen principal de apoyo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_44%,rgba(37,32,145,0.42))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFE2F3]">
                    Product spotlight
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing ya se siente producto, no solo identidad.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-white/16 bg-white/10 shadow-[0_18px_36px_rgba(26,24,104,0.18)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_46%,rgba(37,32,145,0.46))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFE2F3]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(26,24,104,0.18)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))",
            borderColor: "rgba(255,255,255,0.16)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FFD0EE]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-white">
                Una base mucho mas lista para crecer en cuanto sumemos mas modelos y categorias.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#EFEAFF]">
                Desde aqui podemos sumar juguetes, snacks o mas referencias de arneses y collares, pero ya con una base
                visual mucho mas fuerte para Bimba Mascotas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#FFD0EE,#8AA0FF)] hover:bg-[linear-gradient(135deg,#ffd9f1,#9ab0ff)] text-[#2A227A]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-white/16 bg-white/12 text-white hover:border-white/24 hover:bg-white/18">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
