"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ShareButton } from "@/components/ui/share-button";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const primaryLinks = [
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
  {
    title: "Agenda reunión",
    description: "Reservar una llamada con RiBuzz",
    href: "https://calendly.com/ribuzzco/conexion-ribuzz",
    accent: "from-[#0FEFFD]/22 via-[#E625FF]/14 to-transparent",
    glowTone: "purple",
    featured: false,
  },
] as const;

const supportCards = {
  nfc: {
    title: "Tarjetas NFC",
    description: "Accesos para networking y presentación física",
    href: "/nfc",
  },
  neoMech: {
    title: "Conoce a Neo-Mech",
    description:
      "Neo-Mech es el aliado ideal para impresión 3D a la medida de tus necesidades.",
    href: "https://www.instagram.com/neomech3d/",
    whatsappUrl: "https://wa.me/573008455611",
    portfolioUrl:
      "https://drive.google.com/file/d/1pJjucqtEM1P7hCWs0YnBBGIqUDmmeGhP/view?usp=sharing",
  },
  gifts: {
    title: "Regalos / documentos de valor",
    description:
      "¿Quieres aprender a crear una oferta y cómo entregarla? Aprende aquí cómo hacerlo.",
  },
} as const;

function SocialIcon({ name }: { name: "instagram" | "whatsapp" }) {
  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.8 7.2h.01" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.56 0 .27 5.28.27 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.52-1.71a11.78 11.78 0 0 0 5.54 1.41h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.22-6.1-3.34-8.43Zm-8.46 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.87 1.01 1.04-3.77-.23-.39a9.8 9.8 0 0 1-1.5-5.15c0-5.43 4.42-9.85 9.87-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.84 9.89Z" />
      <path d="M17.56 14.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.46a8.93 8.93 0 0 1-1.66-2.06c-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ThemeToggle({
  isDayMode,
  onToggle,
}: {
  isDayMode: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDayMode ? "Cambiar a modo nocturno" : "Cambiar a modo diurno"}
      className={cn(
        "absolute left-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color] duration-300 hover:-translate-y-[1px] sm:left-6 sm:top-6",
        isDayMode
          ? "border-[#111827]/14 bg-[#111827]/8 text-[#111827] hover:border-[#111827]/22 hover:bg-[#111827]/12"
          : "border-white/14 bg-white/8 text-white hover:border-white/24 hover:bg-white/14 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_22px_rgba(255,255,255,0.14)]",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[19px] w-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDayMode ? (
          <>
            <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z" />
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
          </>
        )}
      </svg>
    </button>
  );
}

