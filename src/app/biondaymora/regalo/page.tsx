import { createPageMetadata } from "@/lib/metadata";
import { BiondaYMoraExperience } from "../bionda-y-mora-experience";

export const metadata = createPageMetadata({
  title: "Tu regalo de Bionda y Mora",
  description: "Participa en la ruleta de Bionda y Mora y descubre tu premio.",
  path: "/biondaymora/regalo",
});

export default function BiondaGiftPage() { return <BiondaYMoraExperience />; }
