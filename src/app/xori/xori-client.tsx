"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ShareButton } from "@/components/ui/share-button";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { SITE_CONFIG } from "@/lib/site-config";

const primaryLinks = [
  {
    title: "Xori Space",
    description: "Plataforma principal y universo de marca.",
    href: "https://xori.space/",
    accent: "from-white/14 via-white/5 to-transparent",
    glowTone: "purple",
    featured: true,
  },
  {
    title: "Xori Space | Astros",
    description: "Ruta para Astropreneurs dentro del ecosistema.",
    href: "https://xori.space/edtech-space-academy#astropreneurs",
    accent: "from-white/12 via-white/4 to-transparent",
    glowTone: "purple",
    featured: false,
  },
  {
    title: "Xtelar Space",
    description: "Proyecto conectado al universo Xori.",
    href: "https://xtelar.space/",
    accent: "from-white/12 via-white/4 to-transparent",
    glowTone: "purple",
    featured: false,
  },
  {
    title: "Agiltech",
    description: "Enlace directo a la línea tecnológica aliada.",
    href: "https://agiltech.tech/",
    accent: "from-white/12 via-white/4 to-transparent",
    glowTone: "purple",
    featured: false,
  },
] as const;

const contacts = [
  {
    name: "WhatsApp",
    href: "https://wa.me/573012499710",
    glow: "hover:text-white hover:[filter:drop-shadow(0_0_20px_rgba(255,255,255,0.28))]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.56 0 .27 5.28.27 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.52-1.71a11.78 11.78 0 0 0 5.54 1.41h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.22-6.1-3.34-8.43Zm-8.46 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.87 1.01 1.04-3.77-.23-.39a9.8 9.8 0 0 1-1.5-5.15c0-5.43 4.42-9.85 9.87-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.84 9.89Z" />
        <path d="M17.56 14.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.46a8.93 8.93 0 0 1-1.66-2.06c-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/duvansequeira/",
    glow: "hover:text-white hover:[filter:drop-shadow(0_0_20px_rgba(255,255,255,0.28))]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.09.87 1.97 1.95 1.97h.02a1.97 1.97 0 1 0 0-3.94ZM20.72 13.1c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.64c.04.92 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.67.12-.91.27-.67.88-1.36 1.9-1.36 1.34 0 1.87 1.02 1.87 2.52V20H20.3l.42-6.9Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/duv.space/",
    glow: "hover:text-white hover:[filter:drop-shadow(0_0_20px_rgba(255,255,255,0.28))]",
    icon: (
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
    ),
  },
  {
    name: "Email",
    href: "mailto:duv@xori.space",
    glow: "hover:text-white hover:[filter:drop-shadow(0_0_20px_rgba(255,255,255,0.28))]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m5 7 7 5 7-5" />
      </svg>
    ),
  },
] as const;

export default function XoriClient() {
  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,#050608,#0A0C10_40%,#040506)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_34%)]" />
        <StartcoGalaxy className="opacity-40" />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div className="relative w-full overflow-hidden rounded-[34px] border border-white/12 bg-[linear-gradient(180deg,rgba(18,19,24,0.82),rgba(7,8,11,0.74))] px-5 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.42)] backdrop-blur-[16px] sm:rounded-[38px] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_22%)]" />

          <ShareButton
            title="Xori"
            text="Explora la landing de Xori"
            url={`${SITE_CONFIG.url}/xori`}
            iconOnly
            className="absolute right-4 top-4 z-20 inline-flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full border border-white/14 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:border-white/28 hover:bg-white/14 hover:text-white hover:[filter:drop-shadow(0_0_18px_rgba(255,255,255,0.24))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.12)] active:scale-[0.97] sm:right-6 sm:top-6 sm:h-14 sm:w-14"
          />

          <div className="relative flex flex-col items-center text-center">
            <div className="group [perspective:1400px]">
              <div className="relative h-32 w-32 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:h-36 sm:w-36">
                <div className="absolute inset-0 overflow-hidden rounded-full border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_16px_32px_rgba(0,0,0,0.28)] [backface-visibility:hidden]">
                  <Image
                    src="/images/xori-photo.jpeg"
                    alt="Retrato de Xori"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-full border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.03))] text-white shadow-[0_16px_32px_rgba(0,0,0,0.28)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="text-5xl font-semibold tracking-[0.02em] [font-family:var(--font-space-grotesk)] sm:text-6xl">
                    X
                  </span>
                </div>
              </div>
            </div>

            <h1 className="mt-6 text-[2.9rem] font-semibold uppercase tracking-[-0.06em] text-[#F8F9FB] sm:text-[4.35rem] [font-family:var(--font-space-grotesk)]">
              XORI SPACE
            </h1>

            <p className="mt-2 text-base font-medium uppercase tracking-[0.08em] text-[#C9CFD9] [font-family:var(--font-space-grotesk)]">
              Duvan Sequera
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={contact.name}
                  className={`inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white transition-[transform,color,filter,border-color,background-color,box-shadow] duration-300 hover:-translate-y-[1px] hover:scale-[1.05] hover:border-white/22 hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_20px_rgba(255,255,255,0.08)] active:scale-[0.97] ${contact.glow}`}
                >
                  <div className="scale-[1.18]">{contact.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {primaryLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  glowTone={link.glowTone}
                  interactiveGlow={false}
                  className={
                    link.featured
                      ? "group relative overflow-hidden rounded-[24px] border border-white/16 bg-[linear-gradient(180deg,rgba(28,31,38,0.98),rgba(18,19,24,0.98))] px-5 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_28px_rgba(255,255,255,0.05)] transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-white/28 hover:bg-[#171B22] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_34px_rgba(255,255,255,0.08)]"
                      : "group relative overflow-hidden rounded-[24px] border border-white/12 bg-[#101218] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-white/20 hover:bg-[#141821] hover:shadow-[0_18px_36px_rgba(0,0,0,0.28)]"
                  }
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${link.accent}`}
                  />
                  <div className="relative flex min-h-[62px] items-center justify-center text-center">
                    <div className="relative z-10 min-w-0">
                      <p className="text-base font-semibold text-[#F5F7FA] [font-family:var(--font-space-grotesk)] sm:text-[1.03rem]">
                        {link.title}
                      </p>
                      <p className="mt-1 text-sm text-[#9EA7B4] [font-family:var(--font-space-grotesk)]">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
