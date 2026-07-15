import { Card } from "@/components/ui/card";

type PrincipleCardProps = {
  index: number;
  text: string;
};

export function PrincipleCard({ index, text }: PrincipleCardProps) {
  return (
    <Card className="h-full rounded-[24px] p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-xs font-semibold text-white shadow-[0_0_12px_rgba(105,57,226,0.3)]">
          {String(index).padStart(2, "0")}
        </span>
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[#98A0B3] uppercase">
          Principio
        </p>
      </div>
      <p className="mt-4 text-base leading-relaxed text-[#E4DFF7]">{text}</p>
    </Card>
  );
}
