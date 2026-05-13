import { createPageMetadata } from "@/lib/metadata";

import JulianaArangoClient from "./juliana-arango-client";

export const metadata = createPageMetadata({
  title: "Juliana Arango",
  description:
    "Landing profesional de Juliana Arango, estratega comercial, con acceso directo a contacto, web e Instagram.",
  path: "/julianaarango",
});

export default function JulianaArangoPage() {
  return <JulianaArangoClient />;
}
