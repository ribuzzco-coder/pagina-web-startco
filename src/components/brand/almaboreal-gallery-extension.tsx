import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/almaboreal/hero-jewelry.jpg",
  "/images/brand-landings/almaboreal/hero-jewelry.jpg",
  "/images/brand-landings/almaboreal/hero-jewelry.jpg",
  "/images/brand-landings/almaboreal/hero-jewelry.jpg",
  "/images/brand-landings/almaboreal/hero-jewelry.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Joyeria con sentido",
    title: "Una extension visual para que la landing se sienta mas pieza de marca y no solo acceso rapido.",
    body: "Mantenemos la entrada directa del biolink, pero debajo sumamos una segunda capa con fotografia, atmosfera y una lectura mas emocional de Alma Boreal sin perder claridad.",
  },
  {
    eyebrow: "Calidez y simbolo",
    title: "Una composicion mas dorada, delicada y ligada al universo de la joya.",
    body: "La marca pide una presencia elegante y serena. Por eso esta franja trabaja con fondos de imagen, tonos marfil y dorados suaves para acercarse mas a una landing editorial de joyeria.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
  imageClassName?: string;
}> = [
  {
    src: "/images/brand-landings/almaboreal/hero-jewelry.jpg",
    alt: "Modelo usando joyas de Alma Boreal en una escena de detalle",
    label: "Coleccion",
  },
  {
    src: "/images/brand-landings/almaboreal.jpg",
    alt: "Logo de Alma Boreal",
    label: "Identidad",
    imageClassName: "object-contain bg-white/94 p-8",
  },
] as const;

export function AlmaBorealGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,249,242,0.18),rgba(248,240,229,0.42)_18%,rgba(244,234,219,0.78)_52%,rgba(250,245,237,0.92)_78%,#fdf8f1_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(224,192,141,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(184,138,78,0.16),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.36),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B88A4E]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-playfair)] text-4xl font-semibold tracking-[-0.04em] text-[#2F261B] sm:text-5xl">
            Alma Boreal gana una segunda capa mas calida, mas elegante y mas cercana a una experiencia de joyeria.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6A5843] sm:text-lg">
            La landing mantiene arriba su estructura base y debajo suma bloques con fondo de imagen para que la marca se
            sienta mas completa: joya en contexto, identidad mas presente y una atmosfera visual con mayor riqueza.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(85,63,28,0.08)]"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,246,240,0.96))",
                borderColor: "rgba(184,138,78,0.14)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#B88A4E]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-2xl font-semibold tracking-[-0.04em] text-[#2F261B]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#6A5843]">
                {card.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card
            interactiveGlow={false}
            className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(85,63,28,0.08)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(251,247,241,0.96))",
              borderColor: "rgba(184,138,78,0.14)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#B88A4E]">
              Presencia y detalle
            </p>
            <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-[#2F261B]">
              La joya entra como protagonista y tambien como atmosfera de marca.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#6A5843]">
              Esta extension busca que Alma Boreal se sienta menos como una pagina de enlaces y mas como una vitrina
              sensible de marca. La fotografia aporta contexto, elegancia y una lectura emocional que acompana mejor el
              tono de sus piezas.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-[#eadac0] bg-white/90">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/almaboreal/hero-jewelry.jpg"
                  alt="Imagen principal de joyeria usada como apoyo visual para Alma Boreal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(47,38,27,0.46))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF2DB]">
                    Signature piece
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana profundidad visual sin perder delicadeza.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {galleryCards.map((item) => (
              <article
                key={item.label}
                className="group overflow-hidden rounded-[2rem] border border-[#eadac0] bg-white/88 shadow-[0_18px_36px_rgba(85,63,28,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className={item.imageClassName ?? "object-cover transition duration-500 group-hover:scale-[1.03]"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(47,38,27,0.52))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/12 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FFF2DB]">
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
          className="mt-6 rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(85,63,28,0.08)]"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,246,239,0.96))",
            borderColor: "rgba(184,138,78,0.14)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#B88A4E]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-[#2F261B]">
                Una landing mas cercana a una marca de joyeria con identidad propia.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#6A5843]">
                Desde aqui podemos seguir sumando colecciones, piezas o mensajes de marca, pero ya sobre una base mas
                visual y mas alineada con el caracter de Alma Boreal.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#B88A4E,#E0C08D)] hover:bg-[linear-gradient(135deg,#c29559,#e8c997)]">
                Escribenos
              </Button>
              <Button href="#top" variant="secondary" className="border-[#B88A4E]/18 bg-white/70 text-[#2F261B] hover:border-[#B88A4E]/30 hover:bg-white/88">
                Volver arriba
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
