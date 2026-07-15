import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

type UseCase = {
  title: string;
  description: string;
};

type NfcUseCasesProps = {
  items: readonly UseCase[];
};

export function NfcUseCases({ items }: NfcUseCasesProps) {
  return (
    <section className="section-soft cv-auto py-18 sm:py-22">
      <Container>
        <SectionTitle
          eyebrow="Casos de uso"
          title="Una misma tecnología, distintos escenarios de conversión"
          description="Mostramos contextos concretos para que cada perfil se vea reflejado rápido y entienda el uso correcto."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item, index) => (
            <Card key={item.title} className="rounded-[26px] p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-sm font-semibold text-white shadow-[0_0_14px_rgba(105,57,226,0.32)]">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#E4DFF7]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
