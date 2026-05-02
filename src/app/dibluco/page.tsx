import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Diblu.co";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Diblu.co con enfoque fashion premium y CTA interno de activacion.",
  path: "/dibluco",
});

export default function DibluCoPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Diblu"
      handle="@diblu.co"
      variant="mist"
      previewLabel="Preview biolink"
      previewHeading="Un biolink editorial para una marca de ropa femenina con aire premium y atemporal."
      tagline="Disenos exclusivos, calidad premium y elegancia atemporal para mujeres que quieren vestir con presencia."
      summary="La propuesta visual de Diblu.co se apoya en una estetica fashion mas limpia y refinada: siluetas femeninas, tonos frios suaves, fotografia de look completo y una lectura compacta tipo link hub."
      typography="Playfair Display mantiene el gesto elegante y editorial, mientras Assistant hace que los botones y textos de apoyo se sientan claros, modernos y faciles de escanear en movil."
      directionCopy="Paleta azul grisaceo, blanco humo, sombras suaves y contraste calido en fotografia para transmitir sofisticacion femenina sin perder cercania comercial."
      introBadge="Edicion preview"
      introCardCopy="Biolink elegante, femenino y contemporaneo."
      instagramTitle="Referencia visual del perfil"
      instagramCopy="El perfil de Instagram respalda la sensacion premium de Diblu: moda femenina, composiciones pulidas y una mezcla de cercania comercial con imagen de marca mas aspiracional."
      locationTitle="Medellin, Colombia"
      locationCopy="Diblu comunica diseno exclusivo desde Medellin con envios nacionales. Este bloque ayuda a cerrar el biolink con ubicacion clara y una sensacion de marca real, presente y lista para vender."
      locationLabel="Envios nacionales"
      locationMapSrc="https://www.google.com/maps?q=Medellin%20Colombia&output=embed"
      logoSrc="/images/diblu-logo.jpg"
      instagramPreviewSrc="/images/diblu-instagram.png"
      backgroundImages={[
        "/images/diblu-look-1.jpg",
        "/images/diblu-look-2.jpg",
        "/images/diblu-look-1.jpg",
        "/images/diblu-instagram.png",
        "/images/diblu-look-2.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Ver catalogo", accent: true },
        { label: "Comprar por WhatsApp" },
        { label: "Nueva coleccion" },
        { label: "Asesorias" },
      ]}
      chips={[
        { label: "Ropa femenina" },
        { label: "Calidad premium" },
        { label: "Diseno exclusivo" },
        { label: "Elegancia atemporal" },
      ]}
      gallery={[
        {
          src: "/images/diblu-look-1.jpg",
          alt: "Look completo femenino con estampados tropicales y silueta elegante.",
          label: "Editorial",
        },
        {
          src: "/images/diblu-look-2.jpg",
          alt: "Detalle de prenda con rayas suaves, luz calida y estilismo delicado.",
          label: "Detalle",
        },
        {
          src: "/images/diblu-look-1.jpg",
          alt: "Moda pensada para una mujer segura, femenina y visualmente pulida.",
          label: "Mood fashion",
        },
      ]}
    />
  );
}
