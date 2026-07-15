import { permanentRedirect } from "next/navigation";

// La metodología completa ahora vive dentro de /services ("Cómo trabajamos"),
// para no duplicar el mismo contenido en tres páginas distintas.
export default function MethodologyPage() {
  permanentRedirect("/services");
}
