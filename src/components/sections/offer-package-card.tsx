import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type OfferPackageCardProps = {
  index: number;
  stage: string;
  title: string;
  forWhom: string;
  includes: string[];
  billing: string;
  note?: string;
  ctaHref: string;
  ctaLabel: string;
};

export function OfferPackageCard({
  index,
  stage,
  title,
  forWhom,
  includes,
  billing,
  note,
  ctaHref,
  ctaLabel,
}: OfferPackageCardProps) {
  return (
    <Card className="flex h-full flex-col rounded-[28px] p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-xs font-semibold text-white shadow-[0_0_12px_rgba(105,57,226,0.3)]">
          {String(index).padStart(2, "0")}
        </span>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
          Etapa: {stage}
        </p>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#E4DFF7]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0] sm:text-base">{forWhom}</p>

      <div className="mt-6 border-t border-white/8 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
          Incluye
        </p>
        <ul className="mt-4 space-y-2 text-sm text-[#98A0B3]">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-[#98A0B3]">{billing}</p>

      {note ? (
        <p className="mt-4 rounded-2xl border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-3 text-xs leading-relaxed text-[#CEC6E0]">
          {note}
        </p>
      ) : null}

      <div className="mt-auto pt-6">
        <Button href={ctaHref} variant="secondary" className="w-full">
          {ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
