"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ShareButton } from "@/components/ui/share-button";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { cn } from "@/lib/utils";

const primaryLinks = [
  {
    title: "Escríbenos por WhatsApp",
    description: "Conecta rápido con Neo-Mech para cotizar, explorar ideas o pedir guía.",
    href: "https://wa.link/bbdjin",
    accent: "from-[#67F1FF]/24 via-[#67F1FF]/12 to-transparent",
    glowTone: "cyan",
    featured: true,
  },
  {
    title: "Ver portafolio",
    description: "Abre el catálogo y conoce piezas, procesos y trabajos realizados.",
    href: "https://drive.google.com/file/d/1pJjucqtEM1P7hCWs0YnBBGIqUDmmeGhP/view?usp=sharing",
    accent: "from-white/16 via-white/8 to-transparent",
    glowTone: "cyan",
    featured: false,
  },
] as const;

const detailCards = [
  {
    title: "Qué resolvemos",
    items: [
      "¿Tu producto no destaca? Creamos piezas que llaman la atención y generan recordación.",
      "¿Tienes una idea pero no sabes cómo hacerla real? La diseñamos, validamos y producimos.",
      "¿Necesitas algo que no existe en el mercado? Lo fabricamos a medida.",
    ],
  },
  {
    title: "Cómo trabajamos",
    items: [
      "Entendemos tu idea",
      "Diseñamos en CAD",
      "Prototipamos",
      "Producimos",
    ],
    withToolIcon: true,
  },
] as const;

const caseStudies = [
  {
    title: "Caso de éxito 01",
    label: "Exhibición para joyería",
    image: "/images/neomech-case-1.png",
    challenge: "La joyería tenía problemas de organización en su vitrina.",
    solution:
      "Diseñamos estructuras personalizadas para organizar y destacar cada producto.",
    process: "Diseño → Prototipo → Producción",
    results: [
      "Mayor percepción de valor del producto",
      "Mejor organización visual",
      "Mejor experiencia del cliente",
    ],
    closing: "",
  },
  {
    title: "Caso de éxito 02",
    label: "Experiencia física + conexión digital",
    image: "/images/neomech-case-2.png",
    challenge:
      "Las marcas regalan muestras, pero no logran mantener el contacto con el cliente.",
    solution:
      "Diseñamos un producto que combina experiencia física y conexión digital: mini perfume (decant 3ml), diseño tipo llavero con identidad de marca, charms personalizados y tarjeta con tecnología NFC integrada.",
    process: "Diseño → Prototipo → Producción",
    results: [
      "Genera recordación de marca",
      "Aumenta la interacción con clientes",
      "Convierte tráfico físico en digital",
    ],
    closing:
      "El cliente prueba el producto, escanea el NFC y queda conectado directamente con la marca.",
  },
] as const;

