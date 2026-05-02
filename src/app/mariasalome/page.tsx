import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Maria Salome";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Maria Salome con enfoque clean botanical y CTA interno de activacion.",
  path: "/mariasalome",
});

export default function MariaSalomePage() {
  return (
    <BoutiqueGalleryPreview
      brand="Maria Salome"
      handle="@mariasalomecol"
      tagline="Productos capilares y cuidado para el cabello con enfoque natural, experiencia de marca y una identidad amable."
      variant="mist"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink limpio, botanico y confiable para una marca capilar con trayectoria y sensibilidad natural."
      summary="La propuesta para Maria Salome toma el verde salvia del logo, el tono de bienestar del perfil y la promesa de extractos naturales para construir una experiencia mas clara, serena y comercial."
      typography="Playfair Display aporta una elegancia suave a los titulares y Assistant mantiene una interfaz clara, amable y facil de escanear para lineas, lanzamientos, testimonios y puntos de contacto."
      directionCopy="Verde salvia, blanco, gris mineral y acentos botanicos suaves para sostener una sensacion de cuidado, experiencia, confianza y bienestar."
      introBadge="Edicion preview"
      introCardCopy="Biolink botanico, confiable y capilar."
      instagramTitle="Instagram y accesos de marca"
      instagramCopy="La marca ya comunica trayectoria, extractos naturales, lanzamientos y testimonios. La maqueta reorganiza ese contenido en un hub mas pulido y mas orientado a descubrimiento y conversion."
      locationTitle="Colombia"
      locationCopy="Maria Salome comunica mas de 40 anos de experiencia y una marca colombiana enfocada en el cuidado del cabello. Este cierre ayuda a reforzar trayectoria, confianza y disponibilidad comercial."
      locationLabel="Marca colombiana"
      locationMapSrc="https://www.google.com/maps?q=Colombia&output=embed"
      logoSrc="/images/mariasalome-logo.jpg"
      instagramPreviewSrc="/images/mariasalome-links.png"
      backgroundImages={[
        "/images/mariasalome-logo.jpg",
        "/images/mariasalome-links.png",
        "/images/mariasalome-logo.jpg",
        "/images/mariasalome-links.png",
        "/images/mariasalome-logo.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Visita nuestro sitio web", accent: true },
        { label: "Facebook" },
        { label: "Nuestras lineas" },
        { label: "Testimonios" },
      ]}
      chips={[
        { label: "Cabello" },
        { label: "Naturales" },
        { label: "Colombia" },
        { label: "40+ anos" },
      ]}
      gallery={[
        {
          src: "/images/mariasalome-logo.jpg",
          alt: "Logo de Maria Salome sobre fondo salvia con una presencia amable y confiable.",
          label: "Identidad",
        },
        {
          src: "/images/mariasalome-links.png",
          alt: "Panel de enlaces y perfil con accesos al sitio web y Facebook de la marca.",
          label: "Accesos",
        },
        {
          src: "/images/mariasalome-logo.jpg",
          alt: "Aplicacion del logo como sello visual de una marca capilar enfocada en bienestar.",
          label: "Marca",
        },
      ]}
    />
  );
}
