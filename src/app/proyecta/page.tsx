import { createPageMetadata } from "@/lib/metadata";

import { ProyectaExperience } from "./proyecta-experience";

export const metadata = createPageMetadata({
  title: "Proyecta 2027 | Bionda y Mora",
  description: "Un ritual para tu próximo paso.",
  path: "/proyecta",
});

export default function ProyectaPage() {
  return <ProyectaExperience />;
}
