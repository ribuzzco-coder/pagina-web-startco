import { Card } from "@/components/ui/card";

type StepCardProps = {
  index: number;
  title: string;
  description: string;
  points: readonly string[];
  outcome?: string;
  hidePoints?: boolean;
};

export function StepCard({ index, title, description, points, outcome, hidePoints = false }: StepCardProps) {
  return (
    <Card className="relative flex h-full flex-col rounded-[26px] p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E625FF]/25 bg-[#E625FF]/10 text-base font-semibold text-[#F3C2F8]">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#F5F7FA]">
          {title}
        </h3>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">{description}</p>

      {!hidePoints ? (
        <ul className="mt-5 space-y-2 border-t border-white/8 pt-5 text-sm text-[#98A0B3]">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B16E6]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {outcome ? (
        <div className={`mt-auto pt-5 ${hidePoints ? "" : "border-t border-white/8"}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
            Lo que entrega
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
            {outcome}
          </p>
        </div>
      ) : null}
    </Card>
  );
}
