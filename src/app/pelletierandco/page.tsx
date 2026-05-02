import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Pelletier & Co.";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Pelletier & Co. con enfoque gourmet-editorial y CTA interno de activacion.",
  path: "/pelletierandco",
});

export default function PelletierAndCoPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Pelletier & Co."
      handle="@pelletierandco"
      tagline="Sirops concentrados para sodas y cocteles con una identidad viajera, gourmet y muy editorial."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink calido, gastronomico y viajero para una marca que invita a saborear el mundo."
      summary="La propuesta para Pelletier & Co. toma su universo de exploracion, el tono artesanal del producto y la promesa de viajar por sabores para construir una experiencia mas refinada, apetecible y memorable."
      typography="Playfair Display aporta elegancia gastronomica y una sensacion de bitacora editorial, mientras Assistant mantiene una interfaz clara y muy facil de usar para compra, recetas y portafolio."
      directionCopy="Marfil, sepia, cafe especiado y acentos miel para sostener una sensacion de marca gourmet, exploradora y premium sin perder cercania comercial."
      introBadge="Edicion preview"
      introCardCopy="Biolink gourmet, viajero y sensorial."
      instagramTitle="Instagram y rutas de compra"
      instagramCopy="La marca ya comunica compra en Colombia y Panama, junto con talleres y recetas. La maqueta reorganiza ese ecosistema en un hub mas limpio para navegar sabores, portafolio y conversion."
      locationTitle="Colombia y Panama"
      locationCopy="Pelletier & Co. comunica disponibilidad comercial en Colombia y Panama, con una propuesta de siropes inspirados en regiones del mundo. Este cierre ayuda a reforzar alcance, distribucion y universo de marca."
      locationLabel="Saborea el mundo"
      locationMapSrc="https://www.google.com/maps?q=Medellin,+Colombia&output=embed"
      logoSrc="/images/pelletierandco-logo.jpg"
      instagramPreviewSrc="/images/pelletierandco-instagram.png"
      backgroundImages={[
        "/images/pelletierandco-product.jpg",
        "/images/pelletierandco-logo.jpg",
        "/images/pelletierandco-links.png",
        "/images/pelletierandco-product.jpg",
        "/images/pelletierandco-logo.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Tienda online Colombia", accent: true },
        { label: "Compra en Panama" },
        { label: "Recetario Pelletier" },
        { label: "Portafolio Bares & Restaurantes" },
      ]}
      chips={[
        { label: "Sirops" },
        { label: "Cocteles" },
        { label: "Sodas" },
        { label: "Sabores del mundo" },
      ]}
      gallery={[
        {
          src: "/images/pelletierandco-product.jpg",
          alt: "Botella de sirope Pelletier & Co. iluminada con una atmosfera calida y sensorial.",
          label: "Producto",
        },
        {
          src: "/images/pelletierandco-instagram.png",
          alt: "Perfil de Instagram de Pelletier & Co. con narrativa de sabores, compra y marca.",
          label: "Instagram",
        },
        {
          src: "/images/pelletierandco-logo.jpg",
          alt: "Logo de Pelletier & Co. sobre fondo cartografico con aire viajero y editorial.",
          label: "Identidad",
        },
      ]}
    />
  );
}
