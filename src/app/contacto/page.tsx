import { createPageMetadata } from "@/lib/metadata";

import ContactoClient from "./contacto-client";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Hub rápido de enlaces de RiBuzz para conectar redes, diagnóstico, sitio principal y próximos recursos de valor.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <ContactoClient />;
}
