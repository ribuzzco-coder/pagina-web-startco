"use client";

import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "RiBuzz nos ayudó a ver con claridad dónde se estaba rompiendo el proceso comercial. Dejamos de mover piezas sueltas y empezamos a tomar decisiones con criterio.",
    author: "Equipo comercial",
    role: "Empresa de servicios B2B",
  },
  {
    id: 2,
    quote:
      "Lo más valioso no fue solo la lectura inicial, sino cómo esa claridad se tradujo en estructura, prioridades y una forma más operable de vender.",
    author: "Líder de crecimiento",
    role: "Negocio digital en expansión",
  },
  {
    id: 3,
    quote:
      "Sentíamos que hacíamos mucho y entendíamos poco. El diagnóstico puso orden, foco y un siguiente paso realista para crecer con menos improvisación.",
    author: "Fundadora",
    role: "Marca en etapa de consolidación",
  },
] as const;

type CardPosition = "front" | "middle" | "back";

// Framer motion variants for smooth transitions
const variants = {
  front: {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 30,
    boxShadow: "0 22px 64px rgba(0,0,0,0.34)",
  },
  middle: {
    x: 24,
    y: 20,
    rotate: 5,
    scale: 0.97,
    opacity: 0.8,
    zIndex: 20,
    boxShadow: "0 18px 46px rgba(0,0,0,0.28)",
  },
  back: {
    x: 48,
    y: 40,
    rotate: 10,
    scale: 0.94,
    opacity: 0.58,
    zIndex: 10,
    boxShadow: "0 12px 36px rgba(0,0,0,0.22)",
  },
};

export function TestimonialShuffle() {
  const [positions, setPositions] = useState<CardPosition[]>(["front", "middle", "back"]);

  function handleShuffle() {
    setPositions((current) => {
      const rotated = [...current];
      const last = rotated.pop();
      if (!last) return current;
      rotated.unshift(last);
      return rotated as CardPosition[];
    });
  }

  const handleDragEnd = (_: any, info: PanInfo) => {
    // If dragged more than 50px in either direction, shuffle
    if (Math.abs(info.offset.x) > 50) {
      handleShuffle();
    }
  };

  return (
    <section className="cv-auto overflow-hidden py-18 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-xl">
          <PillBadge>Testimonios</PillBadge>
          <h2 className="mt-6 max-w-lg font-heading text-3xl leading-tight text-[#F5F7FA] sm:text-4xl">
            Un vistazo al tipo de claridad que buscamos dejar cuando intervenimos.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Arrastra las tarjetas para ver más testimonios y aprendizajes de nuestros clientes.
          </p>
        </div>

        <div className="relative mx-auto h-[360px] w-[310px] cursor-grab active:cursor-grabbing sm:h-[400px] sm:w-[360px]">
          <div className="pointer-events-none absolute inset-x-10 bottom-2 h-18 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.18),transparent_68%)] blur-2xl" />
          {testimonials.map((testimonial, index) => {
            const position = positions[index];
            const isFront = position === "front";

            return (
              <motion.article
                key={testimonial.id}
                variants={variants}
                animate={position}
                // Transition settings for manual movement
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.6,
                }}
                // Drag settings for front card only
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                // Visual draggable indicator (wiggle) for front card
                {...(isFront && {
                  animate: {
                    ...variants.front,
                    x: [0, -4, 4, -4, 0],
                    transition: {
                      x: {
                        repeat: Infinity,
                        duration: 3,
                        repeatDelay: 2,
                      },
                    },
                  },
                })}
                className={cn(
                  "absolute inset-0 flex flex-col justify-between rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,24,38,0.96),rgba(14,16,26,0.96))] p-7 shadow-2xl",
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7B0EE]">
                      Testimonio
                    </p>
                    {isFront && (
                       <div className="flex gap-1.5 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E7B0EE]/40 animate-pulse" />
                          <span className="text-[10px] text-[#98A0B3]/60 uppercase tracking-widest">Desliza</span>
                       </div>
                    )}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-[#F5F7FA] sm:text-[1.15rem]">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="mt-8 border-t border-white/8 pt-5 text-left">
                  <p className="text-sm font-semibold text-[#F5F7FA]">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-[#98A0B3]">{testimonial.role}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
