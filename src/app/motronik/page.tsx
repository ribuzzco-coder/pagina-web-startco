import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Motronik",
  description:
    "Base inicial para la landing de Motronik con la misma estructura general de Startco.",
  path: "/motronik",
});

const primaryLinks = [
  {
    title: "Instagram",
    description: "Canal visual de la marca",
    accent: "from-[#FF7A6B]/24 via-[#FF3B5C]/14 to-transparent",
    glowTone: "pink",
    featured: false,
  },
  {
    title: "WhatsApp",
    description: "Contacto directo",
    accent: "from-[#25D366]/20 via-[#25D366]/10 to-transparent",
    glowTone: "green",
    featured: false,
  },
  {
    title: "Cat\u00e1logo",
    description: "Acceso principal a productos o soluciones",
    accent: "from-[#FF6A45]/22 via-[#FF3B5C]/12 to-transparent",
    glowTone: "pink",
    featured: true,
  },
  {
    title: "Sitio web",
    description: "Volver a la p\u00e1gina principal de Motronik",
    accent: "from-[#FF8C66]/18 via-[#FF4D6D]/10 to-transparent",
    glowTone: "pink",
    featured: false,
  },
  {
    title: "Agenda reuni\u00f3n",
    description: "Reservar una llamada o asesor\u00eda",
    accent: "from-[#FF7A6B]/20 via-[#FF3B5C]/12 to-transparent",
    glowTone: "pink",
    featured: false,
  },
] as const;

const supportCards = {
  first: {
    title: "Productos destacados",
    description:
      "Espacio base para resaltar una l\u00ednea principal, demo visual o acceso r\u00e1pido.",
    image: "/startco-cards2.png",
  },
  second: {
    title: "Soluci\u00f3n especial",
    description:
      "Bloque reservado para una propuesta o vertical importante de la marca.",
    logo: SITE_CONFIG.logoMark,
    primaryAction: "Conocer m\u00e1s",
    secondaryAction: "Ver ficha",
  },
  third: {
    title: "Recursos / documentos",
    description:
      "Zona preparada para futuros cat\u00e1logos, fichas t\u00e9cnicas o documentos de valor.",
  },
} as const;

function DisabledPrimaryLink({
  title,
  description,
  accent,
  glowTone,
  featured,
}: (typeof primaryLinks)[number]) {
  const cardClassName = cn(
    "group relative overflow-hidden rounded-[24px] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]",
    featured
      ? "border-[#FF3B5C]/40 bg-[linear-gradient(180deg,rgba(40,20,28,0.96),rgba(26,16,20,0.98))] shadow-[0_0_0_1px_rgba(255,59,92,0.12),0_0_26px_rgba(255,59,92,0.18)] hover:border-[#ff8c98]/52 hover:shadow-[0_0_0_1px_rgba(255,59,92,0.18),0_0_32px_rgba(255,59,92,0.24)]"
      : "border-white/10 bg-[#141724] hover:border-white/18",
  );

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="block w-full cursor-default"
    >
      <Card glowTone={glowTone} className={cardClassName}>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            accent,
          )}
        />
        <div className="relative flex min-h-[58px] items-center justify-center text-center">
          <div className="relative z-10 min-w-0">
            <p className="text-base font-semibold text-[#F5F7FA]">{title}</p>
            <p className="mt-1 text-sm text-[#98A0B3]">{description}</p>
          </div>
        </div>
      </Card>
    </button>
  );
}

export default function MotronikPage() {
  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,59,92,0.16),transparent_34%),linear-gradient(180deg,#0b0b10,#12131c_46%,#0b0b10)]" />
        <StartcoGalaxy className="opacity-90" />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,34,0.72),rgba(11,11,16,0.64))] px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:rounded-[36px] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,59,92,0.4),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,59,92,0.1),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,124,77,0.08),transparent_26%)]" />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_16px_32px_rgba(0,0,0,0.22)] sm:h-36 sm:w-36">
              <Image
                src={SITE_CONFIG.logoMark}
                alt="Logo Motronik"
                width={112}
                height={112}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                priority
              />
            </div>

            <h1 className="mt-6 text-4xl font-normal tracking-tight text-[#F5F7FA] sm:text-5xl [font-family:var(--font-zen-dots)]">
              Motronik
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
              Base inicial de la landing Motronik. Conserva el orden y la
              estructura de Startco para luego ajustar identidad, textos,
              accesos y visuales propios.
            </p>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {primaryLinks.map((link) => (
              <DisabledPrimaryLink key={link.title} {...link} />
            ))}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            <Card
              glowTone="pink"
              className="group relative h-full min-h-[280px] overflow-hidden rounded-[28px] border-[#FF3B5C]/20 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(14,16,24,0.98))] px-5 py-6 text-center sm:px-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,59,92,0.08),transparent_34%)]" />
              <div className="relative z-10 mx-auto max-w-[78%]">
                <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {supportCards.first.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {supportCards.first.description}
                </p>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-1/2 w-[72%] -translate-x-1/2 translate-y-[34%] md:w-[78%] md:translate-y-[24%]">
                <Image
                  src={supportCards.first.image}
                  alt="Mockup visual Motronik"
                  width={700}
                  height={1000}
                  className="h-auto w-full object-contain drop-shadow-[0_0_34px_rgba(255,59,92,0.24)]"
                />
              </div>
            </Card>

            <Card
              glowTone="pink"
              className="group relative flex h-full min-h-[280px] flex-col rounded-[28px] border-[#FF6A45]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] px-6 py-6 text-center"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,106,69,0.12),transparent_26%)]" />
              <div className="relative flex flex-1 flex-col items-center justify-between gap-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {supportCards.second.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {supportCards.second.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#FF5A45]/20 blur-xl" />
                    <Image
                      src={supportCards.second.logo}
                      alt="Marca base Motronik"
                      width={100}
                      height={100}
                      className="relative h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(255,90,69,0.16)] sm:h-24 sm:w-24"
                    />
                  </div>

                  <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="cursor-default rounded-full border border-[#FF6A45]/22 bg-[#FF6A45]/8 px-4 py-2 text-[12px] font-semibold text-[#FFB09E]"
                    >
                      {supportCards.second.primaryAction}
                    </button>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white"
                    >
                      {supportCards.second.secondaryAction}
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative mx-auto mt-4 block max-w-xl">
            <Card
              glowTone="pink"
              className="rounded-[26px] border-dashed border-white/10 bg-[#10131C]/72 px-6 py-6 text-center md:min-h-[132px]"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-base font-semibold text-[#F5F7FA]">
                  {supportCards.third.title}
                </p>
                <span className="rounded-full border border-[#ff4d6d]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF9EB0]">
                  Pr\u00f3ximamente
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                {supportCards.third.description}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
