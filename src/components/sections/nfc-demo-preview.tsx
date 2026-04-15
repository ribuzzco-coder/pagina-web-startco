import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

type NfcDemoPreviewProps = {
  items: readonly string[];
  inquiryHref: string;
};

export function NfcDemoPreview({ items, inquiryHref }: NfcDemoPreviewProps) {
  return (
    <section className="cv-auto py-18 sm:py-22">
      <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Demo"
            title="Así se ve la experiencia cuando alguien toca tu tarjeta"
            description="No solo entregas datos: abres un perfil ordenado para que la persona haga clic, te escriba o guarde tu contacto."
          />

          <div className="mt-8 space-y-3">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-[#C7CBD6]"
              >
                <span className="h-2 w-2 rounded-full bg-[#0FEFFD]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            La estructura del perfil digital está pensada para reducir pasos y llevar la
            atención a la acción principal.
          </p>

          <Button href={inquiryHref} className="mt-6" size="lg" external>
            Quiero ver mi versión
          </Button>
        </div>

        <Card className="rounded-[32px] p-5 sm:p-7">
          <div className="mx-auto max-w-[360px] rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#0D1017,#171A28)] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
            <div className="rounded-[28px] border border-white/8 bg-white/[0.035] p-5">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-[22px] bg-[linear-gradient(135deg,#E625FF,#0FEFFD)]" />
                <div>
                  <p className="text-lg font-semibold text-[#F5F7FA]">RiBuzz Studio</p>
                  <p className="text-sm text-[#98A0B3]">Tarjeta NFC para vender mejor</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-[18px] border border-white/8 bg-white/[0.04] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#E7B0EE]">
                    CTA principal
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#F5F7FA]">Hablar por WhatsApp</p>
                </div>
                <div className="rounded-[18px] border border-white/8 bg-white/[0.04] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#B8EAF0]">
                    CTA secundaria
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#F5F7FA]">
                    Guardar contacto y ver portafolio
                  </p>
                </div>
                <div className="rounded-[18px] border border-white/8 bg-white/[0.04] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#98A0B3]">
                    Enlaces activos
                  </p>
                  <p className="mt-2 text-sm text-[#F5F7FA]">
                    Sitio web, Instagram, menú, agenda o catálogo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
