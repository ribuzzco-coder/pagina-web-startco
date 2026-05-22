import Image from "next/image";

const links = {
  website: "https://wearkynd.com/",
  instagram: "https://www.instagram.com/wear.kynd/",
  whatsapp: "https://wa.me/573142336780",
};

const campaign = {
  name: "Home Alone",
  eyebrow: "Elevated everyday wear",
  headline: "One of a kind pieces that feel kind to your body",
  body: "Conoce nuestro ultimo drop HOME ALONE. Made to be worn like no one is watching.",
  ctaLabel: "Shop Home Alone",
  ctaHref: links.website,
  heroImage: "/images/brand-landings/kynd/web/home-alone-hero.jpg",
  detailImage: "/images/brand-landings/kynd/web/category-dresses.png",
  storyImage: "/images/brand-landings/kynd/web/bianca-butter-alt.jpg",
};

const moodNotes = ["Soft structure", "Bare comfort", "Quiet confidence"] as const;

const primaryLinks = [
  {
    label: "Shop / Pagina web",
    caption: "New in and Home Alone",
    href: links.website,
    image: "/images/brand-landings/kynd/web/category-bottoms.png",
    position: "object-[50%_34%]",
    index: "01",
  },
  {
    label: "Instagram",
    caption: "Visual diary",
    href: links.instagram,
    image: "/images/brand-landings/kynd/web/home-alone-hero.jpg",
    position: "object-[56%_50%]",
    index: "02",
  },
  {
    label: "WhatsApp",
    caption: "Sizing and availability",
    href: links.whatsapp,
    image: "/images/brand-landings/kynd/web/bianca-butter.jpg",
    position: "object-[50%_20%]",
    index: "03",
  },
] as const;

const featuredProducts = [
  {
    name: "Blaire Set - Sand",
    price: "$360.000",
    href: "https://wearkynd.com/products/blaire-set-sand",
    image: "/images/brand-landings/kynd/web/blaire-set-sand.jpg",
    position: "object-[50%_20%]",
  },
  {
    name: "Bianca Bodysuit - Butter Yellow",
    price: "$185.000",
    href: "https://wearkynd.com/products/bianca-bodysuit-butter-yellow",
    image: "/images/brand-landings/kynd/web/bianca-butter.jpg",
    position: "object-[50%_18%]",
  },
  {
    name: "Verona Pant",
    price: "$230.000",
    href: "https://wearkynd.com/products/verona-pant",
    image: "/images/brand-landings/kynd/web/category-bottoms.png",
    position: "object-[50%_32%]",
  },
  {
    name: "Blaire Vest - Sand",
    price: "$195.000",
    href: "https://wearkynd.com/products/blaire-vest-sand",
    image: "/images/brand-landings/kynd/web/blaire-vest-sand.jpg",
    position: "object-[50%_20%]",
  },
] as const;

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

