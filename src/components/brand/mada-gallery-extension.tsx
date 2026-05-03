import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

const backgroundImages = [
  "/images/brand-landings/mada/hero-belts.jpg",
  "/images/brand-landings/mada/logo.jpg",
  "/images/brand-landings/mada/hero-belts.jpg",
  "/images/brand-landings/mada/logo.jpg",
  "/images/brand-landings/mada/hero-belts.jpg",
] as const;

const featureCards = [
  {
    eyebrow: "Cuero y styling",
    title: "Una extension para que la landing se sienta mas moda, mas accesorio y mas marca.",
    body: "La base del biolink mantiene los accesos rapidos, pero debajo sumamos una segunda franja con imagen, color e identidad para que MaDa se perciba como una propuesta de accesorios con personalidad propia.",
  },
  {
    eyebrow: "Hecho a mano",
    title: "Una composicion que mezcla producto, autoria y una lectura mas editorial.",
    body: "La referencia del perfil habla de correas, cinturones y accesorios en cuero. Por eso esta extension trabaja con un tono mas estilizado y una direccion visual que acompana esa promesa artesanal.",
  },
] as const;

const galleryCards: ReadonlyArray<{
  src: string;
  alt: string;
  label: string;
}> = [
  {
    src: "/images/brand-landings/mada/hero-belts.jpg",
    alt: "Look de MaDa con cinturones y accesorios en cuero como elemento principal",
    label: "Styled product",
  },
  {
    src: "/images/brand-landings/mada/logo.jpg",
    alt: "Logo de MaDa Complements",
    label: "Identity",
  },
] as const;

export function MadaGalleryExtension() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(17,28,40,0.28),rgba(22,45,67,0.56)_18%,rgba(16,28,39,0.84)_52%,rgba(8,14,20,0.94)_78%,#09121a_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(233,167,100,0.2),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(44,88,124,0.18),transparent_24%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.12),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E1A35D]">
            Extension visual
          </p>
          <h2 className="mt-4 [font-family:var(--font-playfair)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            MaDa gana una segunda capa mas estilizada, mas artesanal y mas cercana a una marca de accesorios con firma.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#D7E0E8] sm:text-lg">
            Mantenemos arriba el acceso rapido del biolink y debajo sumamos bloques con fondo de imagen para que la
            landing se sienta mas completa: styling, cuero, color de marca y una atmosfera mas construida.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              interactiveGlow={false}
              className="rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
              style={{
                background: "linear-gradient(180deg,rgba(18,31,45,0.86),rgba(9,18,26,0.94))",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#E1A35D]">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#D7E0E8]">
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
              background: "linear-gradient(180deg,rgba(18,31,45,0.88),rgba(9,18,26,0.96))",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#E1A35D]">
              Producto con actitud
            </p>
            <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-white">
              El accesorio entra como pieza de estilo y tambien como centro de la propuesta.
            </h3>
            <p className="mt-4 text-base leading-7 text-[#D7E0E8]">
              Esta extension busca que MaDa se sienta mas cercana a una marca de autor: cinturones, cuero, combinacion
              de tonos y una presentacion visual que acompana mejor la idea de elevar un look con accesorios hechos a mano.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/8">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/brand-landings/mada/hero-belts.jpg"
                  alt="Look de MaDa usado como imagen principal de la landing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%,rgba(9,18,26,0.56))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FCE4C6]">
                    Leather styling
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/88">
                    La landing gana producto, actitud y una presencia mas memorable.
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
                    className={item.label === "Identity" ? "object-contain bg-[#23496a] p-8" : "object-cover transition duration-500 group-hover:scale-[1.03]"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(9,18,26,0.58))]" />
                  <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#FCE4C6]">
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
            background: "linear-gradient(180deg,rgba(18,31,45,0.86),rgba(9,18,26,0.94))",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#E1A35D]">
                Siguiente paso
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl font-semibold tracking-[-0.04em] text-white">
                Una landing mas cercana a una marca de accesorios en cuero con producto y voz propia.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#D7E0E8]">
                Desde aqui podemos seguir sumando categorias, correas o cinturones destacados, pero ya con una base
                visual mucho mas alineada con el universo de MaDa.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_CONFIG.whatsappUrl} className="bg-[linear-gradient(135deg,#E1A35D,#23496A)] hover:bg-[linear-gradient(135deg,#ebb272,#2b5a82)]">
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
