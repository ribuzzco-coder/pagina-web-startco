import Image from "next/image";
import Link from "next/link";

import { createPageMetadata } from "@/lib/metadata";
import { NunaClickTracking } from "./nuna-click-tracking";

const links = {
  whatsapp: "https://wa.me/573022415996",
  website: "https://nunaamautta.com/",
  shop: "https://nunaamautta.com/collections/all",
  contact: "https://nunaamautta.com/pages/contact",
  instagram: "https://www.instagram.com/nunaamautta/",
};

const logoSrc = "/images/nunaamautta/logo.png";
const shootBase = "/images/nunaamautta/nov-2025";

const campaign = {
  name: "Universo Nuna",
  headline: "Un universo de arte slow fashion que nace para hacerte brillar",
  body: "Siluetas orgánicas, tejidos suaves y piezas pensadas para moverse contigo.",
  ctaLabel: "Comprar ahora",
  ctaHref: links.shop,
  heroImage: `${shootBase}/nuna-nov-2025-3.jpg`,
  storyImage: `${shootBase}/nuna-nov-2025-60.jpg`,
};

const moodNotes = ["Espíritu sabio", "Tejidos suaves", "Energía orgánica"] as const;

const primaryLinks = [
  {
    label: "Comprar",
    caption: "Encuentra tu próxima prenda",
    href: links.shop,
    image: `${shootBase}/nuna-nov-2025-1.jpg`,
    position: "object-[50%_0%]",
    index: "01",
  },
  {
    label: "Instagram",
    caption: "Diario visual",
    href: links.instagram,
    image: `${shootBase}/nuna-nov-2025-58.jpg`,
    position: "object-[50%_4%]",
    index: "02",
  },
  {
    label: "WhatsApp",
    caption: "Tallas y disponibilidad",
    href: links.whatsapp,
    image: `${shootBase}/nuna-nov-2025-46.jpg`,
    position: "object-[50%_7%]",
    index: "03",
  },
  {
    label: "Regalo Nuna",
    caption: "Experiencia especial",
    href: "/nunaamautta/regalo",
    image: `${shootBase}/nuna-nov-2025-22.jpg`,
    position: "object-[50%_9%]",
    index: "04",
  },
] as const;

const collections = [
  {
    name: "Nuna Esencia",
    caption: "Básicos con alma",
    href: "https://nunaamautta.com/collections/nuna-yogui-casual",
    products: [
      {
        name: "Kimono Lunar",
        href: "https://nunaamautta.com/products/kimono-lunar",
        image: "https://cdn.shopify.com/s/files/1/0823/6806/9870/files/01__kimono-lunar__google-drive__nuna-julio2026-5168.jpg?v=1790917253&width=600",
      },
      {
        name: "Pantalón Zama",
        href: "https://nunaamautta.com/products/pantalon-zama",
        image: "https://cdn.shopify.com/s/files/1/0823/6806/9870/files/01__pantalon-zama__google-drive__nuna-julio2026-5090.jpg?v=1790916207&width=600",
      },
    ],
  },
  {
    name: "Nuna Artesanal",
    caption: "Tejidas a mano, con intención",
    href: "https://nunaamautta.com/collections/nuna-artesanal",
    products: [
      {
        name: "Top Sirena",
        href: "https://nunaamautta.com/products/top-sirena",
        image: `${shootBase}/nuna-nov-2025-59.jpg`,
      },
      {
        name: "Top Capucha Alma",
        href: "https://nunaamautta.com/products/top-capucha-alma",
        image: "https://cdn.shopify.com/s/files/1/0823/6806/9870/files/01__TOP-CAPUCHA-ALMA.jpg?v=1790918033&width=600",
      },
    ],
  },
] as const;

export const metadata = createPageMetadata({
  title: "Nuna Amautta",
  description:
    "El universo de Nuna Amautta: arte slow fashion, compra online, inspiración y asesoría por WhatsApp.",
  path: "/nunaamautta",
});
metadata.openGraph = { ...metadata.openGraph, images: [{ url: `${shootBase}/nuna-nov-2025-3.jpg`, width: 1280, height: 1920, alt: "Nuna Amautta - Colección Nómada" }] };
metadata.twitter = { ...metadata.twitter, images: [`${shootBase}/nuna-nov-2025-3.jpg`] };

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logoSrc}
      alt="Nuna Amautta"
      width={408}
      height={261}
      priority
      className={`h-auto object-contain ${className}`}
    />
  );
}

