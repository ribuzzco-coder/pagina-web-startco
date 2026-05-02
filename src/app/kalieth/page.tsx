import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Kalieth";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Kalieth con enfoque jewelry luxury y CTA interno de activacion.",
  path: "/kalieth",
});

export default function KaliethPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Kalieth"
      handle="@kaliethjewelry"
      tagline="Artisan luxury jewelry made in Colombia, con una energia tropical, femenina y refinada."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink joya, tropical y elegante para una marca artesanal con alma caribena."
      summary="La propuesta para Kalieth toma el dorado del logo, la narrativa de lujo artesanal y la conexion con Cartagena para construir una experiencia mas pulida, aspiracional y lista para convertir desde el movil."
      typography="Playfair Display aporta sofisticacion editorial a los titulares y Assistant mantiene una interfaz clara, amable y facil de recorrer para pagina, catalogo, WhatsApp y storytelling de marca."
      directionCopy="Blanco calido, dorado, arena y tonos marinos suaves para sostener una sensacion artesanal, tropical, femenina y premium alineada con joyeria hecha en Colombia."
      introBadge="Edicion preview"
      introCardCopy="Biolink joya, artesanal y tropical."
      instagramTitle="Instagram y link hub actual"
      instagramCopy="La marca ya comunica lujo artesanal, catalogo, video de proceso y venta por WhatsApp. La maqueta reorganiza ese universo en un hub mas refinado y mejor jerarquizado para inspirar y vender."
      locationTitle="Cartagena y Bogota"
      locationCopy="Kalieth comunica presencia en Cartagena y Bogota, ademas de envios a todos los destinos. Este cierre ayuda a reforzar confianza, alcance y origen colombiano con vocacion internacional."
      locationLabel="Made in Colombia"
      locationMapSrc="https://www.google.com/maps?q=Calle+Santo+Domingo+33-16+Cartagena&output=embed"
      logoSrc="/images/kalieth-logo.jpg"
      instagramPreviewSrc="/images/kalieth-instagram.png"
      backgroundImages={[
        "/images/kalieth-look-1.jpg",
        "/images/kalieth-logo.jpg",
        "/images/kalieth-linkhub.png",
        "/images/kalieth-logo.jpg",
        "/images/kalieth-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Visita y compra desde nuestra pagina", accent: true },
        { label: "Conoce nuestro catalogo en WhatsApp" },
        { label: "Hablemos en WhatsApp" },
        { label: "Video asi lo hacemos" },
      ]}
      chips={[
        { label: "Jewelry" },
        { label: "Artisan luxury" },
        { label: "Cartagena" },
        { label: "Shipping worldwide" },
      ]}
      gallery={[
        {
          src: "/images/kalieth-look-1.jpg",
          alt: "Modelo frente al mar usando brazaletes y anillos dorados en una escena caribena.",
          label: "Mood tropical",
        },
        {
          src: "/images/kalieth-linkhub.png",
          alt: "Captura del link hub actual con accesos a pagina, catalogo y video de proceso.",
          label: "Link hub actual",
        },
        {
          src: "/images/kalieth-logo.jpg",
          alt: "Logo dorado de Kalieth sobre fondo blanco con lenguaje de lujo artesanal.",
          label: "Identidad",
        },
      ]}
    />
  );
}
