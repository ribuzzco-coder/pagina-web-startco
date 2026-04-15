import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";

type ProductVariant = {
  name: string;
  summary: string;
  material: string;
  customization: string;
};

type NfcProductDisplayProps = {
  variants: readonly ProductVariant[];
  inquiryHref: string;
};

export function NfcProductDisplay({
  variants,
  inquiryHref,
}: NfcProductDisplayProps) {
  return (
    <>
      <SectionDivider />
      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            eyebrow="Producto"
            title="Variaciones listas para vender, presentar o personalizar segun tu marca"
            description="La idea no es dejar una tarjeta generica. Es entregarte una pieza util, coherente con tu identidad y facil de activar."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="grid gap-5">
              {variants.map((variant, index) => (
                <Card key={variant.name} className="rounded-[28px] p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                        Variacion 0{index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                        {variant.name}
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#C7CBD6]">
                      NFC Ready
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {variant.summary}
                  </p>

                  <div className="mt-5 grid gap-3 border-t border-white/8 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                        Material
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#C7CBD6]">
                        {variant.material}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B8EAF0]">
                        Personalizacion
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#C7CBD6]">
                        {variant.customization}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="relative overflow-hidden rounded-[30px] p-6 sm:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[#E625FF]/18 blur-3xl" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Mockup de producto
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                Logo, color y presencia de marca desde el primer contacto
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="aspect-[0.65] rounded-[24px] border border-white/10 bg-[linear-gradient(150deg,#202438,#131621)] p-4 shadow-[0_16px_32px_rgba(0,0,0,0.3)]" />
                <div className="aspect-[0.65] rounded-[24px] border border-[#E625FF]/18 bg-[linear-gradient(150deg,#28152F,#131621)] p-4 shadow-[0_16px_32px_rgba(0,0,0,0.3)]" />
                <div className="aspect-[0.65] rounded-[24px] border border-[#0FEFFD]/18 bg-[linear-gradient(150deg,#132833,#131621)] p-4 shadow-[0_16px_32px_rgba(0,0,0,0.3)]" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                Si ya sabes el estilo que quieres, podemos orientarte hacia una version
                mas simple, mas ejecutiva o mas custom segun tu objetivo comercial.
              </p>
              <Button href={inquiryHref} className="mt-6" size="lg" external>
                Solicitar una version personalizada
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
