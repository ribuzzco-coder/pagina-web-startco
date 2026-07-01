"use client";

import Image from "next/image";
import { useState } from "react";

const PAGE_URL = "https://ribuzz.com/kristinamorales";
const phoneDisplay = "+57 311 319 2410";
const phoneRaw = "573113192410";
const email = "kristimove@gmail.com";
const instagramLabel = "@kristimove";
const instagramHref = "https://www.instagram.com/kristimove/";

const contactItems = [
  {
    title: phoneDisplay,
    subtitle: "WhatsApp",
    href: `https://wa.me/${phoneRaw}`,
    icon: "phone",
  },
  {
    title: email,
    subtitle: "Correo",
    href: `mailto:${email}`,
    icon: "mail",
  },
  {
    title: instagramLabel,
    subtitle: "Instagram",
    href: instagramHref,
    icon: "instagram",
  },
] as const;

function Icon({
  name,
}: {
  name: (typeof contactItems)[number]["icon"] | "addContact" | "share";
}) {
  const commonProps = {
    className: "h-5 w-5 shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.61 2.64a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.44-1.27a2 2 0 0 1 2.11-.45c.85.28 1.74.49 2.64.61A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m5 7 7 5 7-5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M16.8 7.2h.01" />
        </svg>
      );
    case "addContact":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
    case "share":
      return (
        <svg {...commonProps}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.6 10.5 6.8-4" />
          <path d="m8.6 13.5 6.8 4" />
        </svg>
      );
    default:
      return null;
  }
}

function buildVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Kristina Morales",
    "TITLE:Agente de viajes",
    "ORG:COMVIAJES",
    `TEL;TYPE=CELL:+${phoneRaw}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    `URL;TYPE=INSTAGRAM:${instagramHref}`,
    "END:VCARD",
  ].join("\n");
}

export default function KristinaMoralesClient() {
  const [copied, setCopied] = useState(false);

  const handleAddContact = () => {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = "kristina-morales.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Kristina Morales",
          text: "Conoce la tarjeta digital Comviajes de Kristina Morales",
          url: PAGE_URL,
        });
        return;
      }

      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop
    }
  };

  return (
    <main className="-mt-[76px] min-h-[100dvh] overflow-hidden bg-[#052f51] text-white">
      <section className="flex min-h-[100dvh] items-start justify-center px-4 pb-6 pt-8 sm:items-center sm:py-12">
        <article className="grid w-full max-w-[24rem] gap-4">
          <div className="relative min-h-[37.5rem] overflow-hidden rounded-[1.15rem] bg-[#07385f] px-8 pb-10 pt-8 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(10,29,52,0.38),transparent_34%),linear-gradient(145deg,#07426c_0%,#052d4e_50%,#071d36_100%)]" />
            <svg
              className="absolute inset-x-0 bottom-0 h-28 w-full"
              viewBox="0 0 384 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 82C92 43 218 36 384 56V120H0V82Z"
                fill="#c87b24"
              />
              <path
                d="M0 100C102 68 236 62 384 78V120H0V100Z"
                fill="#8bd9d2"
              />
            </svg>

            <div className="relative z-10 grid justify-items-center text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-white p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                  <Image
                    src="/images/kristina/photo.png"
                    alt="Kristina Morales"
                    fill
                    sizes="8rem"
                    priority
                    className="object-cover [object-position:center_18%]"
                  />
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-white/34" />

              <h1 className="mt-2 font-[var(--font-montserrat)] text-[1.55rem] font-black leading-none tracking-normal">
                Kristina Morales
              </h1>
              <p className="mt-1 font-[var(--font-montserrat)] text-sm font-medium text-[#8bd9d2]">
                Agente de viajes
              </p>

              <div className="mt-4 h-px w-full border-t border-dashed border-white/35" />

              <div className="flex min-h-36 w-full flex-col items-center justify-center pb-1 pt-2">
                <div className="flex w-full justify-center">
                  <Image
                    src="/images/kristina/comviajes-logo.png"
                    alt="COMVIAJES - Compania de Viajes Mayorista"
                    width={266}
                    height={125}
                    className="h-auto w-56"
                    priority
                  />
                </div>
                <p className="-mt-2 font-[var(--font-montserrat)] text-[0.69rem] font-semibold leading-tight text-white/84">
                  NIT 901300294-4
                  <br />
                  RNT 81199
                </p>
              </div>

              <div className="mb-4 h-px w-full border-t border-dashed border-white/35" />

              <div className="grid w-full gap-2 font-[var(--font-montserrat)] text-sm font-black leading-tight">
                <a
                  href={`https://wa.me/${phoneRaw}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.7rem] border border-white/18 bg-white/10 px-3 text-white shadow-[0_10px_22px_rgba(0,0,0,0.1)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="phone" />
                  <span className="[overflow-wrap:anywhere]">{phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.7rem] border border-white/18 bg-white/10 px-3 text-white shadow-[0_10px_22px_rgba(0,0,0,0.1)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/16"
                >
                  <Icon name="mail" />
                  <span className="[overflow-wrap:anywhere]">{email}</span>
                </a>
                <a
                  href={instagramHref}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.7rem] border border-white/18 bg-white/10 px-3 text-white shadow-[0_10px_22px_rgba(0,0,0,0.1)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="instagram" />
                  <span className="[overflow-wrap:anywhere]">{instagramLabel}</span>
                </a>
              </div>

              <div className="mt-7 h-14 w-full" aria-hidden="true" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[0.8rem] bg-[#c87b24] px-3 font-[var(--font-montserrat)] text-sm font-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
              onClick={handleAddContact}
            >
              <Icon name="addContact" />
              <span>Agregar</span>
            </button>

            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[0.8rem] bg-[#8bd9d2] px-3 font-[var(--font-montserrat)] text-sm font-black text-[#052f51] shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5"
              onClick={handleShare}
            >
              <Icon name="share" />
              <span>{copied ? "Copiado" : "Compartir"}</span>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
