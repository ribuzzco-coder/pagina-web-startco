import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/kynd/hero-striped-top.jpg",
  "/images/brand-landings/kynd/cream-look.jpg",
  "/images/brand-landings/kynd/hero-striped-top.jpg",
  "/images/brand-landings/kynd/cream-look.jpg",
  "/images/brand-landings/kynd/hero-striped-top.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Kind to your body",
    title: "Una extension para que la landing se sienta mas marca, mas coleccion y mas editorial.",
    body: "La base del biolink mantiene el acceso rapido a enlaces y contacto. Debajo sumamos una segunda franja con fotografia, textura y una lectura mas construida del universo KYND.",
  },
  {
    eyebrow: "Soft structure",
    title: "Una composicion limpia, femenina y pensada para prendas con forma y movimiento.",
    body: "Las referencias visuales piden una landing muy clara y elegante. Por eso esta extension trabaja con fondos de imagen, tonos mantequilla y una narrativa mas cercana a fashion brand que a una lista de links.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/kynd/cream-look.jpg",
    alt: "Look crema de KYND con recortes y estilismo minimalista",
    label: "New in",
  },
  {
    src: "/images/brand-landings/kynd/logo.jpg",
    alt: "Logo de KYND",
    label: "Identity",
  },
] as const;

export function KyndGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(250,245,227,0.22),rgba(245,237,211,0.48)_18%,rgba(238,229,201,0.78)_52%,rgba(247,242,225,0.92)_78%,#f8f2dd_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(155,134,61,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(222,204,142,0.18),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.36),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7A681F]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-open-sans)] text-4xl font-semibold tracking-[-0.04em] text-[#3B3316] sm:text-5xl">
            KYND gana una segunda capa mas limpia, mas femenina y mas cercana a una coleccion bien curada.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6D6446] sm:text-lg">
            Mantenemos arriba el acceso rapido del biolink y debajo sumamos bloques con fondo de imagen para que la
            landing se sienta mas rica: textura, silueta, producto y una identidad visual mas refinada.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(92,79,34,0.08)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(249,245,232,0.96))",
                borderColor: "rgba(122,104,31,0.14)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#7A681F]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-2xl font-semibold tracking-[-0.04em] text-[#3B3316]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#6D6446]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(92,79,34,0.08)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,244,231,0.96))",
              borderColor: "rgba(122,104,31,0.14)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#7A681F]">
              Shape and styling
            </p>
            <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#3B3316]">
              La imagen entra como forma, caida y actitud de coleccion.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#6D6446]">
              Esta extension busca que KYND se sienta menos como una pagina de enlaces y mas como una marca con
              sensibilidad visual: prendas cuidadas, cortes limpios y una experiencia que acompana tanto descubrimiento
              como compra.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#e6ddbf] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/kynd/cream-look.jpg"
                  alt="Look crema de KYND usado como apoyo visual principal de la landing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(59,51,22,0.42))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF7DB]">
                    Sculpted look
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana mas moda, mas sistema y mas coherencia de marca.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#e6ddbf] bg-white/88 shadow-[0_18px_36px_rgba(92,79,34,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className={item.label === "Identity" ? "object-contain bg-[#f8e7aa] p-8" : "object-cover transition duration-500 group-hover:scale-[1.03]"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(59,51,22,0.46))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF7DB]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(92,79,34,0.08)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,244,229,0.96))",
            borderColor: "rgba(122,104,31,0.14)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#7A681F]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#3B3316]">
                Una landing mas cercana a una marca de ropa con coleccion, styling y presencia propia.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#6D6446]">
                Desde aqui podemos seguir sumando categorias, showroom, new in o guias de estilo, pero ya con una base
                visual mucho mas alineada con el universo KYND.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#7A681F,#B09A43)] hover:bg-[linear-gradient(135deg,#8b7727,#bea74d)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#7A681F]/14 bg-white/70 text-[#3B3316] hover:border-[#7A681F]/24 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