export function KyndFashionBiolink() {
  return (
    <section className="-mt-[76px] min-h-screen bg-[#f7f0df] text-[#1d1a13] [font-family:var(--font-kynd-text)]">
      <div className="mx-auto min-h-screen w-full max-w-[480px] bg-[#f8f2e7] shadow-[0_24px_80px_rgba(46,39,26,0.12)]">
        <div className="relative">
          <div className="relative overflow-hidden bg-[#e8dfcd] px-4 pb-5 pt-4">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbf6ea_0%,#e6dcc8_44%,#c9b17f_100%)]" />
            <div className="relative grid min-h-[68svh] grid-cols-[0.72fr_1fr] grid-rows-[auto_1fr] gap-3">
              <div className="col-span-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="[font-family:var(--font-kynd-display)] text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#6b5a18]">
                    01 / {campaign.name}
                  </span>
                  <span className="h-px w-10 bg-[#6b5a18]/40" />
                </div>
                <Image
                  src="/images/brand-landings/kynd/logo.jpg"
                  alt="KYND"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border border-[#6b5a18]/20 object-cover"
                />
              </div>

              <div className="relative col-span-2 min-h-[23rem] overflow-hidden bg-[#d8cda8]">
                <Image
                  src={campaign.heroImage}
                  alt="Campana Home Alone de KYND"
                  fill
                  sizes="480px"
                  priority
                  className="object-cover object-[56%_50%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,26,19,0.06)_0%,rgba(29,26,19,0.12)_48%,rgba(29,26,19,0.62)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h1 className="[font-family:var(--font-kynd-display)] text-[3.8rem] font-black uppercase leading-[0.8] tracking-[0.02em]">
                    KYND
                  </h1>
                  <p className="mt-4 max-w-[16rem] text-2xl font-semibold leading-[1.02]">
                    {campaign.headline}
                  </p>
                </div>
                <a
                  href={campaign.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 border border-white/70 bg-transparent px-3 py-2 [font-family:var(--font-kynd-display)] text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
                >
                  Shop now
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-y border-[#ded3b7]">
            {moodNotes.map((note) => (
              <div key={note} className="border-r border-[#ded3b7] px-3 py-4 last:border-r-0">
                <p className="[font-family:var(--font-kynd-display)] text-[0.66rem] font-bold uppercase leading-4 tracking-[0.16em] text-[#6b5a18]">
                  {note}
                </p>
              </div>
            ))}
          </div>

          <div className="px-5 py-6">
            <div className="grid gap-2">
              {primaryLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block min-h-[8.2rem] overflow-hidden bg-[#d8cda8]"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="440px"
                    className={`object-cover ${item.position}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,26,19,0.78),rgba(29,26,19,0.16))]" />
                  <div className="absolute inset-0 flex items-end justify-between gap-4 p-4 text-white">
                    <span>
                      <span className="block [font-family:var(--font-kynd-display)] text-[0.64rem] font-bold uppercase tracking-[0.22em] text-white/70">
                        {item.index}
                      </span>
                      <span className="mt-2 block [font-family:var(--font-kynd-display)] text-base font-bold uppercase tracking-[0.14em]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs leading-4 text-white/72">
                        {item.caption}
                      </span>
                    </span>
                    <span className="text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowIcon />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <section className="border-t border-[#ded3b7] px-5 py-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="[font-family:var(--font-kynd-display)] text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#7b681e]">
                The edit
              </p>
              <h2 className="mt-2 [font-family:var(--font-kynd-display)] text-2xl font-bold leading-none">Shop Home Alone</h2>
            </div>
            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="[font-family:var(--font-kynd-display)] text-xs font-bold uppercase tracking-[0.16em] text-[#6b5a18]"
            >
              View all
            </a>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-6">
            {featuredProducts.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e6dcc8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="220px"
                    className={`object-cover transition duration-500 group-hover:scale-[1.03] ${product.position}`}
                  />
                </div>
                <p className="mt-3 [font-family:var(--font-kynd-display)] text-[0.72rem] font-bold uppercase leading-4 tracking-[0.1em] text-[#1d1a13]">
                  {product.name}
                </p>
                <p className="mt-1 text-xs text-[#6f664f]">{product.price}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-[0.88fr_1.12fr] border-t border-[#ded3b7]">
          <div className="relative min-h-64 bg-[#e6dcc8]">
            <Image
              src={campaign.storyImage}
              alt="Detalle editorial de prenda KYND"
              fill
              sizes="220px"
              className="object-cover object-[50%_24%]"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-6">
            <p className="[font-family:var(--font-kynd-display)] text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#7b681e]">
              Our Story
            </p>
            <h2 className="mt-3 [font-family:var(--font-kynd-display)] text-xl font-bold leading-tight">
              Designed with feeling. Worn with purpose.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#5f5743]">
              Una forma de vestir que se siente bien en tu cuerpo y en tu mente.
            </p>
          </div>
        </section>

        <section className="border-t border-[#ded3b7] px-5 py-6 text-center">
          <p className="[font-family:var(--font-kynd-display)] text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#7b681e]">
            Need help?
          </p>
          <h2 className="mt-3 [font-family:var(--font-kynd-display)] text-2xl font-bold leading-tight">
            Dudas de talla o disponibilidad?
          </h2>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-none border border-[#1d1a13] bg-transparent px-5 py-4 [font-family:var(--font-kynd-display)] text-sm font-bold uppercase tracking-[0.16em] text-[#1d1a13] transition hover:bg-[#1d1a13] hover:text-white"
          >
            Escribenos por WhatsApp
          </a>
        </section>
      </div>
    </section>
  );
}
