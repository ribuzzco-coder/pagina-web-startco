import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";

type PreviewAction = {
  label: string;
  accent?: boolean;
};

type PreviewChip = {
  label: string;
};

type PreviewImage = {
  src: string;
  alt: string;
  label: string;
};

type BoutiqueGalleryPreviewProps = {
  brand: string;
  handle: string;
  tagline: string;
  summary: string;
  typography: string;
  logoSrc: string;
  instagramPreviewSrc: string;
  backgroundImages: readonly string[];
  activationHref: string;
  activationCopy: string;
  activationLabel: string;
  fakeActions: readonly PreviewAction[];
  chips: readonly PreviewChip[];
  gallery: readonly PreviewImage[];
};

function BrandAction({ label, accent = false }: PreviewAction) {
  return (
    <button
      type="button"
      disabled
      className={`inline-flex min-h-14 w-full items-center justify-between rounded-[1.6rem] border px-5 py-4 text-left transition ${
        accent
          ? "border-[#b58d58] bg-[linear-gradient(135deg,#b58d58,#8e6a3b)] text-[#fffaf4] shadow-[0_18px_38px_rgba(118,84,40,0.24)]"
          : "border-[#e7d8c7] bg-white/88 text-[#624731] shadow-[0_12px_30px_rgba(123,87,50,0.08)]"
      }`}
    >
      <span className="text-sm font-semibold tracking-[0.08em] uppercase">
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`flex h-8 w-8 items-center justify-center rounded-full border text-base ${
          accent
            ? "border-white/28 bg-white/10 text-white"
            : "border-[#e5d2bb] bg-[#fbf5ee] text-[#9d774a]"
        }`}
      >
        +
      </span>
    </button>
  );
}

export function BoutiqueGalleryPreview({
  brand,
  handle,
  tagline,
  summary,
  typography,
  logoSrc,
  instagramPreviewSrc,
  backgroundImages,
  activationHref,
  activationCopy,
  activationLabel,
  fakeActions,
  chips,
  gallery,
}: BoutiqueGalleryPreviewProps) {
  return (
    <main className="relative -mt-[76px] min-h-[calc(100vh+76px)] overflow-hidden text-[#4d3727]">
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.08),rgba(242,229,213,0.28)_18%,rgba(240,224,205,0.56)_42%,rgba(238,222,202,0.88)_72%,#efe0cf_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.38),transparent_24%),radial-gradient(circle_at_15%_18%,rgba(218,190,158,0.18),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(181,141,88,0.12),transparent_22%)]" />
      <div className="absolute left-[-6rem] top-24 z-0 h-64 w-64 rounded-full bg-[#d8b287]/18 blur-3xl" />
      <div className="absolute bottom-10 right-[-4rem] z-0 h-72 w-72 rounded-full bg-[#c89c63]/12 blur-3xl" />

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh+76px)] max-w-7xl gap-10 px-6 pb-10 pt-[96px] md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[27rem] rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,248,240,0.94))] p-4 shadow-[0_30px_80px_rgba(122,86,49,0.14)] backdrop-blur-xl">
            <div className="absolute inset-x-10 top-0 h-24 rounded-b-[2rem] bg-[linear-gradient(180deg,rgba(181,141,88,0.18),transparent)]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#eadccf] bg-[#fbf6f0] p-4 sm:p-5">
              <div className="rounded-[1.6rem] border border-[#eadbc9] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,228,0.98))] px-4 py-3 text-center">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#a17a4f]">
                  Edicion preview
                </p>
                <p className="mt-1 [font-family:var(--font-playfair)] text-lg leading-tight text-[#654831]">
                  Biolink calido, femenino y artesanal.
                </p>
              </div>

              <div className="mt-5 flex flex-col items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-[6px] border-[#fbf6f0] bg-white shadow-[0_14px_28px_rgba(120,86,52,0.12)]">
                  <Image
                    src={logoSrc}
                    alt={`${brand} logo`}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>
                <h1 className="mt-4 text-center [font-family:var(--font-playfair)] text-4xl font-semibold tracking-[-0.04em] text-[#5d4330]">
                  {brand}
                </h1>
                <p className="mt-1 text-sm font-medium tracking-[0.18em] text-[#a07a52] uppercase">
                  {handle}
                </p>
                <p className="mt-4 max-w-xs text-center text-[0.95rem] leading-7 text-[#7a6048]">
                  {tagline}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {fakeActions.map((action) => (
                  <BrandAction key={action.label} {...action} />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="rounded-full border border-[#e4d4c3] bg-white/80 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8d6b48]"
                  >
                    {chip.label}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-[#e6d8ca] bg-[linear-gradient(180deg,#fffdf9,#f7eee4)] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a17a4f]">
                  CTA interno RiBuzz
                </p>
                <p className="mt-3 text-sm leading-7 text-[#725742]">
                  {activationCopy}
                </p>
                <a
                  href={activationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#5f4630] px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-[#fff7ee] transition hover:bg-[#725338]"
                >
                  {activationLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a27a50]">
              Preview biolink
            </p>
            <h2 className="mt-3 [font-family:var(--font-playfair)] text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#5b402d] sm:text-5xl lg:text-6xl">
              Un Linktree bonito, mas alineado con la identidad de Viana Girl.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#775c45] sm:text-lg">
              {summary}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[#e5d5c3] bg-white/78 p-6 shadow-[0_18px_36px_rgba(120,84,48,0.08)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a17a4f]">
                Tipografia
              </p>
              <p className="mt-3 text-base leading-7 text-[#654c38]">
                {typography}
              </p>
            </article>
            <article className="rounded-[2rem] border border-[#e5d5c3] bg-[#f4e4d1] p-6 shadow-[0_18px_36px_rgba(120,84,48,0.08)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a17a4f]">
                Direccion visual
              </p>
              <p className="mt-3 text-base leading-7 text-[#654c38]">
                Paleta crema, arena, dorado suave y cafe cacao para sostener una sensacion
                artesanal, femenina y premium sin verse recargada.
              </p>
            </article>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[#e5d5c3] bg-white/78 p-6 shadow-[0_20px_40px_rgba(120,84,48,0.08)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a17a4f]">
                Instagram aparte
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl text-[#5a402c]">
                Referencia visual del perfil
              </h3>
              <p className="mt-3 text-base leading-7 text-[#6e523d]">
                La referencia de Instagram sale del bloque principal para que el biolink se
                sienta mas limpio y la presencia de marca tenga una lectura mas directa.
              </p>
              <div className="mt-5 overflow-hidden rounded-[1.7rem] border border-[#eadaca] bg-white">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={instagramPreviewSrc}
                    alt={`Perfil de Instagram de ${brand}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.map((item) => (
                <article
                  key={`${item.label}-${item.src}`}
                  className="group overflow-hidden rounded-[2rem] border border-[#e6d7c8] bg-white shadow-[0_18px_38px_rgba(120,84,48,0.08)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 240px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_46%,rgba(66,45,29,0.58))]" />
                    <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-white/18 bg-white/14 px-3 py-2 text-white backdrop-blur-md">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#f0dcc0]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/88">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
