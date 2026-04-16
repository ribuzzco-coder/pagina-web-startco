import { RewardVault } from "@/components/sections/reward-vault";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Regalos",
  description:
    "Una caja desbloqueable con recursos de valor de RiBuzz para leer o descargar.",
  path: "/regalos",
});

export default function RegalosPage() {
  return (
    <section className="cv-auto py-18 sm:py-24">
      <RewardVault />
    </section>
  );
}
