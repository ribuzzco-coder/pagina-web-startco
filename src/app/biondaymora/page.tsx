import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Bionda y Mora";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Bionda y Mora con enfoque premium, cuero y CTA interno de activacion.",
  path: "/biondaymora",
});

export default function BiondaYMoraPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Bionda y Mora"
      handle="@biondaymora.col"
      tagline="Zapatos, bolsos y accesorios en cuero con una estetica calida, femenina y sofisticada."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink elegante, calido y premium para una marca donde cada paso comunica transformacion."
      summary="La propuesta toma la identidad tierra de Bionda y Mora y la convierte en un biolink mas pulido: tonos cuero, fondos suaves, producto en primer plano y una experiencia mobile-first lista para presentar catalogo, comunidad y activacion."
      typography="Playfair Display aporta una sensacion editorial y refinada para los titulares, mientras Assistant mantiene una navegacion clara, ligera y facil de escanear en botones, subtitulos y bloques informativos."
      directionCopy="Terracota, caramelo, arena y cafe profundo para reforzar una marca femenina, hecha en cuero, cercana a la moda y con una sensacion premium sin perder calidez."
      introBadge="Edicion preview"
      introCardCopy="Biolink cuero, femenino y sofisticado."
      instagramTitle="Instagram con identidad clara"
      instagramCopy="El perfil ya comunica una marca muy definida: zapatos, bolsos y accesorios en cuero con una narrativa de transformacion, envio nacional y raiz Medellin. La maqueta ordena esa energia en un hub mas limpio y aspiracional."
      locationTitle="Medellin, Colombia"
      locationCopy="La marca comunica produccion 100% cuero, 100% hecha en Medellin y envios gratis a todo Colombia. Este bloque final ayuda a cerrar con origen, confianza y alcance comercial."
      locationLabel="Hecho en Medellin"
      locationMapSrc="https://www.google.com/maps?q=Medellin,+Colombia&output=embed"
      logoSrc="/images/biondaymora-logo.jpg"
      instagramPreviewSrc="/images/biondaymora-instagram.png"
      backgroundImages={[
        "/images/biondaymora-look-1.jpg",
        "/images/biondaymora-look-2.jpg",
        "/images/biondaymora-instagram.png",
        "/images/biondaymora-logo.jpg",
        "/images/biondaymora-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Catalogo", accent: true },
        { label: "Ideas outfits" },
        { label: "Guia de tallas" },
        { label: "Compra aqui" },
      ]}
      chips={[
        { label: "Zapatos" },
        { label: "Bolsos" },
        { label: "Accesorios" },
        { label: "Cuero" },
      ]}
      gallery={[
        {
          src: "/images/biondaymora-look-1.jpg",
          alt: "Botas negras en cuero con silueta limpia y presencia sofisticada.",
          label: "Producto hero",
        },
        {
          src: "/images/biondaymora-look-2.jpg",
          alt: "Accesorios en cuero tono miel con herrajes dorados y uso funcional diario.",
          label: "Accesorios",
        },
        {
          src: "/images/biondaymora-logo.jpg",
          alt: "Logo circular en tono caramelo que resume la identidad visual de la marca.",
          label: "Identidad",
        },
      ]}
    />
  );
}
