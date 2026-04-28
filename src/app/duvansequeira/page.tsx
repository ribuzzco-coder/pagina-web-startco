import { createPageMetadata } from "@/lib/metadata";

import XoriClient from "../xori/xori-client";

export const metadata = createPageMetadata({
  title: "Duvan Sequeira",
  description:
    "Landing personal de Duvan Sequeira para conectar proyectos, plataformas y presencia digital.",
  path: "/duvansequeira",
});

export default function DuvanSequeiraPage() {
  return <XoriClient />;
}
