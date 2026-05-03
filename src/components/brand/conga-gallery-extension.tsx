import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/conga/hero-street.jpg",
  "/images/brand-landings/conga/art-panel.jpg",
  "/images/brand-landings/conga/hero-street.jpg",
  "/images/brand-landings/conga/art-panel.jpg",
  "/images/brand-landings/conga/hero-street.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Color y movimiento",
    title: "Una extension para que la landing se sienta mas viva y no solo funcional.",
    body: "Conga ya tenia una base clara de biolink. Esta segunda franja agrega mas personalidad visual: color, ritmo, ciudad y una lectura de marca mas expresiva sin perder el acceso rapido a sus enlaces.",
  },
  {
    eyebrow: "Lenguaje visual",
    title: "Graficas, calle y composiciones con mas energia.",
    body: "La marca pide una estructura menos neutra. Por eso esta ampliacion toma recursos visuales con mas gesto y contraste para que la pagina se acerque a una experiencia de marca y no solo a una lista de botones.",
  },
] as const;

const galleryCards = [
  {
    src: "/images/brand-landings/conga/hero-street.jpg",
    alt: "Persona caminando frente a una fachada rosa y turquesa en una escena de calle",
    label: "Street mood",
  },
  {
    src: "/images/brand-landings/conga/art-panel.jpg",
    alt: "Ilustracion grafica con formas azules, verdes y acentos naranjas",
    label: "Graphic world",
  },
] as const;

export function CongaGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(252,244,238,0.18),rgba(247,233,224,0.42)_18%,rgba(240,229,219,0.72)_52%,rgba(238,243,247,0.9)_78%,#eef4f8_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,154,94,0.2),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(74,167,255,0.16),transparent_24%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.34),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9A5E]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-assistant)] text-4xl font-semibold tracking-[-0.04em] text-[#19243A] sm:text-5xl">
            Conga gana una segunda capa mas grafica, mas urbana y mas expresiva.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5B667A] sm:text-lg">
            Mantuvimos la entrada directa del biolink y debajo añadimos una extension de bloques con fondo fotográfico,
            composiciones mas visuales y una lectura de marca mas cercana a las maquetas vivas que ya vienes usando en
            otras landings.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(23,43,79,0.12)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,244,240,0.96))",
                borderColor: "rgba(245,107,36,0.12)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FF9A5E]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-assistant)] text-2xl font-semibold tracking-[-0.04em] text-[#19243A]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#5B667A]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(23,43,79,0.12)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,244,240,0.96))",
              borderColor: "rgba(245,107,36,0.12)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FF9A5E]">
              Universo visual
            </p>
            <h3 className="mt-3 [font-family:var(--font-assistant)] text-3xl font-semibold tracking-[-0.04em] text-[#19243A]">
              Una marca que se beneficia de imagen, gesto y composicion.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#5B667A]">
              Conga no necesita una extension silenciosa sino una mas atrevida. Este bloque hace que la landing empiece
              a hablar con mas actitud: color callejero, movimiento y una direccion visual que se siente mas viva y mas
              memorable.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#f1d7c5] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/conga/hero-street.jpg"
                  alt="Escena urbana colorida usada como mood visual de Conga"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(25,36,58,0.46))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF0E5]">
                    Street energy
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    El fondo entra como narrativa de marca, no solo como decoracion.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#f1d7c5] bg-white/88 shadow-[0_18px_36px_rgba(23,43,79,0.1)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(25,36,58,0.54))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF0E5]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(23,43,79,0.12)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,243,239,0.96))",
            borderColor: "rgba(245,107,36,0.12)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#FF9A5E]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-assistant)] text-3xl font-semibold tracking-[-0.04em] text-[#19243A]">
                La estructura base se mantiene, pero la marca ya se siente mas completa.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#5B667A]">
                Desde aqui podemos seguir afinando cuanto de esta extension quieres que se vea mas artistico, mas
                comercial o mas cercano a una landing de coleccion.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#F56B24,#FF9A5E)] hover:bg-[linear-gradient(135deg,#ff7b38,#ffab75)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#F56B24]/18 bg-white/70 text-[#19243A] hover:border-[#F56B24]/30 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
