import Image from "next/image";
import Link from "next/link";

import { AnimatedShaderBackground } from "@/components/ui/animated-shader-background";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Startco",
  description:
    "Startco es un hub rápido de enlaces de RiBuzz para conectar redes, diagnóstico, sitio principal y próximos recursos de valor.",
  path: "/startco",
});

const primaryLinks = [
  {
    title: "Instagram",
    description: "@ribuzzco",
    href: SITE_CONFIG.instagramUrl,
    accent: "from-[#FF4FD9]/24 via-[#E625FF]/14 to-transparent",
    glowTone: "pink",
    featured: false,
  },
  {
    title: "WhatsApp",
    description: "Hablar directo con RiBuzz",
    href: SITE_CONFIG.whatsappUrl,
    accent: "from-[#25D366]/20 via-[#25D366]/10 to-transparent",
    glowTone: "green",
    featured: false,
  },
  {
    title: "Hacer diagnóstico",
    description: "Completar lectura inicial del sistema comercial",
    href: SITE_CONFIG.diagnosisPath,
    accent: "from-[#0FEFFD]/20 via-[#0FEFFD]/10 to-transparent",
    glowTone: "purple",
    featured: true,
  },
  {
    title: "Sitio web",
    description: "Volver a la página principal de RiBuzz",
    href: "/",
    accent: "from-[#B16EFF]/18 via-[#E625FF]/8 to-transparent",
    glowTone: "cyan",
    featured: false,
  },
] as const;

const supportCards = {
  nfc: {
    title: "Tarjetas NFC",
    description: "Accesos para networking y presentación física",
    href: "/contact",
  },
  neoMech: {
    title: "Conoce a Neo-Mech",
    description: "Neo-Mech es el aliado ideal para impresión 3D a la medida de tus necesidades.",
    href: "https://www.instagram.com/neomech3d/",
  },
  gifts: {
    title: "Regalos / documentos de valor",
    description: "Espacio reservado para recursos descargables, documentos y piezas útiles que luego se agregarán.",
  },
} as const;

const giftShortcut = {
  href: "#regalos",
  label: "Ver regalos y documentos de valor",
} as const;

function GiftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 8.5h15v11h-15z" />
      <path d="M3.5 8.5h17v-3h-17z" />
      <path d="M12 5.5v14" />
      <path d="M12 8.5h-4.2c-1.1 0-2-.9-2-2 0-1 .8-1.8 1.8-1.8 2.2 0 3.4 1.4 4.4 3.8Z" />
      <path d="M12 8.5h4.2c1.1 0 2-.9 2-2 0-1-.8-1.8-1.8-1.8-2.2 0-3.4 1.4-4.4 3.8Z" />
    </svg>
  );
}

