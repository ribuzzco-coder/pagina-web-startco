import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";

type FaqItem = {
  question: string;
  answer: string;
};

type NfcFaqProps = {
  items: readonly FaqItem[];
};

export function NfcFaq({ items }: NfcFaqProps) {
  return (
    <>
      <SectionDivider />
      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Respuestas rápidas antes de dar el siguiente paso"
            description="Dejamos solo lo necesario para resolver las dudas más comunes sin hacer pesada la lectura."
          />
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={items} />
          </div>
        </Container>
      </section>
    </>
  );
}
