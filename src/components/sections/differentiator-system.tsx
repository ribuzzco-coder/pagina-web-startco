import type { ReactNode } from "react";

import type { DifferentiatorPillar } from "@/lib/content";

type DifferentiatorSystemProps = {
  pillars: DifferentiatorPillar[];
};

const iconPaths = [
  "M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0M12 4v3M12 17v3M4 12h3M17 12h3",
  "M5 7.5h14v8h-9l-4 3v-3H5zM8 10h8M8 13h5",
  "M7 7h4v4H7zM13 5h4v4h-4zM13 13h4v4h-4zM11 9l2-1M11 11l2 4",
];

export function DifferentiatorSystem({ pillars }: DifferentiatorSystemProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
        {pillars.map((pillar, index) => (
          <article
            key={pillar.shortLabel}
            className="flex h-full min-h-[24.5rem] flex-col rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,21,32,0.68),rgba(8,8,14,0.96))] px-7 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
          >
            <CardDecorator>
              <AreaIcon index={index} />
            </CardDecorator>

            <h3 className="mt-6 text-lg font-semibold leading-tight tracking-tight text-[#E4DFF7] [text-wrap:balance]">
              {pillar.shortLabel}
            </h3>
            <p className="mx-auto mt-3 min-h-[3.6rem] max-w-[15rem] text-[0.95rem] font-semibold leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">
              {pillar.title}
            </p>
            <p className="mx-auto mt-2 min-h-[3.2rem] max-w-[15rem] text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty]">
              {pillar.description}
            </p>

            <ul className="mt-6 flex-1 space-y-3 border-t border-white/8 pt-5 text-center text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">
              {pillar.items.map((item) => (
                <li key={item} className="mx-auto flex max-w-[15rem] items-start justify-center gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto flex size-24 items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_68%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:22px_22px] opacity-10" />
      <div className="relative z-10 flex size-16 items-center justify-center text-[#8b6ff0] drop-shadow-[0_0_18px_rgba(139,111,240,0.34)]">
        {children}
      </div>
    </div>
  );
}

function AreaIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden>
      <path
        d={iconPaths[index % iconPaths.length]}
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
