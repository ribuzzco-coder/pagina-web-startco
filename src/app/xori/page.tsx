import { createPageMetadata } from "@/lib/metadata";

import XoriClient from "./xori-client";

export const metadata = createPageMetadata({
  title: "Xori",
  description:
    "Base visual de Xori lista para personalizar con enlaces, bloques y recursos propios.",
  path: "/xori",
});

export default function XoriPage() {
  return <XoriClient />;
}
