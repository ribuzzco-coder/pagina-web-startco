"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type ProblemSymptom = {
  title: string;
  description: string;
  detail: string;
};

type ProblemSymptomGridProps = {
  items: readonly ProblemSymptom[];
  synthesis: string;
};

export function ProblemSymptomGrid({ items, synthesis }: ProblemSymptomGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mt-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={isOpen}
              onClick={() => setActiveIndex((current) => (current === index ? null : index))}
              className="group h-[220px] text-left outline-none [perspective:1100px]"
            >
              <div
                className={cn(
                  "relative h-full rounded-[22px] transition-transform duration-500 [transform-style:preserve-3d]",
                  "group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]",
                  isOpen && "[transform:rotateY(180deg)]",
                )}
              >
                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,20,31,0.96),rgba(8,8,14,0.98))] p-5 [backface-visibility:hidden]">
                  <div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#6939E2]/24 text-xs font-bold text-[#E4DFF7]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty]">{item.description}</p>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[22px] border border-[#6939E2]/24 bg-[linear-gradient(180deg,rgba(28,20,49,0.98),rgba(10,8,18,0.98))] p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                    Qué revela
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#E4DFF7] [text-wrap:pretty]">{item.detail}</p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">
                    RiBuzz ordena el sistema
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mx-auto mt-7 max-w-xl text-center text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
        {synthesis}
      </p>
    </div>
  );
}
