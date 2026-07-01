import { createPageMetadata } from "@/lib/metadata";

import CristinaMoralesClient from "./cristina-morales-client";

export const metadata = createPageMetadata({
  title: "Cristina Morales",
  description:
    "Tarjeta digital Comviajes de Cristina Morales con acceso directo a WhatsApp, correo e Instagram.",
  path: "/cristinamorales",
});

export default function CristinaMoralesPage() {
  return <CristinaMoralesClient />;
}
