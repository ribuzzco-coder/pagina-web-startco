import { Archivo, Archivo_Narrow } from "next/font/google";

import { createPageMetadata } from "@/lib/metadata";

import { CamilaBiondaMoraCard } from "./camila-bionda-mora-card";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-bionda-archivo",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-bionda-archivo-narrow",
});

export const metadata = createPageMetadata({
  title: "María Camila | Bionda y Mora",
  description:
    "Tarjeta profesional de Camila, fundadora de Bionda y Mora. Calzado y marroquinería en cuero hechos en Medellín.",
  path: "/biondaymora/camila",
});

export default function CamilaBiondaMoraPage() {
  return (
    <div className={`${archivo.variable} ${archivoNarrow.variable}`}>
      <CamilaBiondaMoraCard />
    </div>
  );
}
