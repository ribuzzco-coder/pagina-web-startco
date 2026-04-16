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
    description:
      "Neo-Mech es el aliado ideal para impresión 3D a la medida de tus necesidades.",
    href: "https://www.instagram.com/neomech3d/",
    whatsappUrl: "https://wa.me/573117409241",
    portfolioUrl: "https://drive.google.com/file/d/1pJjucqtEM1P7hCWs0YnBBGIqUDmmeGhP/view?usp=sharing",
  },
  gifts: {
    title: "Regalos / documentos de valor",
    description:
      "¿Quieres aprender a crear una oferta y cómo entregarla? Aprende aquí cómo hacerlo.",
  },
} as const;

export default function StartcoPage() {
  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen">
      <div className="fixed inset-0 z-0">
        <AnimatedShaderBackground />
      </div>
      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,34,0.72),rgba(11,11,16,0.64))] px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:rounded-[36px] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(230,37,255,0.4),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,37,255,0.1),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.08),transparent_26%)]" />

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

            <h1 className="mt-6 text-4xl font-normal tracking-tight text-[#F5F7FA] sm:text-5xl [font-family:var(--font-zen-dots)]">
              RiBuzz
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
              Diseñamos soluciones comerciales, visuales y digitales para marcas
              que quieren crecer con más claridad, mejor presencia y herramientas
              útiles.
            </p>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {primaryLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              const cardClassName = cn(
                "group relative overflow-hidden rounded-[24px] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]",
                link.featured
                  ? "border-[#E625FF]/40 bg-[linear-gradient(180deg,rgba(32,22,40,0.96),rgba(20,18,30,0.98))] shadow-[0_0_0_1px_rgba(230,37,255,0.12),0_0_26px_rgba(230,37,255,0.18)] hover:border-[#ff8bf7]/52 hover:shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_32px_rgba(230,37,255,0.24)]"
                  : "border-white/10 bg-[#141724] hover:border-white/18"
              );

              const content = (
                <>
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      link.accent
                    )}
                  />
                  <div className="relative flex min-h-[58px] items-center justify-center text-center">
                    <div className="relative z-10 min-w-0">
                      <p className="text-base font-semibold text-[#F5F7FA]">
                        {link.title}
                      </p>
                      <p className="mt-1 text-sm text-[#98A0B3]">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </>
              );

              if (isExternal) {
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
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

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            <Link href={supportCards.nfc.href} className="block h-full">
              <Card
                glowTone="purple"
                className="group relative h-full min-h-[280px] overflow-hidden rounded-[28px] border-[#E625FF]/18 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(14,16,24,0.98))] px-5 py-6 text-center transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#ff8bf7]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)] sm:px-6"
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

                <div className="pointer-events-none absolute bottom-0 left-1/2 w-[54%] -translate-x-1/2 translate-y-[18%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[14%] md:w-[58%] md:translate-y-[8%]">
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

            <Card
              glowTone="cyan"
              className="group relative flex h-full min-h-[280px] flex-col rounded-[28px] border-[#0FEFFD]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] px-6 py-6 text-center transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#0FEFFD]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.12),transparent_26%)]" />
              <div className="relative flex flex-1 flex-col items-center justify-between gap-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {supportCards.neoMech.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {supportCards.neoMech.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#0FEFFD]/20 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                    <Image
                      src="/neo-mech-logo.png"
                      alt="Logo Neo-Mech"
                      width={100}
                      height={100}
                      className="relative h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(14,210,255,0.16)] sm:h-24 sm:w-24"
                    />
                  </div>

                  <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                    <a
                      href={supportCards.neoMech.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/5 px-4 py-2 text-[12px] font-semibold text-[#6AFFB6] transition-colors hover:bg-[#25D366]/10"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.59 2 2.16 6.43 2.16 11.88c0 1.74.45 3.43 1.3 4.92L2 22l5.35-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.44 0 9.87-4.43 9.87-9.88 0-2.64-1.03-5.12-2.86-7Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.18.83.85-3.1-.2-.31a8.11 8.11 0 0 1-1.25-4.34c0-4.49 3.65-8.14 8.15-8.14 2.17 0 4.2.84 5.73 2.38a8.06 8.06 0 0 1 2.38 5.76c0 4.49-3.65 8.14-8.03 8.14Zm4.47-6.09c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.16.24-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.38-1.69-.14-.24-.02-.36.11-.48.11-.11.25-.29.37-.43.12-.15.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.73 2.64 4.18 3.7.58.25 1.04.4 1.39.52.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
                      </svg>
                      Contactar
                    </a>
                    <a
                      href={supportCards.neoMech.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Portafolio
                    </a>
                  </div>
                  
                  <a
                    href={supportCards.neoMech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9BF8FF]/70 transition-colors hover:text-[#9BF8FF]"
                  >
                    <span>Ver Instagram</span>
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <Link
            href={SITE_CONFIG.giftsPath}
            className="relative mx-auto mt-4 block max-w-xl"
          >
            <Card
              glowTone="cyan"
              className="rounded-[26px] border-dashed border-white/10 bg-[#10131C]/72 px-6 py-6 text-center md:min-h-[132px]"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-base font-semibold text-[#F5F7FA]">
                  {supportCards.gifts.title}
                </p>
                <span className="rounded-full border border-[#ff4d6d]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF9EB0]">
                  Ver regalos
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                {supportCards.gifts.description}
              </p>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}
