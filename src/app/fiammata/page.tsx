import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Fiammata";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Fiammata con enfoque joyeria artesanal y CTA interno de activacion.",
  path: "/fiammata",
});

export default function FiammataPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Fiammata"
      handle="@fiammataaccesorios"
      tagline="Joyeria artesanal en tejidos miyuki con color, brillo y una identidad femenina muy reconocible."
      variant="jewel"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink joya, luminoso y femenino para una marca que mezcla brillo, color y artesania."
      summary="La propuesta toma el universo visual de Fiammata y lo transforma en un biolink con personalidad propia: morado profundo, dorados suaves, perlados y fotos de producto que elevan el trabajo artesanal sin perder frescura."
      typography="Playfair Display suma elegancia editorial para titulares y Assistant mantiene la interfaz clara para botones, colecciones, puntos de venta y acciones rapidas desde el movil."
      directionCopy="Morado joya, dorado suave, marfil y destellos rosados para sostener una sensacion femenina, artesanal, luminosa y premium alineada con accesorios tejidos a mano."
      introBadge="Edicion preview"
      introCardCopy="Biolink joya, brillante y artesanal."
      instagramTitle="Instagram y web de marca"
      instagramCopy="Instagram y sitio actual ya comunican una marca fuerte, muy reconocible por su color y su universo visual. La maqueta reorganiza esa experiencia en un link hub mas aspiracional, ligero y enfocado en conversion."
      locationTitle="Medellin showroom"
      locationCopy="La marca comunica showroom en Medellin, presencia en Mall Complex Balsos y un trabajo artesanal colombiano. Este cierre ayuda a reforzar confianza, origen y punto de contacto fisico."
      locationLabel="Showroom Medellin"
      locationMapSrc="https://www.google.com/maps?q=Mall+Complex+Balsos+Medellin&output=embed"
      logoSrc="/images/fiammata-logo.jpg"
      instagramPreviewSrc="/images/fiammata-instagram.png"
      backgroundImages={[
        "/images/fiammata-look-1.jpg",
        "/images/fiammata-web.png",
        "/images/fiammata-instagram.png",
        "/images/fiammata-logo.jpg",
        "/images/fiammata-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Nueva coleccion", accent: true },
        { label: "Punto de venta" },
        { label: "Preguntas frecuentes" },
        { label: "Comprar por WhatsApp" },
      ]}
      chips={[
        { label: "Miyuki" },
        { label: "Jewelry" },
        { label: "Showroom" },
        { label: "Handcrafted" },
      ]}
      gallery={[
        {
          src: "/images/fiammata-look-1.jpg",
          alt: "Collares y dijes tejidos con mezcla de perlas, dorados y tonos pastel.",
          label: "Producto hero",
        },
        {
          src: "/images/fiammata-web.png",
          alt: "Pantalla del sitio de Fiammata con fotografias de coleccion y branding consistente.",
          label: "Web actual",
        },
        {
          src: "/images/fiammata-logo.jpg",
          alt: "Logo de Fiammata sobre fondo morado profundo y tipografia dorada.",
          label: "Identidad",
        },
      ]}
    />
  );
}
