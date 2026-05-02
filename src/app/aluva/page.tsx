import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Aluva";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Aluva con enfoque pop-tech y CTA interno de activacion.",
  path: "/aluva",
});

export default function AluvaPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Aluva"
      handle="@aluvacollection"
      variant="blush"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink rosado, limpio y pop para una marca de accesorios tech con energia joven."
      tagline="Cases, stickers y tote bags con un lenguaje visual playful para personalizar tu dia a dia tech."
      summary="La propuesta para Aluva ahora se apoya mucho mas en el rosa de la marca: una estetica candy, limpia y juvenil que conserva el tono de personalizacion del link hub original pero con una presentacion mas cuidada."
      typography="Playfair Display aporta un toque de estilo a los titulares y Assistant mantiene una interfaz clara para catalogos, botones y llamadas rapidas desde el movil."
      directionCopy="Rosa pastel, rosa candy, blanco cremoso y acentos suaves para transmitir una marca joven, tierna, creativa y lista para vender productos de personalizacion."
      introBadge="Edicion preview"
      introCardCopy="Biolink rosado, pop y personalizable."
      instagramTitle="Referencia visual del perfil"
      instagramCopy="Instagram y Linktree muestran una marca cercana, juvenil y muy visual. La propuesta aterriza ese lenguaje a una maqueta mas limpia, mas rosada y con una sensacion de personalizacion mas consistente."
      locationTitle="Colombia"
      locationCopy="Aluva comunica envios a todo Colombia y una marca llena de amor enfocada en personalizar accesorios cotidianos. Este cierre ayuda a reforzar cercania y disponibilidad."
      locationLabel="Envios a todo Colombia"
      locationMapSrc="https://www.google.com/maps?q=Colombia&output=embed"
      logoSrc="/images/aluva-logo.jpg"
      instagramPreviewSrc="/images/aluva-instagram.png"
      backgroundImages={[
        "/images/aluva-look-1.jpg",
        "/images/aluva-look-2.jpg",
        "/images/aluva-logo.jpg",
        "/images/aluva-instagram.png",
        "/images/aluva-look-2.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Personaliza por la web", accent: true },
        { label: "Personaliza por WhatsApp" },
        { label: "Catalogo de stickers" },
        { label: "Tote bags" },
      ]}
      chips={[
        { label: "Cases" },
        { label: "Stickers" },
        { label: "Tote bags" },
        { label: "Daily tech" },
      ]}
      gallery={[
        {
          src: "/images/aluva-look-1.jpg",
          alt: "Hoodie rosa con mensaje gráfico que conecta con una estética joven y relajada.",
          label: "Mood urbano",
        },
        {
          src: "/images/aluva-look-2.jpg",
          alt: "Case con stickers rojos y rosa mostrado como producto de uso diario.",
          label: "Producto hero",
        },
        {
          src: "/images/aluva-logo.jpg",
          alt: "Logo rosado de Aluva con identidad visual suave y juvenil.",
          label: "Identidad",
        },
      ]}
    />
  );
}
