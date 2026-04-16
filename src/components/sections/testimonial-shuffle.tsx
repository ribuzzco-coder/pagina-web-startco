"use client";

import { PanInfo, motion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "La intervención de RiBuzz nos dio claridad sobre las prioridades de nuestra operación comercial. Pasamos de reaccionar a estructurar un flujo de ventas que nuestro equipo ahora ejecuta con autonomía.",
    author: "Neomech",
    role: "Empresa B2B en Medellín",
  },
  {
    id: 2,
    quote:
      "RiBuzz identificó el cuello de botella en la conversión y nos ayudó a resolverlo con herramientas y estrategias de adquisición. En dos meses llegamos a mejorar un 50% las ventas.",
    author: "Facial Fitness",
    role: "Empresa B2C Digital",
  },
  {
    id: 3,
    quote:
      "Con RiBuzz redujimos la fricción en nuestro flujo de adquisición logramos transmitir una mejor experiencia al usuario. Se implementó el proceso comercial con una mejor adquisición.",
    author: "Terratravel",
    role: "Empresas B2B Digital",
  },
] as const;

type CardPosition = "front" | "middle" | "back";

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

  const handleDragEnd = (_: unknown, info: PanInfo) => {
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
            Experiencias de empresas que ordenaron su crecimiento con RiBuzz.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Arrastra las tarjetas para ver más testimonios de nuestros clientes.
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
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.6,
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
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
                    {isFront ? (
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E7B0EE]/40" />
                        <span className="text-[10px] uppercase tracking-widest text-[#98A0B3]/60">
                          Desliza
                        </span>
                      </div>
                    ) : null}
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
