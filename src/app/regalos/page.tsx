import { RewardVault } from "@/components/sections/reward-vault";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Recursos para tu marca",
  description:
    "Elige un ejercicio de estrategia, comunicación, contenido o conversión y explora dos guías de oferta de RiBuzz.",
  path: "/regalos",
});

export default async function RegalosPage({ searchParams }: PageProps<"/regalos">) {
  const { desde, reto } = await searchParams;
  return (
    <section className="px-5 py-14 sm:py-20">
      <RewardVault fromDiagnosis={desde === "diagnostico"} challenge={typeof reto === "string" ? reto : undefined} />
    </section>
  );
}
