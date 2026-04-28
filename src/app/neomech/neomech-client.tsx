"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ShareButton } from "@/components/ui/share-button";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { cn } from "@/lib/utils";

const primaryLinks = [
  {
    title: "Producto principal",
    description: "Espacio base para conectar la propuesta principal de Neo-Mech",
    href: "#",
    accent: "from-[#0FEFFD]/20 via-[#0FEFFD]/10 to-transparent",
    glowTone: "cyan",
    featured: true,
  },
  {
    title: "Agenda reunión",
    description: "Bloque listo para un CTA directo o una llamada comercial",
    href: "#",
    accent: "from-[#0FEFFD]/18 via-[#8DDCFF]/8 to-transparent",
    glowTone: "cyan",
    featured: false,
  },
  {
    title: "Crea tu landing",
    description: "Plantilla para conectar una experiencia o desarrollo especial",
    href: "/landings",
    accent: "from-[#FFB347]/24 via-[#FF7A18]/14 to-transparent",
    glowTone: "pink",
    featured: false,
  },
] as const;

const supportCards = {
  models: {
    title: "Modelos / soluciones",
    description: "Espacio visual para productos, demos o líneas de fabricación.",
  },
  showcase: {
    title: "Bloque destacado",
    description:
      "Zona reservada para una solución especial, un partner o una pieza protagonista.",
    ctaPrimary: "Contactar",
    ctaSecondary: "Ver portafolio",
  },
  resources: {
    title: "Recursos / documentos",
    description:
      "Sección base para materiales, catálogos o documentos de valor descargables.",
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
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z" />
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

export default function NeoMechClient() {
  const [isDayMode, setIsDayMode] = useState(false);

  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen">
      <div className="fixed inset-0 z-0">
        <div
          className={cn(
            "absolute inset-0 transition-[background,opacity] duration-500",
            isDayMode
              ? "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_26%),linear-gradient(180deg,#ffffff,#f5f5fb_44%,#f3f4f8)]"
              : "bg-[radial-gradient(circle_at_50%_0%,rgba(15,239,253,0.12),transparent_34%),linear-gradient(180deg,#090b10,#0f1720_46%,#090b10)]",
          )}
        />
        <StartcoGalaxy
          className={cn(
            "transition-opacity duration-500",
            isDayMode ? "opacity-20" : "opacity-90",
          )}
        />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-[32px] border px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] transition-[background-color,border-color,box-shadow] duration-500 sm:rounded-[36px] sm:px-10 sm:py-10",
            isDayMode
              ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,247,252,0.92))] shadow-[0_24px_64px_rgba(20,24,39,0.12)]"
              : "border-white/10 bg-[linear-gradient(180deg,rgba(16,22,30,0.76),rgba(8,12,18,0.66))]",
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500",
              isDayMode
                ? "bg-[linear-gradient(90deg,transparent,rgba(17,24,39,0.12),transparent)]"
                : "bg-[linear-gradient(90deg,transparent,rgba(15,239,253,0.4),transparent)]",
            )}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 transition-opacity duration-500",
              isDayMode
                ? "bg-[radial-gradient(circle_at_50%_0%,rgba(17,24,39,0.05),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.55),transparent_28%)]"
                : "bg-[radial-gradient(circle_at_50%_0%,rgba(15,239,253,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(132,255,255,0.08),transparent_26%)]",
            )}
          />

          <ThemeToggle
            isDayMode={isDayMode}
            onToggle={() => setIsDayMode((value) => !value)}
          />

          <ShareButton
            title="Neo-Mech"
            text="Explora la landing de Neo-Mech"
            url="https://ribuzz.com/neomech"
            iconOnly
            className={cn(
              "absolute right-4 top-4 z-20 inline-flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] active:scale-[0.97] sm:right-6 sm:top-6 sm:h-14 sm:w-14",
              isDayMode
                ? "border-[#111827]/14 bg-[#111827]/8 text-[#111827] hover:border-[#111827]/24 hover:bg-[#111827]/12 hover:[filter:drop-shadow(0_0_14px_rgba(17,24,39,0.16))]"
                : "border-white/14 bg-white/8 text-white hover:border-[#9BF8FF]/34 hover:bg-white/14 hover:text-[#E5FFFF] hover:[filter:drop-shadow(0_0_18px_rgba(155,248,255,0.54))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_30px_rgba(15,239,253,0.18)]",
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
                src="/neo-mech-logo.png"
                alt="Logo Neo-Mech"
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
                "mt-6 text-4xl font-semibold tracking-tight sm:text-5xl transition-colors duration-500",
                isDayMode
                  ? "text-[#111827] [font-family:var(--font-space-grotesk)]"
                  : "text-[#F5F7FA] [font-family:var(--font-space-grotesk)]",
              )}
            >
              Neo-Mech
            </h1>

            <p
              className={cn(
                "mt-4 max-w-xl text-sm leading-relaxed transition-colors duration-500 sm:text-base",
                isDayMode ? "text-[#4B5563]" : "text-[#C7CBD6]",
              )}
            >
              Plantilla base para una landing de tecnología, fabricación y soluciones
              visuales, lista para personalizar bloque por bloque.
            </p>

            <div className="mt-5 flex items-center justify-center gap-5">
              <button
                type="button"
                aria-label="Instagram"
                className={cn(
                  "inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-[transform,color,filter,border-color,background-color,box-shadow] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] active:scale-[0.97]",
                  isDayMode
                    ? "border-[#111827]/10 bg-[#111827]/6 text-[#111827] hover:border-[#7ce9ff]/24 hover:bg-[#111827]/8 hover:text-[#00b5d9] hover:[filter:drop-shadow(0_0_20px_rgba(0,181,217,0.28))]"
                    : "border-white/12 bg-white/6 text-white hover:border-[#7CE9FF]/28 hover:bg-white/10 hover:text-[#A9F5FF] hover:[filter:drop-shadow(0_0_18px_rgba(124,233,255,0.5))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_20px_rgba(124,233,255,0.12)]",
                )}
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="instagram" />
                </div>
              </button>
              <button
                type="button"
                aria-label="WhatsApp"
                className={cn(
                  "inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-[transform,color,filter,border-color,background-color,box-shadow] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] active:scale-[0.97]",
                  isDayMode
                    ? "border-[#111827]/10 bg-[#111827]/6 text-[#111827] hover:border-[#25D366]/24 hover:bg-[#111827]/8 hover:text-[#25D366] hover:[filter:drop-shadow(0_0_20px_rgba(37,211,102,0.34))]"
                    : "border-white/12 bg-white/6 text-white hover:border-[#6AFFB6]/28 hover:bg-white/10 hover:text-[#6AFFB6] hover:[filter:drop-shadow(0_0_18px_rgba(106,255,182,0.5))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_20px_rgba(106,255,182,0.12)]",
                )}
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="whatsapp" />
                </div>
              </button>
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
                    ? "border-[#0FEFFD]/34 bg-[linear-gradient(180deg,rgba(16,34,42,0.96),rgba(14,20,28,0.98))] shadow-[0_0_0_1px_rgba(15,239,253,0.12),0_0_26px_rgba(15,239,253,0.14)] hover:border-[#8DF7FF]/48 hover:shadow-[0_0_0_1px_rgba(15,239,253,0.18),0_0_32px_rgba(15,239,253,0.2)]"
                    : link.title === "Crea tu landing"
                      ? "border-[#FF9A3D]/28 bg-[linear-gradient(180deg,rgba(38,24,16,0.96),rgba(24,18,15,0.98))] shadow-[0_0_0_1px_rgba(255,154,61,0.08),0_0_24px_rgba(255,122,24,0.14)] hover:border-[#FFB866]/42 hover:shadow-[0_0_0_1px_rgba(255,154,61,0.14),0_0_30px_rgba(255,122,24,0.2)]"
                      : "border-white/10 bg-[#141724] hover:border-white/18"),
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
                      <p className="mt-1 text-sm text-[#C9D1E2]">{link.description}</p>
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
            <Card
              glowTone="cyan"
              className={cn(
                "group relative h-full min-h-[280px] overflow-hidden rounded-[28px] px-5 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] sm:px-6",
                isDayMode
                  ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,248,252,0.98))] hover:border-[#111827]/16 hover:shadow-[0_18px_38px_rgba(17,24,39,0.08)]"
                  : "border-[#0FEFFD]/18 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(14,16,24,0.98))] hover:border-[#8DF7FF]/32 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]",
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0",
                  isDayMode
                    ? "bg-[radial-gradient(circle_at_80%_80%,rgba(17,24,39,0.04),transparent_34%)]"
                    : "bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(15,239,253,0.08),transparent_34%)]",
                )}
              />
              <div className="relative z-10 mx-auto max-w-[78%]">
                <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {supportCards.models.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#C9D1E2] sm:text-base">
                  {supportCards.models.description}
                </p>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-1/2 w-[72%] -translate-x-1/2 translate-y-[34%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[30%] md:w-[78%] md:translate-y-[24%]">
                <Image
                  src="/startco-cards2.png"
                  alt="Mockup base de Neo-Mech"
                  width={700}
                  height={1000}
                  className={cn(
                    "h-auto w-full object-contain",
                    isDayMode
                      ? "drop-shadow-[0_0_18px_rgba(17,24,39,0.08)]"
                      : "drop-shadow-[0_0_34px_rgba(15,239,253,0.16)]",
                  )}
                />
              </div>
            </Card>

            <Card
              glowTone="cyan"
              className={cn(
                "group relative flex h-full min-h-[280px] flex-col rounded-[28px] px-6 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]",
                isDayMode
                  ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,248,252,0.98))] hover:border-[#111827]/16 hover:shadow-[0_18px_38px_rgba(17,24,39,0.08)]"
                  : "border-[#0FEFFD]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] hover:border-[#0FEFFD]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]",
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0",
                  isDayMode
                    ? "bg-[radial-gradient(circle_at_80%_20%,rgba(17,24,39,0.05),transparent_26%)]"
                    : "bg-[radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.12),transparent_26%)]",
                )}
              />
              <div className="relative flex flex-1 flex-col items-center justify-between gap-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {supportCards.showcase.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#C9D1E2] sm:text-base">
                    {supportCards.showcase.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="relative">
                    <div
                      className={cn(
                        "absolute inset-0 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-100",
                        isDayMode ? "bg-[#111827]/10" : "bg-[#0FEFFD]/20",
                      )}
                    />
                    <Image
                      src="/neo-mech-logo.png"
                      alt="Logo Neo-Mech"
                      width={100}
                      height={100}
                      className="relative h-20 w-20 object-contain sm:h-24 sm:w-24"
                    />
                  </div>

                  <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold transition-colors",
                        isDayMode
                          ? "border border-[#0FEFFD]/18 bg-[#0FEFFD]/8 text-[#0E7490] hover:bg-[#0FEFFD]/12"
                          : "border border-[#0FEFFD]/30 bg-[#0FEFFD]/5 text-[#A9F5FF] hover:bg-[#0FEFFD]/10",
                      )}
                    >
                      {supportCards.showcase.ctaPrimary}
                    </button>
                    <button
                      type="button"
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold transition-colors",
                        isDayMode
                          ? "border border-[#111827]/10 bg-[#111827]/16 text-white hover:bg-[#111827]/22"
                          : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                      )}
                    >
                      {supportCards.showcase.ctaSecondary}
                    </button>
                  </div>

                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      isDayMode
                        ? "text-[#4B5563] hover:text-[#111827]"
                        : "text-[#9BF8FF]/70 hover:text-[#9BF8FF]",
                    )}
                  >
                    <span>Bloque editable</span>
                  </button>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative mx-auto mt-4 block max-w-xl">
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
                <p className="text-base font-semibold text-[#F5F7FA]">
                  {supportCards.resources.title}
                </p>
                <span className="rounded-full border border-[#ff4d6d]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF9EB0]">
                  Próximamente
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#C9D1E2]">
                {supportCards.resources.description}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
