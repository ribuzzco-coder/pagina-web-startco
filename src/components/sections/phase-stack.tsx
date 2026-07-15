"use client";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { StackingCardItem, StackingCards } from "@/components/ui/stacking-cards";
import type { Step } from "@/lib/content";

type PhaseStackProps = {
  steps: readonly Step[];
};

// Each card gets its own dedicated scroll slot of this height. The container's
// total height must be an exact multiple of this value (slot height × card
// count) — any mismatch between the two makes the sticky cards overlap the
// section that follows (too short) or leaves dead scroll space (too tall).
const CARD_SLOT_VH = 90;

export function PhaseStack({ steps }: PhaseStackProps) {
  return (
    <StackingCards
      totalCards={steps.length}
      scaleMultiplier={0.05}
      className="relative"
      style={{ height: `${steps.length * CARD_SLOT_VH}vh` }}
    >
      {steps.map((step, index) => (
        <StackingCardItem
          key={step.title}
          index={index}
          className="flex items-center justify-center py-6"
          style={{ height: `${CARD_SLOT_VH}vh` }}
        >
          <Container>
            <Card className="relative mx-auto grid max-w-4xl gap-8 overflow-hidden rounded-[28px] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.34)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(105,57,226,0.14),transparent_45%),radial-gradient(circle_at_85%_85%,rgba(78,6,186,0.12),transparent_45%)]"
                aria-hidden
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-base font-semibold tabular-nums text-white shadow-[0_0_16px_rgba(105,57,226,0.32)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <PillBadge>Fase {index + 1} de {steps.length}</PillBadge>
                </div>

                <h3 className="mt-5 font-heading text-2xl leading-tight text-[#E4DFF7] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0] sm:text-base">
                  {step.description}
                </p>

                <div className="mt-6 rounded-2xl border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                    Lo que entrega
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#CEC6E0]">{step.outcome}</p>
                </div>
              </div>

              <div className="relative rounded-[20px] border border-white/8 bg-white/[0.02] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                  Qué incluye esta fase
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[#CEC6E0]">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Container>
        </StackingCardItem>
      ))}
    </StackingCards>
  );
}
