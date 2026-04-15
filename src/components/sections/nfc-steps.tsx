import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Nfc3dShowcase } from "../ui/nfc-3d-showcase";

type Step = {
  title: string;
  description: string;
};

type NfcStepsProps = {
  steps: readonly Step[];
};

export function NfcSteps({ steps }: NfcStepsProps) {
  return (
    <section className="cv-auto py-18 sm:py-22" id="como-funciona">
      <Container>
        <SectionTitle
          eyebrow="Cómo funciona"
          title="Tres pasos simples para pasar de una conversación a un contacto guardado"
          description="La experiencia está pensada para que el valor se entienda rápido y el siguiente paso no tenga fricción."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative rounded-[28px] p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#E625FF]/30 bg-[#E625FF]/10 text-lg font-semibold text-[#F5F7FA]">
                  {index + 1}
                </div>
                <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(230,37,255,0.36),transparent)]" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 mx-auto w-full">
          <Nfc3dShowcase />
        </div>
      </Container>
    </section>
  );
}
