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
    icon: "instagram",
  },
  {
    title: "WhatsApp",
    description: "Hablar directo con RiBuzz",
    href: SITE_CONFIG.whatsappUrl,
    accent: "from-[#25D366]/20 via-[#25D366]/10 to-transparent",
    icon: "whatsapp",
  },
  {
    title: "Hacer diagnóstico",
    description: "Completar lectura inicial del sistema comercial",
    href: SITE_CONFIG.diagnosisPath,
    accent: "from-[#0FEFFD]/20 via-[#0FEFFD]/10 to-transparent",
    icon: "spark",
  },
  {
    title: "Sitio web",
    description: "Volver a la pagina principal de RiBuzz",
    href: "/",
    accent: "from-[#B16EFF]/18 via-[#E625FF]/8 to-transparent",
    icon: "globe",
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

function LinkIcon({ type }: { type: (typeof primaryLinks)[number]["icon"] }) {
  if (type === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.59 2 2.16 6.43 2.16 11.88c0 1.74.45 3.43 1.3 4.92L2 22l5.35-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.44 0 9.87-4.43 9.87-9.88 0-2.64-1.03-5.12-2.86-7Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.18.83.85-3.1-.2-.31a8.11 8.11 0 0 1-1.25-4.34c0-4.49 3.65-8.14 8.15-8.14 2.17 0 4.2.84 5.73 2.38a8.06 8.06 0 0 1 2.38 5.76c0 4.49-3.65 8.14-8.03 8.14Zm4.47-6.09c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.16.24-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.38-1.69-.14-.24-.02-.36.11-.48.11-.11.25-.29.37-.43.12-.15.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.73 2.64 4.18 3.7.58.25 1.04.4 1.39.52.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4" />
        <path d="M12 3.5c2.5 2.5 4 5.5 4 8.5s-1.5 6-4 8.5c-2.5-2.5-4-5.5-4-8.5s1.5-6 4-8.5Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="m12 3 1.9 5.9H20l-4.95 3.6L17 18.5 12 14.8 7 18.5l1.95-6L4 8.9h6.1Z" />
    </svg>
  );
}

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
              RiBuzz
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
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[#F5F7FA] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 group-hover:border-white/18 group-hover:text-white">
                      <LinkIcon type={link.icon} />
                    </span>
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


