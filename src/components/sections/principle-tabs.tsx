"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/utils";

type PrincipleTabsProps = {
  principles: readonly string[];
};

export function PrincipleTabs({ principles }: PrincipleTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = principles[activeIndex];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Principios no negociables"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {principles.map((principle, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={principle}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-[border-color,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-11 sm:w-11",
                isActive
                  ? "border-[#6939E2]/60 bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_0_16px_rgba(105,57,226,0.32)]"
                  : "border-white/10 bg-white/[0.03] text-[#98A0B3] hover:border-[#6939E2]/30 hover:bg-white/[0.06] hover:text-[#E4DFF7]",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(22,24,38,0.5),rgba(11,11,16,0.2))] p-2 sm:p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="flex min-h-[220px] flex-col items-center justify-center rounded-[24px] p-8 text-center sm:p-12">
              <PillBadge>Principio {String(activeIndex + 1).padStart(2, "0")}</PillBadge>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#E4DFF7] sm:text-2xl">
                {active}
              </p>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {principles.map((principle, index) => (
          <span
            key={principle}
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
