import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NumberedCardProps = {
  index: number;
  title?: string;
  description: string;
  className?: string;
};

export function NumberedCard({ index, title, description, className }: NumberedCardProps) {
  return (
    <Card className={cn("h-full rounded-[24px] p-6", className)}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-xs font-semibold text-white shadow-[0_0_12px_rgba(105,57,226,0.3)]">
          {String(index).padStart(2, "0")}
        </span>
        {title ? (
          <h3 className="text-lg font-semibold tracking-tight text-[#E4DFF7]">{title}</h3>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">{description}</p>
    </Card>
  );
}