export default function StartcoPage() {
  return (
    <section className="relative -mt-[76px] flex min-h-screen items-center overflow-hidden py-16 cv-auto sm:py-20">
      <Container className="relative z-10 max-w-3xl">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,34,0.96),rgba(11,11,16,0.98))] px-6 py-8 shadow-[0_24px_64px_rgba(0,0,0,0.34)] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(230,37,255,0.4),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,37,255,0.1),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.08),transparent_26%)]" />
          <AnimatedShaderBackground />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_16px_32px_rgba(0,0,0,0.22)] sm:h-36 sm:w-36">
              <Image
                src={SITE_CONFIG.logoMark}
                alt="Logo Startco RiBuzz"
                width={112}
                height={112}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                priority
              />
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#F5F7FA] sm:text-5xl [font-family:var(--font-zen-dots)]">
              RiBuzz
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
              Diseñamos soluciones comerciales, visuales y digitales para marcas que
              quieren crecer con más claridad, mejor presencia y herramientas útiles.
            </p>
          </div>

          <div className="relative mt-10 mr-auto grid max-w-xl gap-4">
            {primaryLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const cardClassName = cn(
                "group relative overflow-hidden rounded-[24px] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]",
                link.featured
                  ? "border-[#E625FF]/40 bg-[linear-gradient(180deg,rgba(32,22,40,0.96),rgba(20,18,30,0.98))] shadow-[0_0_0_1px_rgba(230,37,255,0.12),0_0_26px_rgba(230,37,255,0.18)] hover:border-[#ff8bf7]/52 hover:shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_32px_rgba(230,37,255,0.24)]"
                  : "border-white/10 bg-[#141724] hover:border-white/18",
              );

              const content = (
                <>
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      link.accent,
                    )}
                  />
                  <div className="relative flex min-h-[58px] items-center justify-center text-center">
                    <div className="relative z-10 min-w-0">
                      <p className="text-base font-semibold text-[#F5F7FA]">{link.title}</p>
                      <p className="mt-1 text-sm text-[#98A0B3]">{link.description}</p>
                    </div>
                  </div>
                </>
              );

              if (link.title === "Hacer diagnóstico") {
                return (
                  <div key={link.title} className="grid grid-cols-[minmax(0,1fr)_88px] gap-3">
                    <Link href={link.href} className="block">
                      <Card glowTone={link.glowTone} className={cardClassName}>
                        {content}
                      </Card>
                    </Link>

                    <a href={giftShortcut.href} aria-label={giftShortcut.label} className="block h-full">
                      <Card
                        glowTone="pink"
                        className="group relative flex h-full min-h-[96px] items-center justify-center overflow-hidden rounded-[24px] border border-[#ff4d6d]/38 bg-[linear-gradient(180deg,rgba(36,16,20,0.96),rgba(24,12,16,0.98))] px-4 py-4 text-center shadow-[0_0_0_1px_rgba(255,77,109,0.14),0_0_24px_rgba(255,77,109,0.18)] transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#ff7f96]/54 hover:shadow-[0_0_0_1px_rgba(255,77,109,0.22),0_0_34px_rgba(255,77,109,0.24)]"
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,104,132,0.18),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(255,52,92,0.12),transparent_44%)]" />
                        <span className="relative text-[#FF7A94] drop-shadow-[0_0_14px_rgba(255,77,109,0.34)]">
                          <GiftIcon />
                        </span>
                      </Card>
                    </a>
                  </div>
                );
              }

              if (isExternal) {
                return (
                  <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Card glowTone={link.glowTone} className={cardClassName}>
                      {content}
                    </Card>
                  </a>
                );
              }

              return (
                <Link key={link.title} href={link.href} className="block">
                  <Card glowTone={link.glowTone} className={cardClassName}>
                    {content}
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="relative mt-8 mr-auto grid max-w-xl gap-4 md:grid-cols-2">
            <Link href={supportCards.nfc.href} className="block h-full">
              <Card
                glowTone="purple"
                className="group relative h-full min-h-[260px] overflow-hidden rounded-[28px] border-[#E625FF]/18 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(14,16,24,0.98))] px-6 py-6 text-center transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#ff8bf7]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(230,37,255,0.08),transparent_34%)]" />
                <div className="relative z-10 mx-auto max-w-[78%]">
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {supportCards.nfc.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {supportCards.nfc.description}
                  </p>
                </div>
                <div className="pointer-events-none absolute -bottom-[24%] left-1/2 w-[58%] -translate-x-1/2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 md:-bottom-[14%]">
                  <Image
                    src="/startco-cards2.png"
                    alt="Mockup de tarjetas NFC RiBuzz"
                    width={700}
                    height={1000}
                    className="h-auto w-full object-contain drop-shadow-[0_0_28px_rgba(230,37,255,0.20)]"
                  />
                </div>
              </Card>
            </Link>

            <a href={supportCards.neoMech.href} target="_blank" rel="noopener noreferrer" className="block">
              <Card
                glowTone="cyan"
                className="rounded-[28px] border-[#0FEFFD]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] px-6 py-6 text-center"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.12),transparent_26%)]" />
                <div className="relative flex h-full min-h-[260px] flex-col items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                      {supportCards.neoMech.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                      {supportCards.neoMech.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2.5">
                    <Image
                      src="/neo-mech-logo.png"
                      alt="Logo Neo-Mech"
                      width={100}
                      height={100}
                      className="h-24 w-24 object-contain drop-shadow-[0_0_18px_rgba(14,210,255,0.16)]"
                    />
                    <span className="inline-flex w-fit rounded-full border border-[#0FEFFD]/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9BF8FF]">
                      Ver perfil
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          <div id="regalos" className="relative mt-4 mr-auto max-w-xl">
            <Card
              glowTone="cyan"
              className="rounded-[26px] border-dashed border-white/10 bg-[#10131C]/72 px-6 py-6 text-center md:min-h-[132px]"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-base font-semibold text-[#F5F7FA]">{supportCards.gifts.title}</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E7B0EE]">
                  Próximamente
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                {supportCards.gifts.description}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
