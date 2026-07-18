"use client";

import { useState } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FitChecklistProps = {
  fitItems: readonly string[];
  nonFitItems: readonly string[];
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#8b6ff0]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#6b7280]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function FitCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly string[];
  tone: "fit" | "no-fit";
}) {
  const Icon = tone === "fit" ? CheckIcon : CrossIcon;

  return (
    <Card className="rounded-[24px] p-5 sm:p-6">
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.16em]",
          tone === "fit" ? "text-[#8b6ff0]" : "text-[#98A0B3]",
        )}
      >
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-3 text-sm leading-relaxed [text-wrap:pretty]",
              tone === "fit" ? "text-[#CEC6E0]" : "text-[#98A0B3]",
            )}
          >
            <span className="mt-0.5">
              <Icon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function FitChecklist({ fitItems, nonFitItems }: FitChecklistProps) {
  const [activeTab, setActiveTab] = useState<"fit" | "no-fit">("fit");

  return (
    <div>
      <div className="mb-5 flex justify-center md:hidden" role="tablist" aria-label="Filtro RiBuzz">
        {[
          { id: "fit", label: "Buen encaje" },
          { id: "no-fit", label: "No es para ti" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id as "fit" | "no-fit")}
            className={cn(
              "border px-4 py-2 text-sm font-semibold transition-colors first:rounded-l-full last:rounded-r-full",
              activeTab === tab.id
                ? "border-[#6939E2]/50 bg-[#6939E2]/18 text-[#E4DFF7]"
                : "border-white/10 bg-white/[0.03] text-[#98A0B3]",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="hidden gap-5 md:grid md:grid-cols-2">
        <FitCard title="Para quién sí es" items={fitItems} tone="fit" />
        <FitCard title="Para quién no es" items={nonFitItems} tone="no-fit" />
      </div>

      <div className="md:hidden">
        {activeTab === "fit" ? (
          <FitCard title="Para quién sí es" items={fitItems} tone="fit" />
        ) : (
          <FitCard title="Para quién no es" items={nonFitItems} tone="no-fit" />
        )}
      </div>
    </div>
  );
}
