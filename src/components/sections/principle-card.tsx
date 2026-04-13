import { Card } from "@/components/ui/card";

type PrincipleCardProps = {
  index: number;
  text: string;
};

export function PrincipleCard({ index, text }: PrincipleCardProps) {
  return (
    <Card className="h-full rounded-[24px] p-5 sm:p-6">
      <p className="text-[11px] font-semibold tracking-[0.14em] text-[#E7B0EE] uppercase">
        Principio {String(index).padStart(2, "0")}
      </p>
      <p className="mt-3 text-base leading-relaxed text-[#C7CBD6]">{text}</p>
    </Card>
  );
}
