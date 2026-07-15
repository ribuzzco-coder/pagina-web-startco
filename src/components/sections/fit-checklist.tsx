import { Card } from "@/components/ui/card";

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

export function FitChecklist({ fitItems, nonFitItems }: FitChecklistProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card className="rounded-[28px] p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          Para quién sí es
        </p>
        <ul className="mt-5 space-y-3">
          {fitItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#CEC6E0] sm:text-base">
              <span className="mt-0.5">
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="rounded-[28px] p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
          Para quién no es
        </p>
        <ul className="mt-5 space-y-3">
          {nonFitItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              <span className="mt-0.5">
                <CrossIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
