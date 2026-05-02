import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "COCO By Camila";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para COCO By Camila con enfoque soft luxury y CTA interno de activacion.",
  path: "/cocobycamilag",
});

export default function CocobycamilagPage() {
  return (
    <BoutiqueGalleryPreview
      brand="COCO By Camila"
      handle="@cocobycamilag"
      tagline="Moda femenina, tejidos y basicos suaves para un closet delicado, comodo y muy pulido."
      variant="blush"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink femenino, suave y clean para una marca que se mueve entre comodidad, estilo y deseo cotidiano."
      summary="La propuesta para COCO By Camila toma el rosa del logo, el tono delicado del link hub actual y la narrativa de closet esencial para construir una experiencia visual mas elegante, mas aspiracional y mejor organizada."
      typography="Playfair Display suma un acento editorial refinado para los titulares y Assistant mantiene una interfaz clara, ligera y facil de usar desde el movil para navegar colecciones, showroom y compras rapidas."
      directionCopy="Rosa empolvado, blanco roto, beige suave y acentos topo para sostener una sensacion femenina, moderna, relajada y ligeramente luxury sin verse fria."
      introBadge="Edicion preview"
      introCardCopy="Biolink soft, femenino y effortless."
      instagramTitle="Instagram y link hub actual"
      instagramCopy="La marca ya comunica una mezcla clara entre moda femenina, rebajas, showroom y compra directa. La maqueta ordena esa energia en un hub mas limpio, mas premium y mejor alineado con el universo de la marca."
      locationTitle="Showroom Medellin"
      locationCopy="COCO comunica envios nacionales y showroom en El Poblado, Medellin con cita previa. Este bloque final ayuda a reforzar confianza, cercania y disponibilidad para compra fisica o digital."
      locationLabel="El Poblado, Medellin"
      locationMapSrc="https://www.google.com/maps?q=El+Poblado,+Medellin&output=embed"
      logoSrc="/images/cocobycamilag-logo.jpg"
      instagramPreviewSrc="/images/cocobycamilag-instagram.png"
      backgroundImages={[
        "/images/cocobycamilag-look-1.jpg",
        "/images/cocobycamilag-instagram.png",
        "/images/cocobycamilag-linkhub.png",
        "/images/cocobycamilag-logo.jpg",
        "/images/cocobycamilag-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Instagram", accent: true },
        { label: "TikTok" },
        { label: "Pagina web" },
        { label: "WhatsApp" },
      ]}
      chips={[
        { label: "Moda" },
        { label: "Tejidos" },
        { label: "Showroom" },
        { label: "Closet essentials" },
      ]}
      gallery={[
        {
          src: "/images/cocobycamilag-look-1.jpg",
          alt: "Look de tejido crema con cafe y laptop, alineado a una estetica cozy y sofisticada.",
          label: "Mood de marca",
        },
        {
          src: "/images/cocobycamilag-linkhub.png",
          alt: "Captura del link hub actual con accesos directos y tono femenino suave.",
          label: "Link hub actual",
        },
        {
          src: "/images/cocobycamilag-logo.jpg",
          alt: "Logo rosa de COCO By Camila con combinacion tipografica elegante y femenina.",
          label: "Identidad",
        },
      ]}
    />
  );
}
