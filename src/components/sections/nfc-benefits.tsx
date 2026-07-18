import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";

type NfcBenefitsProps = {
  functional: readonly string[];
  business: readonly string[];
};

function BenefitGroup({
  eyebrow,
  title,
  items,
  accentClass,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
  accentClass: string;
}) {
  return (
    <Card className="rounded-[28px] p-7 sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0] [text-wrap:balance]">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">{title}</h3>
      <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-[#98A0B3] [text-wrap:pretty] sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accentClass}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function NfcBenefits({ functional, business }: NfcBenefitsProps) {
  return (
    <>
      <SectionDivider />
      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            eyebrow="Beneficios"
            title="No se trata solo de una tarjeta bonita. Se trata de no perder oportunidades."
            description="La tarjeta no reemplaza tu sistema comercial: mejora la captura para que cada conversación tenga una ruta clara de seguimiento."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <BenefitGroup
              eyebrow="Funcional"
              title="Menos fricción, más facilidad para compartir"
              items={functional}
              accentClass="bg-[#785FDD]"
            />
            <BenefitGroup
              eyebrow="Negocio"
              title="Más contactos accionables desde cada reunión, visita o evento"
              items={business}
              accentClass="bg-[#6939E2]"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
