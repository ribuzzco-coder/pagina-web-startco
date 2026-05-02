import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Viana Girl";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revisé la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Viana Girl con enfoque premium y CTA interno de activacion.",
  path: "/vianagirl",
});

export default function VianaGirlPage() {
  return (
    <BoutiqueGalleryPreview
      brand={brandName}
      handle="@viana_artesanal"
      previewLabel="Preview biolink"
      previewHeading="Un Linktree bonito, mas alineado con la identidad de Viana Girl."
      tagline="Calzado artesanal hecho a mano desde Colombia para mujeres que aman lo natural, femenino y especial."
      summary="La maqueta ahora prioriza el comportamiento de un biolink: una presencia compacta, mobile-first y aspiracional, donde la marca, la foto hero y los botones son el centro de la experiencia."
      typography="Playfair Display en titulares para reforzar elegancia editorial y Assistant en la interfaz para que los botones, subtitulos y textos se sientan ligeros y faciles de escanear."
      directionCopy="Paleta crema, arena, dorado suave y cafe cacao para sostener una sensacion artesanal, femenina y premium sin verse recargada."
      introBadge="Edicion preview"
      introCardCopy="Biolink calido, femenino y artesanal."
      instagramTitle="Referencia visual del perfil"
      instagramCopy="La referencia de Instagram sale del bloque principal para que el biolink se sienta mas limpio y la presencia de marca tenga una lectura mas directa."
      locationTitle="Bucaramanga, Colombia"
      locationCopy="Viana Girl comunica una raiz artesanal hecha en Colombia. Este bloque deja visible la ubicacion de referencia de la marca dentro del biolink, con un cierre mas humano y mas cercano."
      locationLabel="Cra 6 #31-22 piso 1"
      locationMapSrc="https://www.google.com/maps?q=Bucaramanga%20Colombia&output=embed"
      logoSrc="/images/vianagirl-logo.webp"
      instagramPreviewSrc="/images/vianagirl-instagram.png"
      backgroundImages={[
        "/images/vianagirl-hero.jpg",
        "/images/vianagirl-instagram.png",
        "/images/vianagirl-hero.jpg",
        "/images/vianagirl-instagram.png",
        "/images/vianagirl-hero.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Nueva coleccion", accent: true },
        { label: "Comprar por WhatsApp" },
        { label: "Ver Instagram" },
        { label: "Guia de tallas" },
      ]}
      chips={[
        { label: "Hecho a mano" },
        { label: "Desde Colombia" },
        { label: "Estilo resort" },
        { label: "Femenino y calido" },
      ]}
      gallery={[
        {
          src: "/images/vianagirl-hero.jpg",
          alt: "Alpargatas con cintas largas, fibras naturales y look artesanal premium.",
          label: "Producto destacado",
        },
        {
          src: "/images/vianagirl-hero.jpg",
          alt: "Texturas calidas y tonos neutros que sostienen la identidad de la marca.",
          label: "Texturas",
        },
        {
          src: "/images/vianagirl-hero.jpg",
          alt: "Composicion visual pensada para verse aspiracional en movil y redes.",
          label: "Mood editorial",
        },
      ]}
    />
  );
}
