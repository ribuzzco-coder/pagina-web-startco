import { createPageMetadata } from "@/lib/metadata";

import { BiondaYMoraExperience } from "./bionda-y-mora-experience";

export const metadata = createPageMetadata({
  title: "Gira y gana con Bionda y Mora",
  description:
    "Participa en la ruleta de Bionda y Mora y gana descuentos o una pañoleta gratis.",
  path: "/biondaymora",
});

export default function BiondaYMoraPage() {
  return <BiondaYMoraExperience />;
}
