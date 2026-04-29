import { createPageMetadata } from "@/lib/metadata";

import NeoMechClient from "./neomech-client";

export const metadata = createPageMetadata({
  title: "Neo-Mech",
  description:
    "Neo-Mech transforma ideas en productos físicos hechos a medida para marcas que quieren destacar.",
  path: "/neomech",
});

export default function NeoMechPage() {
  return <NeoMechClient />;
}
