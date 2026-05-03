import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/innata/hero-ring.jpg",
  "/images/brand-landings/innata/story-rings.jpg",
  "/images/brand-landings/innata/brand-mark.jpg",
  "/images/brand-landings/innata/hero-ring.jpg",
  "/images/brand-landings/innata/story-rings.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Curaduria mineral",
    title: "Piedras unicas con una presencia limpia y silenciosa.",
    body: "La extension mantiene la identidad serena de INNATA y suma una lectura mas rica de marca: materiales, simbolos y piezas que se sienten personales sin perder sofisticacion.",
  },
  {
    eyebrow: "Ritual cotidiano",
    title: "Joyeria pensada para acompanar con ligereza.",
    body: "Tomamos la estructura base del biolink anterior y la ampliamos con bloques visuales para que el usuario no solo llegue a un enlace, sino a un pequeno universo de marca.",
  },
] as const;

const galleryCards = [
  {
    src: "/images/brand-landings/innata/story-rings.jpg",
    alt: "Anillos dorados delicados sobre la mano",
    label: "Coleccion",
  },
  {
    src: "/images/brand-landings/innata/brand-mark.jpg",
    alt: "Marca grafica de INNATA sobre fondo azul",
    label: "Identidad",
  },
] as const;

export function InnataGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(245,249,252,0.2),rgba(230,238,245,0.48)_18%,rgba(219,229,238,0.8)_52%,rgba(234,241,247,0.92)_78%,#edf3f8_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(110,162,197,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(33,86,121,0.14),transparent_24%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.34),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6EA2C5]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-open-sans)] text-4xl font-semibold tracking-[-0.04em] text-[#183B53] sm:text-5xl">
            La estructura base de INNATA sigue intacta, pero ahora respira con mas marca.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#4D6474] sm:text-lg">
            Esta franja adicional toma la logica visual de las landings tipo preview que ya vienes trabajando:
            fondos fotograficos, bloques complementarios, identidad mas desarrollada y una lectura de marca mas completa
            sin perder la entrada directa del biolink anterior.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(16,38,54,0.1)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(243,247,251,0.96))",
                borderColor: "rgba(33,86,121,0.12)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#6EA2C5]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-2xl font-semibold tracking-[-0.04em] text-[#183B53]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4D6474]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(16,38,54,0.1)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(242,247,251,0.96))",
              borderColor: "rgba(33,86,121,0.12)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#6EA2C5]">
              Piedras con historia
            </p>
            <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#183B53]">
              Una landing mas rica, sin convertir a INNATA en otra cosa.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#4D6474]">
              La idea no es reemplazar el biolink que ya funcionaba, sino ampliarlo. Por eso dejamos la primera vista
              familiar y agregamos debajo una segunda capa de marca con fotografia, curaduria y ritmo visual, muy en la
              linea de las estructuras que ya vienes aprobando.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#d8e5ef] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/innata/story-rings.jpg"
                  alt="Anillos de INNATA sobre la mano"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(24,59,83,0.44))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#E8F4FB]">
                    Coleccion visual
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    El producto entra como atmosfera, no solo como ficha comercial.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#d8e5ef] bg-white/88 shadow-[0_18px_36px_rgba(16,38,54,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(24,59,83,0.5))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#E8F4FB]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(16,38,54,0.1)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(241,246,251,0.96))",
            borderColor: "rgba(33,86,121,0.12)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#6EA2C5]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-open-sans)] text-3xl font-semibold tracking-[-0.04em] text-[#183B53]">
                Una estructura mas cercana a tus previews, sin perder el acceso directo a la marca.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#4D6474]">
                Si esta direccion visual ya se acerca mas a lo que buscas, desde aqui podemos ajustar la jerarquia,
                sumar enlaces reales y replicar esta mezcla de biolink + bloques fotográficos al resto de marcas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#215679,#6EA2C5)] hover:bg-[linear-gradient(135deg,#2b6288,#7aaed0)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#215679]/18 bg-white/70 text-[#183B53] hover:border-[#215679]/30 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
