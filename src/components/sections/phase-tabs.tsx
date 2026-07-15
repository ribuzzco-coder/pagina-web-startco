"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/utils";
import type { Step } from "@/lib/content";

type PhaseTabsProps = {
  steps: readonly Step[];
};

export function PhaseTabs({ steps }: PhaseTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Fases de la metodología RiBuzz"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={step.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[border-color,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive
                  ? "border-[#6939E2]/60 bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_0_16px_rgba(105,57,226,0.32)]"
                  : "border-white/10 bg-white/[0.03] text-[#98A0B3] hover:border-[#6939E2]/30 hover:bg-white/[0.06] hover:text-[#E4DFF7]",
              )}
            >
              <span
                className={cn(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                  isActive ? "bg-white/20 text-white" : "bg-white/8 text-[#98A0B3]",
                )}
              >
                {index + 1}
              </span>
              {step.title}
            </button>
          );
        })}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(22,24,38,0.5),rgba(11,11,16,0.2))] p-2 sm:p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="grid gap-8 rounded-[24px] p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <PillBadge>Fase {activeIndex + 1}</PillBadge>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#E4DFF7] sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0] sm:text-base">
                  {active.description}
                </p>

                <div className="mt-6 rounded-2xl border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                    Lo que entrega
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#CEC6E0]">{active.outcome}</p>
                </div>
              </div>

              <div className="rounded-[20px] border border-white/8 bg-white/[0.02] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                  Qué incluye esta fase
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[#CEC6E0]">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {steps.map((step, index) => (
          <span
            key={step.title}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === activeIndex ? "w-6 bg-[#6939E2]" : "w-1.5 bg-white/15",
            )}
          />
        ))}
      </div>
    </div>
  );
}
