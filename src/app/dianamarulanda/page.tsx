import { createPageMetadata } from "@/lib/metadata";

import DianaMarulandaClient from "./diana-marulanda-client";

export const metadata = createPageMetadata({
  title: "Diana Marulanda",
  description:
    "Landing profesional de Diana Marulanda, estratega en expansión, con acceso directo a contacto, web e Instagram.",
  path: "/dianamarulanda",
});

export default function DianaMarulandaPage() {
  return <DianaMarulandaClient />;
}
