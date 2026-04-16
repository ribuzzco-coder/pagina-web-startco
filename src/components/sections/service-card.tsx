import { Card } from "@/components/ui/card";

type ServiceCardProps = {
  layer?: string;
  title: string;
  summary: string;
  idealClient: string;
  expectedResult: string;
  deliverables?: string[];
};

export function ServiceCard({
  layer,
  title,
  summary,
  idealClient,
  expectedResult,
  deliverables,
}: ServiceCardProps) {
  return (
    <Card className="h-full rounded-[26px]">
      {layer ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
          {layer}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#F5F7FA]">
        {title}
      </h3>
      <div className="mt-5 space-y-5">


        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
            Para quien es
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
            {idealClient}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
            Resultado que genera
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
            {expectedResult}
          </p>
        </div>
      </div>

      {deliverables?.length ? (
        <div className="mt-6 border-t border-white/8 pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
            Que incluye
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#98A0B3]">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E625FF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Card>
  );
}