function SocialIcon({ name }: { name: "instagram" | "whatsapp" | "email" }) {
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

  if (name === "email") {
    return (
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
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.56 0 .27 5.28.27 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.52-1.71a11.78 11.78 0 0 0 5.54 1.41h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.22-6.1-3.34-8.43Zm-8.46 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.87 1.01 1.04-3.77-.23-.39a9.8 9.8 0 0 1-1.5-5.15c0-5.43 4.42-9.85 9.87-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.84 9.89Z" />
      <path d="M17.56 14.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.46a8.93 8.93 0 0 1-1.66-2.06c-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4.5 4.5 0 0 0 5.98 5.98l-9.12 9.12a2.12 2.12 0 1 1-3-3l9.14-9.1Z" />
      <path d="m15.7 7.4.9-.9" />
      <path d="m6.8 16.3-.9.9" />
    </svg>
  );
}

export default function NeoMechClient() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedCaseIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCaseIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCaseIndex]);

  const selectedCase =
    selectedCaseIndex === null ? null : (caseStudies[selectedCaseIndex] ?? null);

  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(102,241,255,0.14),transparent_30%),linear-gradient(180deg,#05070b,#0b1017_44%,#05070b)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(103,241,255,0.08),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(103,241,255,0.08),transparent_28%)]" />
        <StartcoGalaxy className="opacity-75 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.94),rgba(0,0,0,0.72))]" />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-4xl flex-col items-center justify-center py-20 sm:py-28">
        <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,26,0.8),rgba(8,11,18,0.7))] px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[14px] sm:rounded-[36px] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,241,255,0.4),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,241,255,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_22%)]" />

          <ShareButton
            title="Neo-Mech"
            text="Explora la landing de Neo-Mech"
            url="https://ribuzz.com/neomech"
            iconOnly
            className="absolute right-4 top-4 z-20 inline-flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full border border-white/14 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:border-[#67F1FF]/34 hover:bg-white/12 hover:text-[#DFFFFF] hover:[filter:drop-shadow(0_0_18px_rgba(103,241,255,0.42))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_30px_rgba(103,241,255,0.16)] active:scale-[0.97] sm:right-6 sm:top-6 sm:h-14 sm:w-14"
          />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_16px_32px_rgba(0,0,0,0.22)] sm:h-36 sm:w-36">
              <Image
                src="/neo-mech-logo.png"
                alt="Logo Neo-Mech"
                width={112}
                height={112}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                priority
              />
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#F5F7FA] [font-family:var(--font-space-grotesk)] sm:text-5xl">
              Neo-Mech
            </h1>

            <p className="mt-4 max-w-xl text-[1.02rem] font-medium leading-relaxed text-[#D6DFEA] sm:text-[1.12rem]">
              Transformamos ideas en productos físicos que hacen crecer tu marca
            </p>

            <div className="mt-5 flex items-center justify-center gap-5">
              <a
                href="https://www.instagram.com/neomech3d/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full border border-white/12 bg-white/6 text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-[transform,color,filter,border-color,background-color,box-shadow] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:border-[#7CE9FF]/28 hover:bg-white/10 hover:text-[#A9F5FF] hover:[filter:drop-shadow(0_0_18px_rgba(124,233,255,0.5))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_20px_rgba(124,233,255,0.12)] active:scale-[0.97]"
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="instagram" />
                </div>
              </a>
              <a
                href="https://wa.link/bbdjin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full border border-white/12 bg-white/6 text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-[transform,color,filter,border-color,background-color,box-shadow] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:border-[#7CE9FF]/28 hover:bg-white/10 hover:text-[#A9F5FF] hover:[filter:drop-shadow(0_0_18px_rgba(124,233,255,0.5))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_20px_rgba(124,233,255,0.12)] active:scale-[0.97]"
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="whatsapp" />
                </div>
              </a>
              <a
                href="mailto:Neomech3d@gmail.com"
                aria-label="Correo"
                className="inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full border border-white/12 bg-white/6 text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-[transform,color,filter,border-color,background-color,box-shadow] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:border-[#7CE9FF]/28 hover:bg-white/10 hover:text-[#D8EEFF] hover:[filter:drop-shadow(0_0_18px_rgba(216,238,255,0.42))] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_20px_rgba(216,238,255,0.12)] active:scale-[0.97]"
              >
                <div className="scale-[1.26]">
                  <SocialIcon name="email" />
                </div>
              </a>
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
                  className={cn(
                    "group relative overflow-hidden rounded-[24px] border px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]",
                    link.featured
                      ? "border-[#67F1FF]/34 bg-[linear-gradient(180deg,rgba(16,34,42,0.96),rgba(14,20,28,0.98))] shadow-[0_0_0_1px_rgba(103,241,255,0.12),0_0_26px_rgba(103,241,255,0.14)] hover:border-[#9BF8FF]/48 hover:shadow-[0_0_0_1px_rgba(103,241,255,0.18),0_0_32px_rgba(103,241,255,0.2)]"
                      : "border-white/10 bg-[#141724] hover:border-white/18 hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]",
                  )}
                >
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
                </Card>
              </a>
            ))}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            {detailCards.map((card) => (
              <Card
                key={card.title}
                glowTone="cyan"
                className="rounded-[28px] border border-[#67F1FF]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] px-6 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#8DF7FF]/32 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9F5FF]">
                  {card.title}
                </p>
                <div className="mt-5 space-y-4">
                  {card.items.map((item) => (
                    <p key={item} className="text-sm leading-relaxed text-[#D8E4EE] sm:text-base">
                      {item}
                    </p>
                  ))}
                </div>
                {card.withToolIcon ? (
                  <div className="mt-5 flex justify-center text-[#B9FAFF]">
                    <ToolIcon />
                  </div>
                ) : null}
              </Card>
            ))}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.title}
                type="button"
                onClick={() => setSelectedCaseIndex(index)}
                className="group text-left"
                aria-label={`Abrir ${caseStudy.title}`}
              >
                <Card
                  glowTone="cyan"
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,23,34,0.96),rgba(10,14,22,0.98))] transition-[border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-[#8DF7FF]/30 hover:shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative aspect-[1.18/1] overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.label}
                      fill
                      sizes="(max-width: 767px) 92vw, 34vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,8,14,0.06)_42%,rgba(5,8,14,0.82)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-12 text-center">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9F5FF]">
                        {caseStudy.title}
                      </p>
                      <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                        {caseStudy.label}
                      </p>
                    </div>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </Container>

      {mounted && selectedCase
        ? createPortal(
            <div
              className="fixed inset-0 z-[140] flex items-center justify-center bg-[rgba(2,5,10,0.78)] px-4 py-6 backdrop-blur-[10px]"
              role="dialog"
              aria-modal="true"
              aria-label={selectedCase.title}
              onClick={() => setSelectedCaseIndex(null)}
            >
              <button
                type="button"
                className="absolute inset-0"
                aria-label={`Cerrar ${selectedCase.title}`}
              />
              <div
                className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(10,14,22,0.98),rgba(6,9,15,0.98))] shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCaseIndex(null)}
                  className="absolute inset-0 z-0"
                  aria-label={`Cerrar ${selectedCase.title}`}
                />
                <div className="relative z-10 grid md:grid-cols-[1.02fr_0.98fr]">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseIndex(null)}
                    className="relative flex min-h-[22rem] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_38%),linear-gradient(180deg,rgba(7,10,16,0.98),rgba(3,6,10,0.98))] px-5 py-5 sm:min-h-[28rem] sm:px-7 sm:py-7"
                    aria-label={`Cerrar ${selectedCase.title}`}
                  >
                    <div className="relative h-full min-h-[18rem] w-full sm:min-h-[24rem]">
                      <Image
                        src={selectedCase.image}
                        alt={selectedCase.label}
                        fill
                        sizes="(max-width: 767px) 100vw, 48vw"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </button>

                  <div className="relative px-6 py-6 text-center sm:px-8 sm:py-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A9F5FF]">
                      {selectedCase.title}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[2rem]">
                      {selectedCase.label}
                    </h3>

                    <div className="mt-6 space-y-5">
                      <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9F5FF]">
                          El reto
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#D8E4EE] sm:text-[0.98rem]">
                          {selectedCase.challenge}
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9F5FF]">
                          Lo que hicimos
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#D8E4EE] sm:text-[0.98rem]">
                          {selectedCase.solution}
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9F5FF]">
                          Cómo lo logramos
                        </p>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-white sm:text-[0.98rem]">
                          {selectedCase.process}
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9F5FF]">
                          Resultado
                        </p>
                        <div className="mt-3 space-y-2">
                          {selectedCase.results.map((result) => (
                            <p
                              key={result}
                              className="text-sm leading-relaxed text-[#D8E4EE] sm:text-[0.98rem]"
                            >
                              {result}
                            </p>
                          ))}
                        </div>
                      </div>

                      {selectedCase.closing ? (
                        <p className="text-sm leading-relaxed text-[#D8E4EE] sm:text-[0.98rem]">
                          {selectedCase.closing}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
