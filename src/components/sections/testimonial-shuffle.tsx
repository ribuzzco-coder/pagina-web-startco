"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

type Testimonial = {
  id: string;
  name: string;
  handle: string;
  quote: string;
  logoSrc?: string;
  challenge: string;
  intervention: string;
  result: string;
};

// Voz de fundador/a en primera persona. Las marcas con quote ya validado
// (Neomech, Facial Fitness, TerraTravel) mantienen su cita original. El resto
// son una paráfrasis nuestra a partir de lo que documentamos del proyecto —
// quedan pendientes de que cada marca confirme su cita textual antes de tratarlas
// como testimonio cerrado.
const testimonials: Testimonial[] = [
  {
    id: "neomech",
    name: "Neomech",
    handle: "Emprendimiento en construcción · Medellín",
    quote:
      "La intervención de RiBuzz nos dio claridad sobre las prioridades de nuestra operación comercial. Nos acompañaron en la gestión del negocio y en diseñar el proceso de adquisición de clientes que hoy ejecutamos con autonomía.",
    logoSrc: "/neo-mech-logo.png",
    challenge: "La operación comercial necesitaba prioridades claras y una ruta de adquisición.",
    intervention: "Ordenamos el proceso comercial y acompañamos decisiones de gestión del negocio.",
    result: "El equipo quedó con más autonomía para ejecutar su proceso de adquisición.",
  },
  {
    id: "biondaymora",
    name: "Biondaymora",
    handle: "Moda",
    quote:
      "RiBuzz nos ayudó a ver que nuestra página y el proceso de venta no estaban pensados para convertir. Rediseñaron el sitio, el email marketing y el contenido — hoy convierte mejor.",
    logoSrc: "/images/biondaymora-logo.jpg",
    challenge: "La página y el proceso comercial no estaban construidos para conversión.",
    intervention: "Rediseñamos sitio, email marketing y estructura de contenido.",
    result: "La marca quedó con un recorrido digital más claro y orientado a conversión.",
  },
  {
    id: "facial-fitness",
    name: "Facial Fitness",
    handle: "Cursos digitales",
    quote:
      "RiBuzz identificó el cuello de botella en la conversión y lo resolvió con ajustes a la landing page y una estrategia de contenido en Instagram enfocada en convertir visitas en clientes.",
    logoSrc: "/images/testimonials/facial-fitness-logo.webp",
    challenge: "El tráfico existía, pero el cuello de botella estaba en convertir visitas en clientes.",
    intervention: "Ajustamos landing page y estrategia de contenido en Instagram.",
    result: "La comunicación quedó más enfocada en conversión y no solo en visibilidad.",
  },
  {
    id: "kynd",
    name: "Kynd",
    handle: "Moda",
    quote:
      "RiBuzz construyó nuestra landing manteniendo la identidad visual de la marca en todo el recorrido de compra.",
    logoSrc: "/images/brand-landings/kynd/kynd-logo-original.png",
    challenge: "La marca necesitaba una experiencia digital coherente con su identidad.",
    intervention: "Construimos una landing alineada con el lenguaje visual y comercial.",
    result: "El recorrido de compra se sintió más consistente con la marca.",
  },
  {
    id: "terratravel",
    name: "TerraTravel",
    handle: "Turismo",
    quote:
      "Con RiBuzz rediseñamos nuestras landing pages y sumamos tarjetas NFC para conectar mejor la experiencia física y digital de nuestros huéspedes.",
    challenge: "La experiencia física y digital no estaba conectada de forma clara.",
    intervention: "Rediseñamos landings y sumamos tarjetas NFC como puente de contacto.",
    result: "Los huéspedes encontraron una ruta más simple entre presencia física y digital.",
  },
  {
    id: "me-inspiras",
    name: "Me Inspiras",
    handle: "Educación",
    quote:
      "Estábamos invirtiendo tiempo en prospectos que nunca iban a comprar. RiBuzz ajustó nuestro proceso para filtrar por disposición real de pago, y dejamos de perder tiempo en quien no iba a pagar.",
    logoSrc: "/images/testimonials/me-inspiras-logo.jpg",
    challenge: "El proceso invertía demasiado tiempo en prospectos sin disposición real de pago.",
    intervention: "Ajustamos el filtro comercial para priorizar oportunidades con mejor encaje.",
    result: "El equipo pudo concentrar tiempo en conversaciones con mayor probabilidad de avance.",
  },
  {
    id: "nunaamautta",
    name: "Nunaamautta",
    handle: "Moda de baño",
    quote:
      "Nuestra landing hoy se ve y se siente igual que nuestra marca — RiBuzz cuidó cada detalle de la identidad visual en todo el recorrido de compra.",
    logoSrc: "/images/nunaamautta/logo.png",
    challenge: "La marca necesitaba una landing que mantuviera su sensibilidad visual.",
    intervention: "Diseñamos una experiencia digital cuidando tono, estética y recorrido.",
    result: "La landing quedó alineada con la identidad y el momento de compra.",
  },
  {
    id: "fiammata",
    name: "Fiammata",
    handle: "Joyería",
    quote:
      "Con RiBuzz, nuestra landing quedó alineada con la identidad de Fiammata en cada paso del recorrido de compra.",
    logoSrc: "/images/fiammata/logo.avif",
    challenge: "El recorrido digital debía sostener una identidad visual delicada y consistente.",
    intervention: "Construimos una landing con foco en narrativa, estética y recorrido comercial.",
    result: "La experiencia digital acompaña mejor la percepción de marca.",
  },
];

