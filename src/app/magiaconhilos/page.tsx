import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Magia con hilos";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Magia con hilos con enfoque artesanal, suave y CTA interno de activacion.",
  path: "/magiaconhilos",
});

export default function MagiaConHilosPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Magia con Hilos"
      handle="@magiaconhilos_col"
      variant="blush"
      previewLabel="Preview biolink"
      previewHeading="Un biolink dulce, artesanal y emocional para una marca hecha a mano."
      tagline="Velas y macrame hechos a mano para decorar, regalar y sentir. Cada pieza lleva intencion."
      summary="La direccion visual para Magia con hilos se apoya en rosas suaves, lila, crema y texturas delicadas para transmitir regalo, calidez y ese tono de detalle hecho con amor."
      typography="Playfair Display mantiene un aire romantico y delicado, mientras Assistant sostiene una lectura clara en botones, descripcion y bloques funcionales del biolink."
      directionCopy="Paleta rosa empolvado, marfil, lavanda suave y acentos calidos para que el biolink se sienta artesanal, femenino y emocional sin perder limpieza visual."
      introBadge="Edicion preview"
      introCardCopy="Biolink suave, artesanal y lleno de intencion."
      instagramTitle="Referencia visual del perfil"
      instagramCopy="El perfil de Instagram comunica una marca tejida a mano, sensible y muy regalable. La composicion visual prioriza ternura, detalle y una sensacion de obsequio especial."
      locationTitle="Medellin, Colombia"
      locationCopy="Magia con hilos nace desde Medellin y se presenta como una marca artesanal pensada para decorar, regalar y acompanar momentos especiales con piezas hechas a mano."
      locationLabel="Pide el tuyo por DM"
      locationMapSrc="https://www.google.com/maps?q=Medellin%20Colombia&output=embed"
      logoSrc="/images/magia-con-hilos-logo.png"
      instagramPreviewSrc="/images/magia-con-hilos-instagram.png"
      backgroundImages={[
        "/images/magia-con-hilos-look-1.jpg",
        "/images/magia-con-hilos-look-2.jpg",
        "/images/magia-con-hilos-look-1.jpg",
        "/images/magia-con-hilos-instagram.png",
        "/images/magia-con-hilos-look-2.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Whatsapp", accent: true },
        { label: "Catalogo Magia con Hilos" },
        { label: "Catalogo Navidad" },
        { label: "Regalos especiales" },
      ]}
      chips={[
        { label: "Hecho a mano" },
        { label: "Velas artesanales" },
        { label: "Macrame decorativo" },
        { label: "Para regalar" },
      ]}
      gallery={[
        {
          src: "/images/magia-con-hilos-look-1.jpg",
          alt: "Bouquet de velas florales en tonos pastel con una sensacion delicada y regalable.",
          label: "Bouquet floral",
        },
        {
          src: "/images/magia-con-hilos-look-2.jpg",
          alt: "Composicion de velas y flores en empaque con forma de corazon para regalo especial.",
          label: "Caja corazon",
        },
        {
          src: "/images/magia-con-hilos-look-2.jpg",
          alt: "Universo visual romantico y artesanal pensado para momentos especiales.",
          label: "Mood romantico",
        },
      ]}
    />
  );
}
