import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Startco",
  description:
    "Startco es un hub rápido de enlaces de RiBuzz para conectar redes, diagnóstico, sitio principal y proximos recursos de valor.",
  path: "/startco",
});

const primaryLinks = [
  {
    title: "Instagram",
    description: "@ribuzzco",
    href: SITE_CONFIG.instagramUrl,
    accent: "from-[#FF4FD9]/24 via-[#E625FF]/14 to-transparent",
  },
  {
    title: "WhatsApp",
    description: "Hablar directo con RiBuzz",
    href: SITE_CONFIG.whatsappUrl,
    accent: "from-[#25D366]/20 via-[#25D366]/10 to-transparent",
  },
  {
    title: "Hacer diagnóstico",
    description: "Completar lectura inicial del sistema comercial",
    href: SITE_CONFIG.diagnosisPath,
    accent: "from-[#0FEFFD]/20 via-[#0FEFFD]/10 to-transparent",
  },
  {
    title: "Sitio web",
    description: "Volver a la pagina principal de RiBuzz",
    href: "/",
    accent: "from-[#B16EFF]/18 via-[#E625FF]/8 to-transparent",
  },
] as const;

const supportLinks = [
  {
    title: "Tarjetas NFC",
    description: "Accesos para networking y presentacion fisica",
    href: "/contact",
    live: true,
  },
  {
    title: "Regalos / documentos de valor",
    description: "Espacio reservado para recursos descargables que luego se agregaran",
    live: false,
  },
] as const;

export default function StartcoPage() {
  return (
    <section className="cv-auto py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,34,0.96),rgba(11,11,16,0.98))] px-6 py-8 shadow-[0_24px_64px_rgba(0,0,0,0.34)] sm:px-10 sm:py-10">
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

            <h1 className="mt-6 font-sans text-4xl font-bold tracking-tight text-[#F5F7FA] sm:text-5xl">
              STARTCO
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
              Un punto de entrada rápido para conectar, explorar recursos y llevar
              la marca de RiBuzz a conversaciones, networking y proximos activos.
            </p>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {primaryLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const className = cn(
                "group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#141724] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-white/18 hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]",
              );

              const content = (
                <>
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      link.accent,
                    )}
                  />
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-[#F5F7FA]">{link.title}</p>
                      <p className="mt-1 text-sm text-[#98A0B3]">{link.description}</p>
                    </div>
                    <span className="text-lg text-[#E7B0EE] transition-transform duration-300 group-hover:translate-x-1">
                      +
                    </span>
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
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={link.title} href={link.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            {supportLinks.map((item) => {
              const baseClassName =
                "rounded-[24px] border px-5 py-5 text-center transition-[border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

              if (item.live) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      baseClassName,
                      "border-white/10 bg-[#121520] hover:border-[#E625FF]/24 hover:bg-[#171B28] hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]",
                    )}
                  >
                    <p className="text-base font-semibold text-[#F5F7FA]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                      {item.description}
                    </p>
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className={cn(
                    baseClassName,
                    "border-dashed border-white/10 bg-[#10131C]/70",
                  )}
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <p className="text-base font-semibold text-[#F5F7FA]">{item.title}</p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E7B0EE]">
                      Proximamente
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

