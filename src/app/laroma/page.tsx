import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "LA ROMA";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para LA ROMA con enfoque soft resort y CTA interno de activacion.",
  path: "/laroma",
});

export default function LaRomaPage() {
  return (
    <BoutiqueGalleryPreview
      brand="LA ROMA"
      handle="@laroma.col"
      tagline="Basics on trend, hechos en Colombia, con una identidad solar, femenina y relajada."
      variant="mist"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink solar, fresco y femenino para una marca que mezcla basics on trend con sensibilidad resort."
      summary="La propuesta para LA ROMA toma el verde oliva del logo, el aire mediterraneo de la marca y la presencia suave del producto para construir una experiencia mas limpia, aspiracional y comercial."
      typography="Playfair Display aporta una elegancia ligera a los titulares y Assistant mantiene una interfaz clara, amable y muy facil de escanear para web, WhatsApp, ferias y contacto."
      directionCopy="Verde oliva, crema, arena y blancos suaves para sostener una sensacion de verano sereno, feminidad limpia y marca hecha en Colombia con vocacion global."
      introBadge="Edicion preview"
      introCardCopy="Biolink solar, suave y resort-ready."
      instagramTitle="Instagram y accesos de compra"
      instagramCopy="La marca ya comunica tienda fisica, girls, ferias y compra directa. La maqueta reorganiza ese universo en un hub mas limpio, mas premium y mejor alineado con su tono visual."
      locationTitle="Mall Complex Los Balsos"
      locationCopy="LA ROMA comunica presencia en Mall Complex Los Balsos Local 107, ademas de envios globales. Este cierre ayuda a reforzar punto fisico, confianza y alcance de marca."
      locationLabel="Made in Colombia"
      locationMapSrc="https://www.google.com/maps?q=Mall+Complex+Los+Balsos+Local+107+Medellin&output=embed"
      logoSrc="/images/laroma-logo.jpg"
      instagramPreviewSrc="/images/laroma-instagram.png"
      backgroundImages={[
        "/images/laroma-look-1.jpg",
        "/images/laroma-logo.jpg",
        "/images/laroma-look-1.jpg",
        "/images/laroma-logo.jpg",
        "/images/laroma-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Pagina web co", accent: true },
        { label: "WhatsApp" },
        { label: "Find us" },
        { label: "Ferias" },
      ]}
      chips={[
        { label: "Basics" },
        { label: "Trend" },
        { label: "Worldwide shipping" },
        { label: "Resort mood" },
      ]}
      gallery={[
        {
          src: "/images/laroma-look-1.jpg",
          alt: "Look blanco fresco en exterior con vegetacion exuberante y aire mediterraneo.",
          label: "Mood de marca",
        },
        {
          src: "/images/laroma-instagram.png",
          alt: "Perfil de Instagram con historias destacadas de find us, girls y ferias.",
          label: "Instagram",
        },
        {
          src: "/images/laroma-logo.jpg",
          alt: "Logo iconico de LA ROMA con sol y arco sobre fondo verde oliva.",
          label: "Identidad",
        },
      ]}
    />
  );
}
