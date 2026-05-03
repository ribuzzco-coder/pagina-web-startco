import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/desayunosfelices/hero-breakfast.jpg",
  "/images/brand-landings/desayunosfelices/gift-bag.jpg",
  "/images/brand-landings/desayunosfelices/hero-breakfast.jpg",
  "/images/brand-landings/desayunosfelices/gift-bag.jpg",
  "/images/brand-landings/desayunosfelices/hero-breakfast.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Detalles con cariño",
    title: "Una extension para que la landing se sienta mas regalo, mas ocasion y mas marca.",
    body: "La base del biolink sigue resolviendo el acceso rapido, pero debajo sumamos una segunda franja con imagen, empaque y atmosfera para que Desayunos Felices se vea mas completa y memorable.",
  },
  {
    eyebrow: "Flores y brunch",
    title: "Una composicion suave y comercial que acompana mejor el universo del detalle.",
    body: "La marca no pide una landing fria ni tecnica. Pide calidez, celebracion y una sensacion de regalo bien presentado, por eso esta extension mezcla bandejas, flores y empaque en una sola lectura visual.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/desayunosfelices/gift-bag.jpg",
    alt: "Empaque de regalo de Desayunos Felices con flores y desayuno",
    label: "Empaque",
  },
  {
    src: "/images/brand-landings/desayunosfelices/hero-breakfast.jpg",
    alt: "Bandeja de desayuno con flores sobre mesa de madera",
    label: "Momentos",
  },
] as const;

export function DesayunosFelicesGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,249,244,0.18),rgba(249,240,232,0.42)_18%,rgba(244,231,220,0.76)_52%,rgba(251,246,241,0.92)_78%,#fcf8f4_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(199,167,141,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(236,224,212,0.2),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.34),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B6B53]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-open-sans)] text-4xl font-semibold tracking-[-0.04em] text-[#2E221A] sm:text-5xl">
            Desayunos Felices gana una segunda capa mas floral, mas dulce y mas cercana a una experiencia de regalo.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#665547] sm:text-lg">
            La estructura principal se mantiene arriba y debajo sumamos bloques con fondo de imagen para que la landing
            no se quede solo en enlaces: desayunos en escena, empaque cuidado y una atmosfera mas emocional y comercial.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(60,43,28,0.08)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(249,245,241,0.96))",
                borderColor: "rgba(139,107,83,0.14)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#8B6B53]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-2xl font-semibold tracking-[-0.04em] text-[#2E221A]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#665547]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(60,43,28,0.08)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,244,240,0.96))",
              borderColor: "rgba(139,107,83,0.14)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#8B6B53]">
              Regalo y presentacion
            </p>
            <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#2E221A]">
              El producto entra como momento completo, no solo como lista de opciones.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#665547]">
              Esta extension busca mostrar mejor lo que vende la marca: desayuno, flores, empaque y sensacion de
              sorpresa. La landing gana contexto, calidez y una lectura visual que acompana mucho mejor la idea de
              celebrar o regalar.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#eadccf] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/desayunosfelices/hero-breakfast.jpg"
                  alt="Bandeja de desayuno y flores usada como imagen principal de Desayunos Felices"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(46,34,26,0.44))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF1E5]">
                    Gift moment
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing se siente mas emocional y mas lista para convertir.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#eadccf] bg-white/88 shadow-[0_18px_36px_rgba(60,43,28,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(46,34,26,0.5))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF1E5]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(60,43,28,0.08)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,244,239,0.96))",
            borderColor: "rgba(139,107,83,0.14)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#8B6B53]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#2E221A]">
                Una landing mas cercana a una marca de detalles y celebraciones.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#665547]">
                Desde aqui podemos seguir sumando categorias, fechas especiales o tipos de regalo, pero ya con una base
                mucho mas visual para mostrar el valor de cada detalle.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#8B6B53,#C7A78D)] hover:bg-[linear-gradient(135deg,#9b795f,#d3b298)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#8B6B53]/18 bg-white/70 text-[#2E221A] hover:border-[#8B6B53]/30 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