export default function ContactoClient() {
  const [isDayMode, setIsDayMode] = useState(false);

  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen">
      <div className="fixed inset-0 z-0">
        <div
          className={cn(
            "absolute inset-0 transition-[background,opacity] duration-500",
            isDayMode
              ? "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_26%),linear-gradient(180deg,#ffffff,#f5f5fb_44%,#f3f4f8)]"
              : "bg-[radial-gradient(circle_at_50%_0%,rgba(230,37,255,0.12),transparent_34%),linear-gradient(180deg,#0b0b10,#101420_46%,#0b0b10)]",
          )}
        />
        <StartcoGalaxy className={cn("transition-opacity duration-500", isDayMode ? "opacity-20" : "opacity-90")} />
      </div>
      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-[32px] border px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] transition-[background-color,border-color,box-shadow] duration-500 sm:rounded-[36px] sm:px-10 sm:py-10",
            isDayMode
              ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,247,252,0.92))] shadow-[0_24px_64px_rgba(20,24,39,0.12)]"
              : "border-white/10 bg-[linear-gradient(180deg,rgba(20,22,34,0.72),rgba(11,11,16,0.64))]",
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500",
              isDayMode
                ? "bg-[linear-gradient(90deg,transparent,rgba(17,24,39,0.12),transparent)]"
                : "bg-[linear-gradient(90deg,transparent,rgba(230,37,255,0.4),transparent)]",
            )}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 transition-opacity duration-500",
              isDayMode
                ? "bg-[radial-gradient(circle_at_50%_0%,rgba(17,24,39,0.05),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.55),transparent_28%)]"
                : "bg-[radial-gradient(circle_at_50%_0%,rgba(230,37,255,0.1),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.08),transparent_26%)]",
            )}
          />

          <ThemeToggle isDayMode={isDayMode} onToggle={() => setIsDayMode((value) => !value)} />

          <ShareButton
            title="Contacto RiBuzz"
            text="Conecta con RiBuzz"
            url={`${SITE_CONFIG.url}/contacto`}
            iconOnly
            className={cn(
              "absolute right-4 top-4 z-20 inline-flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] active:scale-[0.97] sm:right-6 sm:top-6 sm:h-14 sm:w-14",
              isDayMode
                ? "border-[#111827]/14 bg-[#111827]/8 text-[#111827] hover:border-[#111827]/24 hover:bg-[#111827]/12 hover:[filter:drop-shadow(0_0_14px_rgba(17,24,39,0.16))]"
                : "border-white/14 bg-white/8 text-white hover:border-[#ffb7f8]/34 hover:bg-white/14 hover:text-[#ffd7fb] hover:[filter:drop-shadow(0_0_18px_rgba(230,37,255,0.54))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_30px_rgba(230,37,255,0.28)]",
            )}
          />

          <div className="relative flex flex-col items-center text-center">
            <div
              className={cn(
                "flex h-32 w-32 items-center justify-center rounded-full border shadow-[0_16px_32px_rgba(0,0,0,0.22)] transition-[background-color,border-color] duration-500 sm:h-36 sm:w-36",
                isDayMode
                  ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.04),rgba(17,24,39,0.01))]"
                  : "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
              )}
            >
              <Image
                src={SITE_CONFIG.logoMark}
                alt="Logo RiBuzz"
                width={112}
                height={112}
                className={cn(
                  "h-24 w-24 object-contain transition-[filter,opacity] duration-500 sm:h-28 sm:w-28",
                  isDayMode ? "brightness-0 saturate-100" : "",
                )}
                priority
              />
            </div>

            <h1
              className={cn(
                "mt-6 text-4xl font-normal tracking-tight sm:text-5xl [font-family:var(--font-zen-dots)] transition-colors duration-500",
                isDayMode ? "text-[#111827]" : "text-[#F5F7FA]",
              )}
            >
              RiBuzz
            </h1>

            <p
              className={cn(
                "mt-4 max-w-xl text-sm leading-relaxed transition-colors duration-500 sm:text-base",
                isDayMode ? "text-[#4B5563]" : "text-[#C7CBD6]",
              )}
            >
              Diseñamos soluciones comerciales, visuales y digitales para marcas que quieren
              crecer con más claridad, mejor presencia y herramientas útiles.
            </p>

            <div className="mt-5 flex items-center justify-center gap-5">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={cn(
                  "inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center transition-[transform,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] active:scale-[0.97]",
                  isDayMode
                    ? "text-[#111827] hover:text-[#FF4FD9] hover:[filter:drop-shadow(0_0_20px_rgba(255,79,217,0.36))]"
                    : "text-white hover:text-[#FF7AE6] hover:[filter:drop-shadow(0_0_18px_rgba(255,122,230,0.52))]",
                )}
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="instagram" />
                </div>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={cn(
                  "inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center transition-[transform,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] active:scale-[0.97]",
                  isDayMode
                    ? "text-[#111827] hover:text-[#25D366] hover:[filter:drop-shadow(0_0_20px_rgba(37,211,102,0.34))]"
                    : "text-white hover:text-[#6AFFB6] hover:[filter:drop-shadow(0_0_18px_rgba(106,255,182,0.5))]",
                )}
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="whatsapp" />
                </div>
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {primaryLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              const cardClassName = cn(
                "group relative overflow-hidden rounded-[24px] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]",
                isDayMode
                  ? "border-[#111827]/10 bg-white/90 hover:border-[#111827]/16 hover:bg-white hover:shadow-[0_18px_36px_rgba(17,24,39,0.08)]"
                  : "hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]",
                !isDayMode &&
                  (link.featured
                    ? "border-[#E625FF]/40 bg-[linear-gradient(180deg,rgba(32,22,40,0.96),rgba(20,18,30,0.98))] shadow-[0_0_0_1px_rgba(230,37,255,0.12),0_0_26px_rgba(230,37,255,0.18)] hover:border-[#ff8bf7]/52 hover:shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_32px_rgba(230,37,255,0.24)]"
                    : "border-white/10 bg-[#141724] hover:border-white/18"),
                isDayMode &&
                  (link.featured
                    ? "border-[#E625FF]/18 bg-[linear-gradient(180deg,rgba(255,240,251,0.96),rgba(255,255,255,0.98))] shadow-[0_10px_24px_rgba(230,37,255,0.08)] hover:border-[#E625FF]/28"
                    : ""),
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
                      <p className={cn("text-base font-semibold", isDayMode ? "text-[#111827]" : "text-[#F5F7FA]")}>
                        {link.title}
                      </p>
                      <p className={cn("mt-1 text-sm", isDayMode ? "text-[#6B7280]" : "text-[#98A0B3]")}>
                        {link.description}
                      </p>
                    </div>
                  </div>
                </>
              );

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

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            <Link href={supportCards.nfc.href} className="block h-full">
              <Card
                glowTone="purple"
                className={cn(
                  "group relative h-full min-h-[280px] overflow-hidden rounded-[28px] px-5 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] sm:px-6",
                  isDayMode
                    ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,248,252,0.98))] hover:border-[#111827]/16 hover:shadow-[0_18px_38px_rgba(17,24,39,0.08)]"
                    : "border-[#E625FF]/18 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(14,16,24,0.98))] hover:border-[#ff8bf7]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]",
                )}
              >
                <div className={cn("pointer-events-none absolute inset-0", isDayMode ? "bg-[radial-gradient(circle_at_80%_80%,rgba(17,24,39,0.04),transparent_34%)]" : "bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(230,37,255,0.08),transparent_34%)]")} />
                <div className="relative z-10 mx-auto max-w-[78%]">
                  <p className={cn("text-xl font-semibold tracking-tight", isDayMode ? "text-[#111827]" : "text-[#F5F7FA]")}>
                    {supportCards.nfc.title}
                  </p>
                  <p className={cn("mt-3 text-sm leading-relaxed sm:text-base", isDayMode ? "text-[#6B7280]" : "text-[#98A0B3]")}>
                    {supportCards.nfc.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-1/2 w-[72%] -translate-x-1/2 translate-y-[34%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[30%] md:w-[78%] md:translate-y-[24%]">
                  <Image
                    src="/startco-cards2.png"
                    alt="Mockup de tarjetas NFC RiBuzz"
                    width={700}
                    height={1000}
                    className={cn("h-auto w-full object-contain", isDayMode ? "drop-shadow-[0_0_18px_rgba(17,24,39,0.08)]" : "drop-shadow-[0_0_34px_rgba(230,37,255,0.24)]")}
                  />
                </div>
              </Card>
            </Link>

            <Card
              glowTone="cyan"
              className={cn(
                "group relative flex h-full min-h-[280px] flex-col rounded-[28px] px-6 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]",
                isDayMode
                  ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,248,252,0.98))] hover:border-[#111827]/16 hover:shadow-[0_18px_38px_rgba(17,24,39,0.08)]"
                  : "border-[#0FEFFD]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] hover:border-[#0FEFFD]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]",
              )}
            >
              <div className={cn("pointer-events-none absolute inset-0", isDayMode ? "bg-[radial-gradient(circle_at_80%_20%,rgba(17,24,39,0.05),transparent_26%)]" : "bg-[radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.12),transparent_26%)]")} />
              <div className="relative flex flex-1 flex-col items-center justify-between gap-6">
                <div>
                  <p className={cn("text-xl font-semibold tracking-tight", isDayMode ? "text-[#111827]" : "text-[#F5F7FA]")}>
                    {supportCards.neoMech.title}
                  </p>
                  <p className={cn("mt-3 text-sm leading-relaxed sm:text-base", isDayMode ? "text-[#6B7280]" : "text-[#98A0B3]")}>
                    {supportCards.neoMech.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="relative">
                    <div className={cn("absolute inset-0 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-100", isDayMode ? "bg-[#111827]/10" : "bg-[#0FEFFD]/20")} />
                    <Image
                      src="/neo-mech-logo.png"
                      alt="Logo Neo-Mech"
                      width={100}
                      height={100}
                      className="relative h-20 w-20 object-contain sm:h-24 sm:w-24"
                    />
                  </div>

                  <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                    <a
                      href={supportCards.neoMech.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold transition-colors",
                        isDayMode
                          ? "border border-[#25D366]/24 bg-[#25D366]/8 text-[#1E9E53] hover:bg-[#25D366]/12"
                          : "border border-[#25D366]/30 bg-[#25D366]/5 text-[#6AFFB6] hover:bg-[#25D366]/10",
                      )}
                    >
                      Contactar
                    </a>
                    <a
                      href={supportCards.neoMech.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold transition-colors",
                        isDayMode
                          ? "border border-[#111827]/10 bg-[#111827]/4 text-[#111827] hover:bg-[#111827]/8"
                          : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                      )}
                    >
                      Portafolio
                    </a>
                  </div>

                  <a
                    href={supportCards.neoMech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      isDayMode ? "text-[#0F172A]/60 hover:text-[#0F172A]" : "text-[#9BF8FF]/70 hover:text-[#9BF8FF]",
                    )}
                  >
                    <span>Ver Instagram</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <Link href={SITE_CONFIG.giftsPath} className="relative mx-auto mt-4 block max-w-xl">
            <Card
              glowTone="cyan"
              className={cn(
                "rounded-[26px] border-dashed px-6 py-6 text-center md:min-h-[132px]",
                isDayMode
                  ? "border-[#111827]/10 bg-[#ffffff]/90"
                  : "border-white/10 bg-[#10131C]/72",
              )}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className={cn("text-base font-semibold", isDayMode ? "text-[#111827]" : "text-[#F5F7FA]")}>
                  {supportCards.gifts.title}
                </p>
                <span className="rounded-full border border-[#ff4d6d]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF9EB0]">
                  Ver regalos
                </span>
              </div>
              <p className={cn("mt-3 text-sm leading-relaxed", isDayMode ? "text-[#6B7280]" : "text-[#98A0B3]")}>
                {supportCards.gifts.description}
              </p>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}