const loopTestimonials = [...testimonials, ...testimonials];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ item, onOpen }: { item: Testimonial; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative flex w-[300px] shrink-0 flex-col gap-4 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,24,38,0.94),rgba(12,13,20,0.94))] p-6 text-left shadow-[0_16px_40px_rgba(0,0,0,0.24)] transition-colors hover:border-[#6939E2]/38 sm:w-[360px]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(105,57,226,0.45),transparent)]" />

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          {item.logoSrc ? (
            <Image
              src={item.logoSrc}
              alt={`Logo de ${item.name}`}
              width={48}
              height={48}
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            <span className="text-sm font-semibold text-[#6939E2]">{getInitials(item.name)}</span>
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#E4DFF7]">{item.name}</p>
          <p className="truncate text-xs text-[#98A0B3]">{item.handle}</p>
        </div>
      </div>

      <p className="text-[0.92rem] leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">&ldquo;{item.quote}&rdquo;</p>
      <p className="mt-auto text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
        Ver caso
      </p>
    </button>
  );
}

export function TestimonialShuffle() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const [selected, setSelected] = useState<Testimonial | null>(null);

  useEffect(() => {
    function measure() {
      if (trackRef.current) {
        setLoopWidth(trackRef.current.scrollWidth / 2);
      }
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const duration = loopWidth > 0 ? loopWidth / 55 : 40;

  return (
    <section className="cv-auto overflow-hidden py-18 sm:py-24">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Testimonios y casos"
          title="Lo que dicen las marcas con las que trabajamos"
        />
      </Container>

      <div className="relative mt-10 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#05050A] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#05050A] to-transparent sm:w-28" />

        <motion.div
          ref={trackRef}
          className="flex w-max gap-5 px-5"
          animate={loopWidth > 0 ? { x: [0, -loopWidth] } : undefined}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {loopTestimonials.map((item, index) => (
            <TestimonialCard
              key={`${item.id}-${index}`}
              item={item}
              onOpen={() => setSelected(item)}
            />
          ))}
        </motion.div>
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 px-4 py-6 backdrop-blur-sm sm:items-center">
          <button
            type="button"
            aria-label="Cerrar caso"
            className="absolute inset-0"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-2xl rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(9,10,16,0.98))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:p-8">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#98A0B3] hover:text-[#E4DFF7]"
              aria-label="Cerrar"
            >
              ×
            </button>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
              Caso RiBuzz
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
              {selected.name}
            </h3>
            <p className="mt-2 text-sm text-[#98A0B3]">{selected.handle}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Problema", selected.challenge],
                ["Intervención", selected.intervention],
                ["Cambio", selected.result],
              ].map(([label, text]) => (
                <div key={label} className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                    {label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-[18px] border border-[#6939E2]/24 bg-[#6939E2]/8 p-4 text-sm leading-relaxed text-[#E4DFF7] [text-wrap:pretty]">
              &ldquo;{selected.quote}&rdquo;
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
