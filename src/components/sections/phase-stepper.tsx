"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/utils";
import type { Step } from "@/lib/content";

type PhaseStepperProps = {
  steps: readonly Step[];
};

export function PhaseStepper({ steps }: PhaseStepperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <div>
      {/* Stepper: nodos conectados por líneas, como el avance de un proceso */}
      <div className="flex items-start" role="tablist" aria-label="Fases de la metodología RiBuzz">
        {steps.flatMap((step, index) => {
          const isDone = index < activeIndex;
          const isActive = index === activeIndex;

          const node = (
            <button
              key={`node-${step.title}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className="group flex shrink-0 flex-col items-center gap-2"
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-[background-color,box-shadow,color] duration-300",
                  isDone
                    ? "bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white"
                    : isActive
                      ? "bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_0_20px_rgba(105,57,226,0.45)] ring-4 ring-[#6939E2]/20"
                      : "bg-white/8 text-[#5A6072] group-hover:bg-white/12 group-hover:text-[#98A0B3]",
                )}
              >
                {isDone ? (
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                    <path
                      d="M4 10.5l3.5 3.5L16 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </span>
              <span
                className={cn(
                  "hidden max-w-[6.5rem] text-center text-xs font-medium leading-tight [text-wrap:balance] sm:block",
                  isActive ? "text-[#E4DFF7]" : "text-[#5A6072]",
                )}
              >
                {step.title}
              </span>
            </button>
          );

          if (index === steps.length - 1) return [node];

          const connector = (
            <span
              key={`line-${step.title}`}
              className={cn(
                "mx-2 mt-5 h-px flex-1 transition-colors duration-300 sm:mx-3",
                isDone ? "bg-[#6939E2]/60" : "bg-white/10",
              )}
            />
          );

          return [node, connector];
        })}
      </div>

      {/* Card de la fase activa */}
      <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(22,24,38,0.5),rgba(11,11,16,0.2))] p-2 sm:p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="flex min-h-[25rem] flex-col rounded-[24px] p-6 sm:min-h-[26.5rem] sm:p-10">
              <div className="mx-auto max-w-2xl text-center">
                <PillBadge>
                  Fase {activeIndex + 1} de {steps.length}
                </PillBadge>
                <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-[#E4DFF7] [text-wrap:balance] sm:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty] sm:text-base">
                  {active.description}
                </p>
              </div>

              <div className="mt-7 grid flex-1 auto-rows-fr gap-4 sm:grid-cols-2">
                <div className="flex h-full min-h-[8.5rem] flex-col rounded-[18px] border border-white/8 bg-white/[0.02] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                    Foco de esta fase
                  </p>
                  <ul className="mt-3 flex-1 space-y-2.5 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">
                    {active.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex h-full min-h-[8.5rem] flex-col rounded-[18px] border border-[#6939E2]/24 bg-[#6939E2]/8 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                    Lo que entrega
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#E4DFF7] [text-wrap:pretty]">{active.outcome}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
          disabled={activeIndex === 0}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[border-color,background-color,color] duration-300 disabled:cursor-not-allowed disabled:opacity-40",
            "border-white/10 bg-white/[0.03] text-[#CEC6E0] hover:border-[#6939E2]/40 hover:bg-white/[0.06] hover:text-[#E4DFF7] disabled:hover:border-white/10 disabled:hover:bg-white/[0.03] disabled:hover:text-[#CEC6E0]",
          )}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
            <path
              d="M12 4.5L6.5 10l5.5 5.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">Fase anterior</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveIndex((index) => Math.min(steps.length - 1, index + 1))}
          disabled={activeIndex === steps.length - 1}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[border-color,background-color,color,box-shadow] duration-300 disabled:cursor-not-allowed disabled:opacity-40",
            "border-[#6939E2]/60 bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_0_16px_rgba(105,57,226,0.32)] hover:shadow-[0_0_20px_rgba(105,57,226,0.42)] disabled:hover:shadow-[0_0_16px_rgba(105,57,226,0.32)]",
          )}
        >
          <span className="hidden sm:inline">Siguiente fase</span>
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
            <path
              d="M8 4.5L13.5 10L8 15.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
