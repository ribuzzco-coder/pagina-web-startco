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
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-base font-semibold text-white shadow-[0_0_14px_rgba(105,57,226,0.32)]">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#E4DFF7]">
          {title}
        </h3>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-[#CEC6E0] sm:text-base">{description}</p>

      {!hidePoints ? (
        <ul className="mt-5 space-y-2 border-t border-white/8 pt-5 text-sm text-[#98A0B3]">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4E06BA]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {outcome ? (
        <div className={`mt-auto pt-5 ${hidePoints ? "" : "border-t border-white/8"}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">
            Lo que entrega
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#CEC6E0] sm:text-base">
            {outcome}
          </p>
        </div>
      ) : null}
    </Card>
  );
}
