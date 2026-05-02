import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "BRUS";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para BRUS con enfoque premium nocturno y CTA interno de activacion.",
  path: "/brus",
});

export default function BrusPage() {
  return (
    <BoutiqueGalleryPreview
      brand="BRUS"
      handle="@brus.oficial"
      tagline="Sparkling waters, premium mixers y una experiencia gastrobar con energia nocturna y sofisticada."
      variant="noir"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink oscuro, elegante y de nightlife premium para una marca que mezcla bebida, ciudad y experiencia."
      summary="La propuesta para BRUS toma el contraste rotundo del logo, la presencia de sus cartas por sede y la narrativa gastrobar para construir una experiencia mas refinada, mas compacta y alineada con consumo premium."
      typography="Playfair Display aporta tension editorial a los titulares y Assistant mantiene una interfaz limpia, directa y facil de usar para navegar cartas, sedes y activaciones desde el movil."
      directionCopy="Negro profundo, blanco grafico y acentos sobrios para sostener una marca premium, urbana, nocturna y muy clara en su posicionamiento."
      introBadge="Edicion preview"
      introCardCopy="Biolink nocturno, premium y urbano."
      instagramTitle="Instagram y cartas por sede"
      instagramCopy="El perfil comunica una marca de bebidas premium conectada con experiencias de ciudad y sedes especificas. La maqueta organiza ese ecosistema en un hub mas claro para descubrir sedes, cartas y activaciones."
      locationTitle="Envigado y Medellin"
      locationCopy="BRUS comunica presencia en Viva Envigado, El Tesoro y Arkadia, con un enfoque gastrobar y cartas diferenciadas por punto. Este cierre ayuda a reforzar ciudad, recorrido y disponibilidad."
      locationLabel="Sedes BRUS"
      locationMapSrc="https://www.google.com/maps?q=Viva+Envigado,+Medellin&output=embed"
      logoSrc="/images/brus-logo.jpg"
      instagramPreviewSrc="/images/brus-instagram.png"
      backgroundImages={[
        "/images/brus-logo.jpg",
        "/images/brus-instagram.png",
        "/images/brus-links.png",
        "/images/brus-logo.jpg",
        "/images/brus-instagram.png",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Carta El Tesoro", accent: true },
        { label: "Carta Viva Envigado" },
        { label: "Carta Arkadia" },
        { label: "Reservas y contacto" },
      ]}
      chips={[
        { label: "Sparkling water" },
        { label: "Premium mixers" },
        { label: "Gastrobar" },
        { label: "Nightlife" },
      ]}
      gallery={[
        {
          src: "/images/brus-logo.jpg",
          alt: "Logo circular negro y blanco de BRUS con presencia fuerte y premium.",
          label: "Identidad",
        },
        {
          src: "/images/brus-links.png",
          alt: "Panel de enlaces por sede con cartas diferenciadas para cada punto de venta.",
          label: "Cartas",
        },
        {
          src: "/images/brus-instagram.png",
          alt: "Perfil de Instagram con enfoque en sedes, experiencia y bebidas premium.",
          label: "Instagram",
        },
      ]}
    />
  );
}
