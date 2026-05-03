import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/eyra/hero-product.jpg",
  "/images/brand-landings/eyra/hero-product.jpg",
  "/images/brand-landings/eyra/hero-product.jpg",
  "/images/brand-landings/eyra/hero-product.jpg",
  "/images/brand-landings/eyra/hero-product.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Cuidado visible",
    title: "Una segunda franja para que la landing se sienta mas marca y mas producto.",
    body: "La base del biolink sigue siendo util y directa. Debajo sumamos una extension con fotografia, beneficios y una lectura mas completa del universo Eyra sin convertirlo en un ecommerce pesado.",
  },
  {
    eyebrow: "Clean beauty",
    title: "Una estetica suave, tecnica y cercana al ritual diario.",
    body: "Eyra pide claridad, limpieza visual y una sensacion de tratamiento confiable. Por eso esta parte trabaja con fondos de imagen, tarjetas ligeras y una paleta que se siente botanica y contemporanea.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
  imageClassName?: string;
}> = [
  {
    src: "/images/brand-landings/eyra/hero-product.jpg",
    alt: "Tratamiento Leave In de Eyra sostenido frente al cabello",
    label: "Hero product",
  },
  {
    src: "/images/brand-landings/eyra.avif",
    alt: "Logo de Eyra Organico",
    label: "Identidad",
    imageClassName: "object-contain bg-white/92 p-8",
  },
] as const;

export function EyraGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(245,248,246,0.18),rgba(237,243,241,0.44)_18%,rgba(229,237,234,0.78)_52%,rgba(241,246,244,0.92)_78%,#f4f8f6_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(120,182,165,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(183,216,207,0.16),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.36),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#78B6A5]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-open-sans)] text-4xl font-semibold tracking-[-0.04em] text-[#37484A] sm:text-5xl">
            Eyra gana una segunda capa mas visual, mas limpia y mas cercana a un ritual de cuidado.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#62787A] sm:text-lg">
            Mantuvimos la entrada rapida del biolink y debajo sumamos bloques con fondo de imagen para que la landing se
            sienta mas desarrollada: producto protagonista, beneficios mejor presentados y una atmosfera que acompana el
            tono organico de la marca.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(55,72,74,0.08)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(243,248,246,0.96))",
                borderColor: "rgba(120,182,165,0.14)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#78B6A5]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-2xl font-semibold tracking-[-0.04em] text-[#37484A]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#62787A]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(55,72,74,0.08)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(242,247,245,0.96))",
              borderColor: "rgba(120,182,165,0.14)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#78B6A5]">
              Formula y experiencia
            </p>
            <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#37484A]">
              El producto entra como fondo de marca y tambien como promesa visible.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#62787A]">
              Esta extension busca que Eyra no se quede solo en enlaces. La imagen da contexto, eleva la percepcion de
              valor y hace que la pagina empiece a comunicar cuidado capilar, ingredientes y resultado desde el primer
              scroll.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#d7e8e2] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/eyra/hero-product.jpg"
                  alt="Producto capilar Eyra Leave In como imagen principal de la landing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(55,72,74,0.46))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#ECF8F3]">
                    Hair ritual
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana presencia visual sin perder claridad.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#d7e8e2] bg-white/88 shadow-[0_18px_36px_rgba(55,72,74,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className={item.imageClassName ?? "object-cover transition duration-500 group-hover:scale-[1.03]"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(55,72,74,0.52))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#ECF8F3]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(55,72,74,0.08)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(240,246,243,0.96))",
            borderColor: "rgba(120,182,165,0.14)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#78B6A5]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#37484A]">
                Una landing mas cercana a una marca de cuidado que a una pagina de enlaces suelta.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#62787A]">
                Desde aqui podemos seguir profundizando beneficios, rutinas o lineas de producto, pero ya con una base
                que se siente mucho mas visual y mas alineada con el universo Eyra.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#78B6A5,#9ACFC0)] hover:bg-[linear-gradient(135deg,#85c1b0,#a7d8ca)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#78B6A5]/18 bg-white/70 text-[#37484A] hover:border-[#78B6A5]/30 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
