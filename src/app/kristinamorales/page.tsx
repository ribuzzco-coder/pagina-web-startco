import { createPageMetadata } from "@/lib/metadata";

import KristinaMoralesClient from "./kristina-morales-client";

export const metadata = createPageMetadata({
  title: "Kristina Morales",
  description:
    "Tarjeta digital Comviajes de Kristina Morales con acceso directo a WhatsApp, correo e Instagram.",
  path: "/kristinamorales",
});

export default function KristinaMoralesPage() {
  return <KristinaMoralesClient />;
}
