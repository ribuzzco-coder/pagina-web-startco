"use client";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ShareButton } from "@/components/ui/share-button";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { SITE_CONFIG } from "@/lib/site-config";

const primaryLinks = [
  {
    title: "Acceso principal",
    description: "Espacio base para el llamado a la acción principal",
    accent: "from-[#0FEFFD]/20 via-[#0FEFFD]/10 to-transparent",
    glowTone: "purple",
    featured: true,
  },
  {
    title: "Sitio web",
    description: "Botón secundario listo para conectar la página oficial",
    accent: "from-[#B16EFF]/18 via-[#E625FF]/8 to-transparent",
    glowTone: "cyan",
    featured: false,
  },
  {
    title: "Agenda / CTA",
    description: "Bloque base para una acción comercial directa",
    accent: "from-[#0FEFFD]/22 via-[#E625FF]/14 to-transparent",
    glowTone: "purple",
    featured: false,
  },
] as const;

const supportCards = {
  access: {
    title: "Tarjetas / accesos",
    description: "Espacio visual para productos, herramientas o accesos rápidos.",
  },
  feature: {
    title: "Bloque destacado",
    description: "Zona reservada para una marca aliada, un servicio o una propuesta especial.",
  },
  resources: {
    title: "Recursos / documentos",
    description: "Sección base para materiales de valor, regalos o documentos descargables.",
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

export default function XoriClient() {
  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,37,255,0.12),transparent_34%),linear-gradient(180deg,#0b0b10,#101420_46%,#0b0b10)]" />
        <StartcoGalaxy className="opacity-90" />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,34,0.72),rgba(11,11,16,0.64))] px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:rounded-[36px] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(230,37,255,0.4),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,37,255,0.1),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.08),transparent_26%)]" />

          <ShareButton
            title="Xori"
            text="Explora la landing de Xori"
            url={`${SITE_CONFIG.url}/xori`}
            iconOnly
            className="absolute right-4 top-4 z-20 inline-flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full border border-white/14 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:border-[#ffb7f8]/34 hover:bg-white/14 hover:text-[#ffd7fb] hover:[filter:drop-shadow(0_0_18px_rgba(230,37,255,0.54))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_30px_rgba(230,37,255,0.28)] active:scale-[0.97] sm:right-6 sm:top-6 sm:h-14 sm:w-14"
          />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_16px_32px_rgba(0,0,0,0.22)] sm:h-36 sm:w-36">
              <span className="text-5xl font-normal tracking-[0.08em] text-white [font-family:var(--font-zen-dots)] sm:text-6xl">
                X
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-normal tracking-tight text-[#F5F7FA] sm:text-5xl [font-family:var(--font-zen-dots)]">
              Xori
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
              Base visual lista para personalizar, conectar botones y construir una experiencia
              propia con la misma estructura ágil de contacto.
            </p>

            <div className="mt-5 flex items-center justify-center gap-5">
              <button
                type="button"
                aria-label="Instagram"
                className="inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center text-white transition-[transform,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:text-[#FF7AE6] hover:[filter:drop-shadow(0_0_18px_rgba(255,122,230,0.52))] active:scale-[0.97]"
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="instagram" />
                </div>
              </button>
              <button
                type="button"
                aria-label="WhatsApp"
                className="inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center text-white transition-[transform,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:text-[#6AFFB6] hover:[filter:drop-shadow(0_0_18px_rgba(106,255,182,0.5))] active:scale-[0.97]"
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="whatsapp" />
                </div>
              </button>
            </div>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {primaryLinks.map((link) => (
              <button key={link.title} type="button" className="block text-left">
                <Card
                  glowTone={link.glowTone}
                  className={
                    link.featured
                      ? "group relative overflow-hidden rounded-[24px] border border-[#E625FF]/40 bg-[linear-gradient(180deg,rgba(32,22,40,0.96),rgba(20,18,30,0.98))] px-5 py-5 text-center shadow-[0_0_0_1px_rgba(230,37,255,0.12),0_0_26px_rgba(230,37,255,0.18)] transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#ff8bf7]/52 hover:bg-[#171B2A] hover:shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_32px_rgba(230,37,255,0.24)]"
                      : "group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#141724] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-white/18 hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]"
                  }
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${link.accent}`}
                  />
                  <div className="relative flex min-h-[58px] items-center justify-center text-center">
                    <div className="relative z-10 min-w-0">
                      <p className="text-base font-semibold text-[#F5F7FA]">{link.title}</p>
                      <p className="mt-1 text-sm text-[#98A0B3]">{link.description}</p>
                    </div>
                  </div>
                </Card>
              </button>
            ))}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            <div className="block h-full">
              <Card
                glowTone="purple"
                className="group relative h-full min-h-[280px] overflow-hidden rounded-[28px] border border-[#E625FF]/18 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(14,16,24,0.98))] px-5 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#ff8bf7]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)] sm:px-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(230,37,255,0.08),transparent_34%)]" />
                <div className="relative z-10 mx-auto max-w-[78%]">
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {supportCards.access.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {supportCards.access.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-1/2 w-[72%] -translate-x-1/2 translate-y-[34%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[30%] md:w-[78%] md:translate-y-[24%]">
                  <img
                    src="/startco-cards2.png"
                    alt="Mockup base para tarjetas y accesos"
                    className="h-auto w-full object-contain drop-shadow-[0_0_34px_rgba(230,37,255,0.24)]"
                  />
                </div>
              </Card>
            </div>

            <Card
              glowTone="cyan"
              className="group relative flex h-full min-h-[280px] flex-col rounded-[28px] border border-[#0FEFFD]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] px-6 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#0FEFFD]/36 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,239,253,0.12),transparent_26%)]" />
              <div className="relative flex flex-1 flex-col items-center justify-between gap-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {supportCards.feature.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {supportCards.feature.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <div className="absolute inset-0 rounded-full bg-[#0FEFFD]/20 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative text-2xl font-semibold tracking-[0.14em] text-[#9BF8FF]">
                      XO
                    </span>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/5 px-4 py-2 text-[12px] font-semibold text-[#6AFFB6] transition-colors hover:bg-[#25D366]/10"
                    >
                      CTA 01
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      CTA 02
                    </button>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9BF8FF]/70 transition-colors hover:text-[#9BF8FF]"
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
              className="rounded-[26px] border border-white/10 border-dashed bg-[#10131C]/72 px-6 py-6 text-center md:min-h-[132px]"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-base font-semibold text-[#F5F7FA]">
                  {supportCards.resources.title}
                </p>
                <span className="rounded-full border border-[#ff4d6d]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF9EB0]">
                  Próximamente
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                {supportCards.resources.description}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
