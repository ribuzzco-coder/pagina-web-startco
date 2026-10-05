import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import styles from "./bionda-landing.module.css";

export const metadata = createPageMetadata({
  title: "Bionda y Mora | Comodidad en cada paso",
  description:
    "Descubre botas, tenis y accesorios de Bionda y Mora. Explora la tienda, conversa con nosotras y participa en la ruleta.",
  path: "/biondaymora",
});

export default function BiondaYMoraPage() {
  const links = [
    { name: "Comprar", detail: "Botas, tenis y accesorios", href: "https://biondaymora.com/collections/all" },
    { name: "Instagram", detail: "Historias y nuevos looks", href: "https://www.instagram.com/biondaymora.col/" },
    { name: "WhatsApp", detail: "Tallas y disponibilidad", href: "https://wa.me/573153827248" },
    { name: "Regalo Bionda y Mora", detail: "Tu momento de suerte", href: "/biondaymora/regalo" },
  ];
  const products = [
    { name: "Bota Convertible Vera", handle: "bota-convertible-vera-negro", image: "8_c53fc7c8-49c4-4339-93d4-17ae1ebc47e1.jpg?v=1760995217" },
    { name: "Botín Nova", handle: "botin-nova", image: "1_f93d5e90-2fb5-4d1a-8261-eb32732c5ff7.jpg?v=1760978912" },
    { name: "Tenis-Suecos Girasol", handle: "tenis-suecos-girasol-estilo-urbano-clasico", image: "HG401726.jpg?v=1789070281" },
    { name: "Set Viajera", handle: "set-viajera", image: "HG408969.jpg?v=1776400200" },
  ];
  return <main className={styles.page}>
    <header className={styles.header}>
      <Image src="/images/biondaymora-logo.jpg" alt="Bionda y Mora" width={64} height={64} priority />
      <span>BIONDA Y MORA</span>
      <a href="https://biondaymora.com/" target="_blank" rel="noopener noreferrer">Tienda online</a>
    </header>
    <section className={styles.hero}>
      <Image src="/images/biondaymora-look-1.jpg" alt="Look de Bionda y Mora con accesorios" fill priority sizes="100vw" />
      <div className={styles.heroCopy}>
        <p>HECHAS PARA TI</p>
        <h1>Bionda y Mora</h1>
        <h2>Comodidad en cada paso</h2>
        <p>Botas y accesorios que acompañan tu forma de vivir el camino.</p>
        <a href="https://biondaymora.com/collections/all" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
      </div>
    </section>
    <nav className={styles.links} aria-label="Descubre Bionda y Mora">
      {links.map((item, index) => <Link key={item.name} href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}>
        <span className={styles.number}>0{index + 1}</span><div><h2>{item.name}</h2><p>{item.detail}</p></div><span aria-hidden="true">↗</span>
      </Link>)}
    </nav>
    <section className={styles.catalog}>
      <div className={styles.sectionHeading}><h2>Encuentra tu próxima pieza</h2><a href="https://biondaymora.com/collections/all" target="_blank" rel="noopener noreferrer">Ver todo</a></div>
      <div className={styles.products}>{products.map(product => <a key={product.handle} href={`https://biondaymora.com/products/${product.handle}`} target="_blank" rel="noopener noreferrer">
        <div className={styles.productImage}><Image unoptimized src={`https://cdn.shopify.com/s/files/1/0596/7160/9415/files/${product.image}`} alt={product.name} fill sizes="(max-width: 700px) 50vw, 25vw" /></div><h3>{product.name}</h3><p>Descubrir producto ↗</p>
      </a>)}</div>
      <div className={styles.collections}><a href="https://biondaymora.com/collections/botas-todas" target="_blank" rel="noopener noreferrer">Botas</a><a href="https://biondaymora.com/collections/ver-todo-tenis" target="_blank" rel="noopener noreferrer">Tenis</a><a href="https://biondaymora.com/collections/accesorios-todos" target="_blank" rel="noopener noreferrer">Accesorios</a></div>
    </section>
    <section className={styles.story}><p>NUESTRA HISTORIA</p><h2>Dos hermanas. Una forma de caminar.</h2><p>Juanita y María Camila crean piezas que unen comodidad, estilo y propósito, diseñadas y producidas en Colombia.</p><a href="https://biondaymora.com/pages/nosotros" target="_blank" rel="noopener noreferrer">Conoce Bionda y Mora ↗</a></section>
    <footer className={styles.footer}><p>© Bionda y Mora</p><a href="https://biondaymora.com/pages/politica-de-cambios-y-garantias" target="_blank" rel="noopener noreferrer">Envíos, cambios y garantía</a><a href="https://biondaymora.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Privacidad</a></footer>
  </main>;
}
