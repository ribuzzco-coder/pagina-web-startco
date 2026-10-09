import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { DM_Serif_Display } from "next/font/google";
import styles from "./bionda-landing.module.css";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-bionda-display", display: "swap" });
const shop = "https://biondaymora.com";
const assets = "/images/biondaymora/site/";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;
export const metadata = createPageMetadata({ title: "Bionda y Mora | Comodidad en cada paso", description: "Botas, tenis y accesorios hechos en Colombia. Encuentra tu próxima pieza Bionda y Mora y descubre un regalo para ti.", path: "/biondaymora" });
const products = [
  { name: "Bota Convertible Vera", price: "$590.000", handle: "bota-convertible-vera-negro", image: "vera.jpg" },
  { name: "Botín Nova", price: "$390.000", handle: "botin-nova", image: "nova.jpg" },
  { name: "Tenis-Suecos Girasol", price: "$280.000", handle: "tenis-suecos-girasol-estilo-urbano-clasico", image: "girasol.jpg" },
  { name: "Botín Margarita", price: "$510.000", handle: "botin-margarita-en-cuero-con-estilo-texana", image: "margarita.jpg" },
];
const collections = [
  { name: "Botas", image: "boots-campaign.jpg", handle: "botas-todas" },
  { name: "Tenis", image: "tennis-campaign.jpg", handle: "ver-todo-tenis" },
  { name: "Accesorios", image: "accessories-campaign.jpg", handle: "accesorios-todos" },
];
export default function BiondaYMoraPage() {
  const links = [
    { name: "Comprar", detail: "Encuentra las piezas que van contigo", href: `${shop}/collections/all` },
    { name: "Instagram", detail: "Inspírate con nuestras historias", href: "https://www.instagram.com/biondaymora.col/" },
    { name: "WhatsApp", detail: "Hablemos de tu próximo par", href: "https://wa.me/573153827248" },
    { name: "Regalo", detail: "Tenemos una sorpresa para ti", href: "/biondaymora/regalo" },
  ];
  return <div className={`${styles.page} ${display.variable}`}>
    <div className={styles.announcement}>Diseñado y hecho en Colombia <span>Para acompañarte en cada paso</span></div>
    <header className={styles.header}>
      <a href={shop} {...external} aria-label="Bionda y Mora, tienda online"><Image src={`${assets}wordmark.png`} alt="Bionda y Mora" width={220} height={52} priority /></a>
      <nav aria-label="Colecciones">{collections.map(c => <a key={c.handle} href={`${shop}/collections/${c.handle}`} {...external}>{c.name}</a>)}<a href={`${shop}/pages/nosotros`} {...external}>Nosotros</a></nav>
      <Link className={styles.headerGift} href="/biondaymora/regalo">Tu regalo</Link>
    </header>
    <div className={styles.mobileActions} aria-label="Accesos rápidos">
      <a href={`${shop}/collections/all`} {...external}>Comprar</a>
      <Link href="/biondaymora/regalo">Descubre tu regalo <span aria-hidden="true">→</span></Link>
    </div>
    <section className={styles.hero}>
      <Image className={styles.desktopHero} src={`${assets}campaign-desktop.jpg`} alt="Tenis Girasol de Bionda y Mora en diferentes colores" fill priority sizes="100vw" />
      <Image className={styles.mobileHero} src={`${assets}campaign-mobile.jpg`} alt="Detalle de los tenis Girasol con accesorios florales" fill priority sizes="100vw" />
      <div className={styles.heroCopy}><p className={styles.eyebrow}>HECHAS PARA TI</p><h1>Comodidad en cada paso</h1><p>Piezas que acompañan tu estilo y tu forma de vivir el camino.</p><a className={styles.textLink} href={`${shop}/collections/all`} {...external}>Compra ahora <span aria-hidden="true">→</span></a></div>
    </section>
    <section className={styles.trust} aria-label="Beneficios de compra">
      <p><span aria-hidden="true">✦</span><strong>Pago seguro</strong><small>PSE, débito y crédito</small></p>
      <p><span aria-hidden="true">✦</span><strong>Envíos en Colombia</strong><small>Gratis desde $350.000</small></p>
      <p><span aria-hidden="true">✦</span><strong>Cambios sencillos</strong><small>30 días para elegir tu talla</small></p>
    </section>
    <nav className={styles.links} aria-label="Descubre Bionda y Mora">{links.map((item, index) => <Link key={item.name} href={item.href} {...(item.href.startsWith("https") ? external : {})}><span className={styles.number}>0{index + 1}</span><div><h2>{item.name}</h2><p>{item.detail}</p></div><span className={styles.arrow} aria-hidden="true">↗</span></Link>)}</nav>
    <section className={styles.catalog}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>LOS FAVORITOS DE SIEMPRE</p><h2>Tu próximo par <em>favorito</em></h2><p>Las piezas que ellas ya eligieron una y otra vez.</p></div>
      <div className={styles.products}>{products.map(product => <a key={product.handle} href={`${shop}/products/${product.handle}`} {...external}><div className={styles.productImage}><span className={styles.productBadge}>MÁS VENDIDO</span><Image src={`${assets}${product.image}`} alt={product.name} fill sizes="(max-width: 700px) 50vw, 25vw" /></div><div className={styles.productInfo}><h3>{product.name}</h3><p>{product.price} COP</p></div><span className={styles.productCta}>DESCUBRIR PRODUCTO <span aria-hidden="true">→</span></span></a>)}</div>
    </section>
    <section><div className={styles.sectionHeading}><p className={styles.eyebrow}>DIFERENTES FORMAS DE VIVIR EL CAMINO</p><h2>Encuentra tu <em>forma de caminar</em></h2></div><div className={styles.collections}>{collections.map(c => <a href={`${shop}/collections/${c.handle}`} key={c.handle} {...external}><Image src={`${assets}${c.image}`} alt={`Colección de ${c.name.toLowerCase()} Bionda y Mora`} fill sizes="(max-width: 700px) 100vw, 33vw" /><div><h3>{c.name}</h3><span>VER COLECCIÓN <span aria-hidden="true">→</span></span></div></a>)}</div></section>
    <section className={styles.editorial}><div className={styles.editorialCopy}><p className={styles.eyebrow}>EL VALOR DE LO BIEN HECHO</p><h2>Hecho para durar,<br /><em>diseñado para acompañarte</em></h2><p>Materiales reales y procesos artesanales. Calzado en cuero legítimo, diseñado y hecho en Colombia para acompañarte en cada paso de tu historia.</p><ul><li>Cuero legítimo en nuestro calzado</li><li>Diseño con comodidad y carácter</li><li>Manos y talento colombiano</li></ul><a className={styles.textLink} href={`${shop}/collections/all`} {...external}>Encuentra tu pieza <span aria-hidden="true">→</span></a></div><div className={styles.editorialImage}><Image src={`${assets}tennis-campaign.jpg`} alt="Tenis de cuero Bionda y Mora en una escalera de jardín" fill sizes="(max-width: 700px) 100vw, 58vw" /></div></section>
    <section className={styles.spotlight}><div className={styles.spotlightImage}><Image src={`${assets}look-campaign.jpg`} alt="Accesorios Bionda y Mora para acompañar un look cotidiano" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className={styles.spotlightCopy}><p className={styles.eyebrow}>UN LOOK, TODO LISTO</p><h2>Tu estilo también <em>viaja contigo.</em></h2><p>Accesorios hechos para llevar lo importante cerca, con la misma intención que pones en cada paso.</p><a className={styles.textLink} href={`${shop}/collections/accesorios-todos`} {...external}>Descubre los accesorios <span aria-hidden="true">→</span></a></div></section>
    <section className={`${styles.editorial} ${styles.story}`}><div className={styles.editorialCopy}><p className={styles.eyebrow}>NUESTRA HISTORIA</p><h2>Somos <em>Juanita y María Camila.</em></h2><p>Dos hermanas, dos polos opuestos, unidas para crear piezas para mujeres auténticas. Una historia hecha en Colombia, que sigue creciendo contigo.</p><a className={styles.textLink} href={`${shop}/pages/nosotros`} {...external}>Conoce toda nuestra historia <span aria-hidden="true">→</span></a></div><div className={styles.editorialImage}><Image src={`${assets}founders.jpg`} alt="Juanita y María Camila, fundadoras de Bionda y Mora" fill sizes="(max-width: 700px) 100vw, 58vw" /></div></section>
    <section className={styles.gift}><p className={styles.eyebrow}>UN DETALLE PARA TI</p><h2>Tu próximo paso puede traer <em>una sorpresa.</em></h2><p>Descubre tu regalo Bionda y Mora.</p><Link href="/biondaymora/regalo">Descubrir mi regalo <span aria-hidden="true">→</span></Link></section>
    <footer className={styles.footer}><Image src={`${assets}wordmark.png`} alt="Bionda y Mora" width={200} height={48} /><div><a href="https://wa.me/573153827248" {...external}>Hablemos por WhatsApp</a><a href="https://www.instagram.com/biondaymora.col/" {...external}>Instagram</a></div><div><a href={`${shop}/pages/politica-de-cambios-y-garantias`} {...external}>Envíos, cambios y garantía</a><a href={`${shop}/policies/privacy-policy`} {...external}>Privacidad</a></div></footer>
  </div>;
}
