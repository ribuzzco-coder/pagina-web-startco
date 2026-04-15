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
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-[#F5F7FA]">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#F5F7FA]">
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
