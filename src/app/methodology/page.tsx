import { PageHero } from "@/components/common/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Metodología",
  description:
    "La metodología de RiBuzz trabaja en cuatro fases: diagnóstico, diseño, implementación y acompañamiento.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodología RiBuzz"
        title="Diagnóstico, diseño, implementación y acompañamiento para no ejecutar a ciegas"
        description="La metodología de RiBuzz le da más peso al diagnóstico porque ahí se decide si existe un problema real de estructura comercial, dónde está y cómo conviene intervenirlo."
        asideTitle="El diagnóstico no es un trámite"
        asideText="Es la fase que recoge información, hace visible el cuello de botella y evita gastar recursos en acciones que no corrigen el sistema."
      />
    </>
  );
}
