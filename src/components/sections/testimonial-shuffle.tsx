"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
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

const positionStyles: Record<CardPosition, string> = {
  front:
    "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 z-30 shadow-[0_22px_64px_rgba(0,0,0,0.34)]",
  middle:
    "translate-x-6 translate-y-5 rotate-[5deg] scale-[0.97] opacity-80 z-20 shadow-[0_18px_46px_rgba(0,0,0,0.28)]",
  back:
    "translate-x-12 translate-y-10 rotate-[10deg] scale-[0.94] opacity-58 z-10 shadow-[0_12px_36px_rgba(0,0,0,0.22)]",
};

export function TestimonialShuffle() {
  const [positions, setPositions] = useState<CardPosition[]>(["front", "middle", "back"]);

  function handleShuffle() {
    setPositions((current) => {
      const rotated = [...current];
      const last = rotated.pop();

      if (!last) {
        return current;
      }

      rotated.unshift(last);
      return rotated as CardPosition[];
    });
  }

  return (
    <section className="cv-auto overflow-hidden py-18 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-xl">
          <PillBadge>Lecturas que dejan huella</PillBadge>
          <h2 className="mt-6 max-w-lg font-heading text-3xl leading-tight text-[#F5F7FA] sm:text-4xl">
            Un vistazo al tipo de claridad que buscamos dejar cuando intervenimos.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Este bloque es un boceto visual para mostrar percepciones, aprendizajes
            o frases de clientes sin romper la estética sobria de la landing.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button type="button" onClick={handleShuffle}>
              Cambiar testimonio
            </Button>
            <Button href="/contact" variant="secondary">
              Llevar esto a una sección real
            </Button>
          </div>
        </div>

        <div className="relative mx-auto h-[360px] w-[310px] sm:h-[400px] sm:w-[360px]">
          <div className="pointer-events-none absolute inset-x-10 bottom-2 h-18 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.18),transparent_68%)] blur-2xl" />
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={cn(
                "absolute inset-0 flex flex-col justify-between rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,24,38,0.96),rgba(14,16,26,0.96))] p-7 transition-[transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                positionStyles[positions[index]],
              )}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7B0EE]">
                  Testimonio
                </p>
                <p className="mt-6 text-lg leading-relaxed text-[#F5F7FA] sm:text-[1.15rem]">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="mt-8 border-t border-white/8 pt-5">
                <p className="text-sm font-semibold text-[#F5F7FA]">{testimonial.author}</p>
                <p className="mt-1 text-sm text-[#98A0B3]">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
