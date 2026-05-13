import { createPageMetadata } from "@/lib/metadata";

import ClaudiaHerreraClient from "./claudia-herrera-client";

export const metadata = createPageMetadata({
  title: "Claudia Herrera",
  description:
    "Landing profesional de Claudia Herrera, ventas y operación en EEUU, con acceso directo a contacto, web e Instagram.",
  path: "/claudiaherrera",
});

export default function ClaudiaHerreraPage() {
  return <ClaudiaHerreraClient />;
}
