import type { PaymentModelPart } from "@/lib/content";
import { Button } from "@/components/ui/button";

type OfferPaymentModelProps = {
  parts: PaymentModelPart[];
  ctaHref: string;
};

export function OfferPaymentModel({ parts, ctaHref }: OfferPaymentModelProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,18,30,0.96),rgba(8,8,14,0.98))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex h-full flex-col items-center justify-between rounded-[22px] border border-[#6939E2]/24 bg-[#6939E2]/8 p-6 text-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
              La oferta en simple
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#E4DFF7] [text-wrap:balance]">
              Definimos qué se trabaja, cuánto acompañamiento requiere y qué se mide.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">
              Con el diagnóstico aclaramos el alcance antes de hablar de inversión. Así sabes qué incluye, qué se paga aparte y cuándo tendría sentido un componente variable.
            </p>
          </div>

          <div className="mt-6">
            <Button href={ctaHref} variant="shimmer" size="lg">
              Completa el diagnóstico
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {parts.map((part) => (
            <div
              key={part.title}
              className="rounded-[20px] border border-white/8 bg-white/[0.02] p-5 text-center"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                  {part.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
                  {part.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">{part.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
