import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "BADU BRAND";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para BADU BRAND con enfoque accesorios minimal luxury y CTA interno de activacion.",
  path: "/badubrand",
});

export default function BaduBrandPage() {
  return (
    <BoutiqueGalleryPreview
      brand="BADU BRAND"
      handle="@badu__brand"
      tagline="Accesorios con una estetica delicada, luminosa y comercial, pensados para ventas al detal y envios amplios."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink limpio, brillante y femenino para una marca de accesorios con look minimal-luxury."
      summary="La propuesta para BADU BRAND toma el beige del branding, el tono joya del producto y la estructura de venta directa para construir una experiencia mas pulida, aspiracional y lista para convertir."
      typography="Playfair Display aporta una elegancia editorial y delicada a los titulares, mientras Assistant mantiene una interfaz clara, ligera y facil de usar para catalogo, pagos, envios y atencion directa."
      directionCopy="Beige vainilla, cafe caramelo, dorado suave y blancos calidos para sostener una sensacion femenina, delicada, premium y muy alineada con accesorios de regalo o uso diario."
      introBadge="Edicion preview"
      introCardCopy="Biolink delicado, brillante y comercial."
      instagramTitle="Instagram y accesos de compra"
      instagramCopy="La marca ya comunica ventas al detal, catalogo, pagos y envios. La maqueta reorganiza esos accesos en un hub mas limpio, mas premium y con mejor lectura de marca."
      locationTitle="Envios nacionales e internacionales"
      locationCopy="BADU BRAND comunica ventas al detal y envios nacionales e internacionales. Este cierre ayuda a reforzar facilidad de compra, disponibilidad y alcance para clientas fuera de la ciudad."
      locationLabel="Accesorios con envio"
      locationMapSrc="https://www.google.com/maps?q=Colombia&output=embed"
      logoSrc="/images/badubrand-logo.jpg"
      instagramPreviewSrc="/images/badubrand-instagram.png"
      backgroundImages={[
        "/images/badubrand-look-1.jpg",
        "/images/badubrand-logo.jpg",
        "/images/badubrand-look-1.jpg",
        "/images/badubrand-logo.jpg",
        "/images/badubrand-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Catalogo BADU BRAND", accent: true },
        { label: "WhatsApp BADU BRAND" },
        { label: "Pagos" },
        { label: "Envios" },
      ]}
      chips={[
        { label: "Accesorios" },
        { label: "Detal" },
        { label: "Envios" },
        { label: "Minimal luxury" },
      ]}
      gallery={[
        {
          src: "/images/badubrand-look-1.jpg",
          alt: "Detalle de anillo floral brillante con manicure suave y fondo calido.",
          label: "Producto hero",
        },
        {
          src: "/images/badubrand-instagram.png",
          alt: "Perfil de Instagram con historias destacadas de pagos, envios y comunidad de marca.",
          label: "Instagram",
        },
        {
          src: "/images/badubrand-logo.jpg",
          alt: "Logo de BADU BRAND en cafe sobre fondo crema con tono elegante y sereno.",
          label: "Identidad",
        },
      ]}
    />
  );
}
