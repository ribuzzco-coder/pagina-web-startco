import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Regalos",
  description:
    "Una seccion breve para reunir documentos de valor, regalos y recursos que RiBuzz ira liberando.",
  path: "/regalos",
});

export default function RegalosPage() {
  return (
    <section className="cv-auto py-18 sm:py-24">
      <Container className="max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF9EB0]">
            Regalos RiBuzz
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#F5F7FA] sm:text-5xl">
            Recursos pequenos, utiles y listos para sumar valor.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#98A0B3] sm:text-lg">
            Aqui iremos reuniendo documentos, detalles de valor y piezas descargables
            para la comunidad de RiBuzz.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-2xl rounded-[28px] border-[#ff4d6d]/22 bg-[linear-gradient(180deg,rgba(28,14,20,0.96),rgba(17,10,14,0.98))] p-8 text-center shadow-[0_0_0_1px_rgba(255,77,109,0.12),0_0_30px_rgba(255,77,109,0.16)]">
          <p className="text-lg font-semibold text-[#F5F7FA]">
            Proximamente
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
            Esta seccion sera breve y directa. Cuando entren los primeros regalos,
            documentos o recursos, apareceran aqui.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={SITE_CONFIG.diagnosisPath} size="lg">
              Ir al diagnostico
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
