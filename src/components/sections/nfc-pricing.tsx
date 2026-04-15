import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  points: readonly string[];
};

type NfcPricingProps = {
  plans: readonly PricingPlan[];
  inquiryHref: string;
};

export function NfcPricing({ plans, inquiryHref }: NfcPricingProps) {
  return (
    <>
      <SectionDivider />
      <section className="cv-auto py-18 sm:py-22" id="precios">
        <Container>
          <SectionTitle
            eyebrow="Precios"
            title="Precios claros para tarjeta, diseño y producción por volumen"
            description="Separamos la impresión de la tarjeta, el diseño adicional y los pedidos de 10 o más unidades para que la propuesta quede clara desde el primer vistazo."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={index === 1 ? "rounded-[30px] border-[#E625FF]/30 p-7 sm:p-8" : "rounded-[30px] p-7 sm:p-8"}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                  {plan.name}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
                  {plan.price}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-[#C7CBD6]">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E625FF]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button href={inquiryHref} className="mt-7 w-full" size="lg" external>
                  Solicitar tarjeta
                </Button>
              </Card>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Para pedidos de más de 10 unidades, la cotización se define internamente
            porque ya entra en un esquema de producción al por mayor.
          </p>
        </Container>
      </section>
    </>
  );
}
