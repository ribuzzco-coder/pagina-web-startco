import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Engracia";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Engracia con enfoque boutique femenino y CTA interno de activacion.",
  path: "/engracia",
});

export default function EngraciaPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Engracia"
      handle="@engraciamoda"
      tagline="Moda femenina con mucho estilo para mujeres versatiles, con actitud y gusto por lo comercial bien presentado."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink femenino, comercial y con acento boutique para una marca hecha para mujeres versatiles."
      summary="La propuesta para Engracia toma el logo aqua y miel, el enfoque de ventas directas y la narrativa de moda femenina con actitud para construir una experiencia mas limpia, mas atractiva y enfocada en conversion."
      typography="Playfair Display aporta una presencia editorial refinada a los titulares y Assistant mantiene una interfaz clara, amable y facil de recorrer para web, WhatsApp, sale y distribuidores."
      directionCopy="Aqua suave, dorado miel, crema y tonos neutros para sostener una sensacion femenina, comercial, cercana y con aspiracion boutique sin perder practicidad."
      introBadge="Edicion preview"
      introCardCopy="Biolink boutique, femenino y comercial."
      instagramTitle="Instagram y accesos de venta"
      instagramCopy="El perfil comunica una marca muy activa en producto, tips de moda, tiendas, distribuidores y venta directa. La maqueta reorganiza esos accesos en un hub visual mas claro y con mejor jerarquia comercial."
      locationTitle="Complex Los Balsos"
      locationCopy="Engracia comunica presencia en Complex Los Balsos oficina 204 y envios a nivel nacional. Este cierre ayuda a reforzar confianza, ubicacion fisica y facilidad de compra desde cualquier ciudad."
      locationLabel="Complex Los Balsos"
      locationMapSrc="https://www.google.com/maps?q=Complex+Los+Balsos+Medellin&output=embed"
      logoSrc="/images/engracia-logo.jpg"
      instagramPreviewSrc="/images/engracia-instagram.png"
      backgroundImages={[
        "/images/engracia-look-1.jpg",
        "/images/engracia-instagram.png",
        "/images/engracia-links.png",
        "/images/engracia-logo.jpg",
        "/images/engracia-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Pagina web", accent: true },
        { label: "WhatsApp" },
        { label: "Facebook" },
        { label: "Prendas en sale" },
      ]}
      chips={[
        { label: "Moda femenina" },
        { label: "Sale" },
        { label: "Tiendas" },
        { label: "Distribuidores" },
      ]}
      gallery={[
        {
          src: "/images/engracia-look-1.jpg",
          alt: "Faldas plisadas en tonos neutros presentadas de forma limpia y comercial.",
          label: "Producto hero",
        },
        {
          src: "/images/engracia-links.png",
          alt: "Panel de enlaces con accesos a web, WhatsApp, Facebook y sale.",
          label: "Accesos",
        },
        {
          src: "/images/engracia-logo.jpg",
          alt: "Logo de Engracia con tipografia aqua y detalles miel en clave femenina.",
          label: "Identidad",
        },
      ]}
    />
  );
}