function VisualLink({ item }: { item: (typeof primaryLinks)[number] }) {
  const className = "group relative block h-[12rem] overflow-hidden bg-[#d9c7a6]";
  const content = (
    <>
      <Image
        src={item.image}
        alt={item.label}
        fill
        sizes="440px"
        className={`object-cover transition duration-500 group-hover:scale-[1.03] ${item.position}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,31,20,0.8),rgba(39,31,20,0.18))]" />
      <div className="absolute inset-0 flex items-end justify-between gap-4 p-4 text-white">
        <span>
          <span className="block [font-family:var(--font-montserrat)] text-[0.64rem] font-bold uppercase tracking-[0.22em] text-white/70">
            {item.index}
          </span>
          <span className="mt-2 block [font-family:var(--font-montserrat)] text-base font-bold uppercase tracking-[0.14em]">
            {item.label}
          </span>
          <span className="mt-1 block text-xs leading-4 text-white/76">
            {item.caption}
          </span>
        </span>
        <span className="text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowIcon />
        </span>
      </div>
    </>
  );

  if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
}

export default function NunaAmauttaPage() {
  return (
    <section data-nuna-links className="-mt-[76px] min-h-screen bg-[#eee2cf] text-[#231b12] [font-family:var(--font-assistant)]">
      <NunaClickTracking />
      <div className="mx-auto min-h-screen w-full max-w-[480px] bg-[#f5ecde] shadow-[0_24px_80px_rgba(45,34,20,0.14)]">
        <div className="relative">
          <div className="relative overflow-hidden bg-[#dfcfb2] px-4 pb-5 pt-4">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#fff4e7_0%,#e4d2b5_43%,#a4874d_100%)]" />
            <div className="relative grid min-h-[68svh] grid-cols-[0.72fr_1fr] grid-rows-[auto_1fr] gap-3">
              <div className="col-span-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="[font-family:var(--font-montserrat)] text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#7a6331]">
                    01 / {campaign.name}
                  </span>
                  <span className="h-px w-10 bg-[#7a6331]/42" />
                </div>
                <LogoMark className="w-28 mix-blend-multiply" />
              </div>

              <div className="relative col-span-2 min-h-[24.5rem] overflow-hidden bg-[#d9c7a6]">
                <Image
                  src={campaign.heroImage}
                  alt="Campaña Nómada de Nuna Amautta"
                  fill
                  sizes="480px"
                  priority
                  className="object-cover object-[50%_36%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,27,18,0.02)_0%,rgba(35,27,18,0.08)_40%,rgba(35,27,18,0.68)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h1 className="mt-4 max-w-[18rem] text-2xl font-semibold leading-[1.02] drop-shadow-[0_2px_10px_rgba(35,27,18,0.32)]">
                    {campaign.headline}
                  </h1>
                  <p className="mt-3 max-w-[17rem] text-sm leading-5 text-white/86 drop-shadow-[0_2px_8px_rgba(35,27,18,0.28)]">
                    {campaign.body}
                  </p>
                  <a
                    href={campaign.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 border border-white/72 bg-transparent px-3 py-2 [font-family:var(--font-montserrat)] text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
                  >
                    {campaign.ctaLabel}
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-y border-[#dccbab]">
            {moodNotes.map((note) => (
              <div key={note} className="border-r border-[#dccbab] px-3 py-4 last:border-r-0">
                <p className="[font-family:var(--font-montserrat)] text-[0.66rem] font-bold uppercase leading-4 tracking-[0.16em] text-[#7a6331]">
                  {note}
                </p>
              </div>
            ))}
          </div>

          <div className="px-5 py-6">
            <div className="grid gap-2">
              {primaryLinks.map((item) => (
                <VisualLink key={item.label} item={item} />
              ))}
            </div>
          </div>
        </div>

        {collections.map((collection) => (
        <section key={collection.name} className="border-t border-[#dccbab] px-5 py-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="[font-family:var(--font-montserrat)] text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#876d35]">
                {collection.caption}
              </p>
              <h2 className="mt-2 [font-family:var(--font-montserrat)] text-xl font-bold leading-tight">
                {collection.name}
              </h2>
            </div>
            <a
              href={collection.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 [font-family:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.16em] text-[#7a6331]"
            >
              Ver todo
            </a>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-6">
            {collection.products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-[#dfcfb2]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized={product.image.startsWith("https://")}
                    sizes="220px"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 [font-family:var(--font-montserrat)] text-[0.72rem] font-bold uppercase leading-4 tracking-[0.1em] text-[#231b12]">
                  {product.name}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#66553b]">Ver producto <ArrowIcon /></p>
              </a>
            ))}
          </div>
        </section>
        ))}

        <section className="grid grid-cols-[0.88fr_1.12fr] border-t border-[#dccbab]">
          <a href="https://nunaamautta.com/products/top-sirena" target="_blank" rel="noopener noreferrer" aria-label="Ver Top Sirena en la tienda" className="relative block min-h-64 bg-[#dfcfb2]">
            <Image
              src={campaign.storyImage}
              alt="Detalle editorial de Nuna Amautta"
              fill
              sizes="220px"
              className="object-cover object-[50%_28%]"
            />
          </a>
          <div className="flex flex-col justify-center px-5 py-6">
            <p className="[font-family:var(--font-montserrat)] text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#876d35]">
              Espíritu Sabio
            </p>
            <h2 className="mt-3 [font-family:var(--font-montserrat)] text-xl font-bold leading-tight">
              Diseñado para sentirse orgánico, libre y presente.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#66553b]">
              Nuna Amautta traduce la calma del tejido y la energía de lo hecho con intención en prendas para habitar el cuerpo con suavidad.
            </p>
          </div>
        </section>

        <section className="border-t border-[#dccbab] px-5 py-6 text-center">
          <p className="[font-family:var(--font-montserrat)] text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#876d35]">
            ¿Necesitas ayuda?
          </p>
          <h2 className="mt-3 [font-family:var(--font-montserrat)] text-2xl font-bold leading-tight">
            Te acompañamos con tallas, disponibilidad y compra.
          </h2>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-none border border-[#231b12] bg-transparent px-5 py-4 [font-family:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.16em] text-[#231b12] transition hover:bg-[#231b12] hover:text-white"
          >
            Escríbenos por WhatsApp
          </a>
        </section>
      </div>
    </section>
  );
}
