import { createPageMetadata } from "@/lib/metadata";

import ContactoClient from "./contacto-client";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Cuéntale al equipo de RiBuzz qué quieres mejorar en la venta de tu marca. Empieza el diagnóstico o haz una pregunta por WhatsApp.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <ContactoClient />;
}
