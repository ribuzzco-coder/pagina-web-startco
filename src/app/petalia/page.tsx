import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Petalia";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Petalia con enfoque pets & humans y CTA interno de activacion.",
  path: "/petalia",
});

export default function PetaliaPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Petalia"
      handle="@somospetalia"
      tagline="Accesorios para humanos inspirados en mascotas, con un tono sensible, ilustrado y lleno de afecto."
      variant="blush"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink tierno, sensible y con identidad propia para una marca que une pets & humans."
      summary="La propuesta para Petalia toma el universo visual del logo y de sus productos inspirados en mascotas para construir una experiencia mas calida, mas emocional y mucho mas memorable desde el primer scroll."
      typography="Playfair Display aporta un tono editorial y afectivo a los titulares, mientras Assistant mantiene una interfaz amable, clara y facil de recorrer desde el movil."
      directionCopy="Rosa empolvado, miel suave, verde petroleo y acentos crema para sostener una sensacion femenina, ilustrada, emocional y cercana al mundo pet premium."
      introBadge="Edicion preview"
      introCardCopy="Biolink sensible, pet lover y encantador."
      instagramTitle="Instagram con comunidad pet lover"
      instagramCopy="El perfil comunica una marca centrada en el amor incondicional por mascotas de todas las razas y criollos. La maqueta convierte ese mensaje en un hub mas pulido, emocional y orientado a descubrir productos y puntos de venta."
      locationTitle="Colombia y tiendas"
      locationCopy="Petalia habla de calidad, estilo y amor por los animales, y ademas muestra presencia comercial a traves de tiendas y comunidad. Este cierre ayuda a reforzar cercania, confianza y alcance de marca."
      locationLabel="Pets & Humans"
      locationMapSrc="https://www.google.com/maps?q=Colombia&output=embed"
      logoSrc="/images/petalia-logo.jpg"
      instagramPreviewSrc="/images/petalia-instagram.png"
      backgroundImages={[
        "/images/petalia-look-1.jpg",
        "/images/petalia-look-2.jpg",
        "/images/petalia-instagram.png",
        "/images/petalia-logo.jpg",
        "/images/petalia-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Productos", accent: true },
        { label: "Tiendas" },
        { label: "Pet lovers" },
        { label: "Comprar por WhatsApp" },
      ]}
      chips={[
        { label: "Pets" },
        { label: "Humans" },
        { label: "Accesorios" },
        { label: "Pet lover" },
      ]}
      gallery={[
        {
          src: "/images/petalia-look-1.jpg",
          alt: "Separador o clip inspirado en gato con detalles delicados y fondo suave.",
          label: "Producto hero",
        },
        {
          src: "/images/petalia-look-2.jpg",
          alt: "Llavero ilustrado inspirado en perro sostenido frente a una mascota real.",
          label: "Conexion emocional",
        },
        {
          src: "/images/petalia-logo.jpg",
          alt: "Logo ilustrado de Petalia con figura femenina y compania animal.",
          label: "Identidad",
        },
      ]}
    />
  );
}
