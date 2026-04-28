import { createPageMetadata } from "@/lib/metadata";

import NeoMechClient from "./neomech-client";

export const metadata = createPageMetadata({
  title: "Neo-Mech",
  description:
    "Plantilla base de Neo-Mech lista para personalizar con enlaces, bloques y recursos propios.",
  path: "/neomech",
});

export default function NeoMechPage() {
  return <NeoMechClient />;
}
