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
  variant?: "warm" | "mist" | "blush" | "noir" | "jewel";
  logoMode?: "contain" | "cover";
  previewLabel: string;
  previewHeading: string;
  summary: string;
  typography: string;
  directionCopy: string;
  introBadge: string;
  introCardCopy: string;
  instagramTitle: string;
  instagramCopy: string;
  locationTitle: string;
  locationCopy: string;
  locationLabel: string;
  locationMapSrc: string;
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
  variant = "warm",
  logoMode = "contain",
  previewLabel,
  previewHeading,
  summary,
  typography,
  directionCopy,
  introBadge,
  introCardCopy,
  instagramTitle,
  instagramCopy,
  locationTitle,
  locationCopy,
  locationLabel,
  locationMapSrc,
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
  const isMist = variant === "mist";
  const isBlush = variant === "blush";
  const isNoir = variant === "noir";
  const isJewel = variant === "jewel";
  const pageText = isMist ? "#30404b" : isBlush ? "#7b5560" : isNoir ? "#f3f3f1" : isJewel ? "#f6ebdc" : "#4d3727";
  const accentSoft = isMist ? "#708896" : isBlush ? "#c78f9f" : isNoir ? "#a1a1aa" : isJewel ? "#d8b184" : "#a17a4f";
  const accentStrong = isMist ? "#7b94a5" : isBlush ? "#b9778c" : isNoir ? "#ffffff" : isJewel ? "#f4cf9b" : "#8f6b46";
  const cardBorder = isMist ? "#d6e0e6" : isBlush ? "#f0d6dc" : isNoir ? "#3c3c42" : isJewel ? "#5b2f67" : "#e5d5c3";
  const softPanel = isMist
    ? "bg-[linear-gradient(180deg,rgba(245,249,251,0.82),rgba(228,236,241,0.96))]"
    : isBlush
      ? "bg-[linear-gradient(180deg,rgba(255,251,252,0.82),rgba(248,231,236,0.96))]"
      : isNoir
        ? "bg-[linear-gradient(180deg,rgba(18,18,20,0.88),rgba(28,28,32,0.96))]"
        : isJewel
          ? "bg-[linear-gradient(180deg,rgba(72,26,83,0.9),rgba(92,37,106,0.96))]"
      : "bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,238,228,0.96))]";
  const mainOverlay = isMist
    ? "bg-[linear-gradient(180deg,rgba(242,247,250,0.1),rgba(222,232,238,0.28)_18%,rgba(211,222,229,0.56)_42%,rgba(207,219,226,0.88)_72%,#d5e1e8_100%)]"
    : isBlush
      ? "bg-[linear-gradient(180deg,rgba(255,246,249,0.1),rgba(247,224,232,0.28)_18%,rgba(243,213,223,0.56)_42%,rgba(236,202,213,0.88)_72%,#e5bcc8_100%)]"
      : isNoir
        ? "bg-[linear-gradient(180deg,rgba(7,7,9,0.26),rgba(9,9,11,0.44)_18%,rgba(10,10,13,0.68)_42%,rgba(10,10,12,0.9)_72%,#08080a_100%)]"
        : isJewel
          ? "bg-[linear-gradient(180deg,rgba(57,15,71,0.16),rgba(74,21,91,0.32)_18%,rgba(84,25,102,0.58)_42%,rgba(87,31,104,0.88)_72%,#4b1c59_100%)]"
      : "bg-[linear-gradient(180deg,rgba(255,248,241,0.08),rgba(242,229,213,0.28)_18%,rgba(240,224,205,0.56)_42%,rgba(238,222,202,0.88)_72%,#efe0cf_100%)]";
  const radialOverlay = isMist
    ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_24%),radial-gradient(circle_at_15%_18%,rgba(162,182,196,0.16),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(101,130,147,0.12),transparent_22%)]"
    : isBlush
    ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_24%),radial-gradient(circle_at_15%_18%,rgba(241,188,203,0.18),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(207,135,160,0.12),transparent_22%)]"
      : isNoir
        ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_15%_18%,rgba(113,113,122,0.18),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.08),transparent_24%)]"
      : isJewel
        ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_15%_18%,rgba(228,189,126,0.2),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(244,207,155,0.12),transparent_22%)]"
      : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.38),transparent_24%),radial-gradient(circle_at_15%_18%,rgba(218,190,158,0.18),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(181,141,88,0.12),transparent_22%)]";
  const accentBlobA = isMist ? "bg-[#a4bac7]/18" : isBlush ? "bg-[#f1bfcb]/18" : isNoir ? "bg-white/10" : isJewel ? "bg-[#f0cf9f]/12" : "bg-[#d8b287]/18";
  const accentBlobB = isMist ? "bg-[#6f8594]/12" : isBlush ? "bg-[#d994ab]/12" : isNoir ? "bg-[#737373]/12" : isJewel ? "bg-[#e6b9ff]/10" : "bg-[#c89c63]/12";
  const cardShell = isMist
    ? "border border-white/70 bg-[linear-gradient(180deg,rgba(241,246,249,0.72),rgba(232,239,243,0.94))]"
    : isBlush
      ? "border border-white/70 bg-[linear-gradient(180deg,rgba(255,245,248,0.78),rgba(246,224,231,0.94))]"
      : isNoir
        ? "border border-white/8 bg-[linear-gradient(180deg,rgba(11,11,13,0.82),rgba(20,20,24,0.94))]"
        : isJewel
          ? "border border-white/10 bg-[linear-gradient(180deg,rgba(69,24,79,0.82),rgba(85,31,98,0.95))]"
      : "border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,248,240,0.94))]";
  const cardInner = isMist
    ? "border border-[#d9e3e8] bg-[#f5f9fb]"
    : isBlush
      ? "border border-[#f0d6dc] bg-[#fff7f9]"
      : isNoir
        ? "border border-[#2f2f35] bg-[#0f0f12]"
        : isJewel
          ? "border border-[#6f3b77] bg-[#542161]"
      : "border border-[#eadccf] bg-[#fbf6f0]";
  const badgePanel = isMist
    ? "border border-[#d7e2e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(232,239,243,0.98))]"
    : isBlush
      ? "border border-[#f0d8df] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,229,235,0.98))]"
      : isNoir
        ? "border border-[#2f2f35] bg-[linear-gradient(180deg,rgba(17,17,20,0.98),rgba(30,30,34,0.98))]"
        : isJewel
          ? "border border-[#77427f] bg-[linear-gradient(180deg,rgba(94,39,109,0.98),rgba(77,28,89,0.98))]"
      : "border border-[#eadbc9] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,228,0.98))]";
  const ctaButton = isMist
    ? "bg-[#506776] text-[#f5fafc] hover:bg-[#5d7788]"
    : isBlush
      ? "bg-[#c8899a] text-[#fff8fb] hover:bg-[#b9798b]"
      : isNoir
        ? "bg-white text-[#101012] hover:bg-[#e7e7ea]"
        : isJewel
          ? "bg-[#e1b886] text-[#51205d] hover:bg-[#ecc89d]"
      : "bg-[#5f4630] text-[#fff7ee] hover:bg-[#725338]";

  return (
    <main className="relative -mt-[76px] min-h-[calc(100vh+76px)] overflow-hidden" style={{ color: pageText }}>
      <HotelCaribeHeroGallery images={backgroundImages} />
      <div className={`absolute inset-0 z-0 ${mainOverlay}`} />
      <div className={`absolute inset-0 z-0 ${radialOverlay}`} />
      <div className={`absolute left-[-6rem] top-24 z-0 h-64 w-64 rounded-full ${accentBlobA} blur-3xl`} />
      <div className={`absolute bottom-10 right-[-4rem] z-0 h-72 w-72 rounded-full ${accentBlobB} blur-3xl`} />

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh+76px)] max-w-7xl gap-10 px-6 pb-10 pt-[96px] md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
        <div className="flex items-center justify-center lg:justify-start">
          <div className={`relative w-full max-w-[27rem] rounded-[2.4rem] ${cardShell} p-4 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl`}>
            <div className={`absolute inset-x-10 top-0 h-24 rounded-b-[2rem] ${isMist ? "bg-[linear-gradient(180deg,rgba(123,148,165,0.18),transparent)]" : isBlush ? "bg-[linear-gradient(180deg,rgba(214,150,171,0.18),transparent)]" : isNoir ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" : isJewel ? "bg-[linear-gradient(180deg,rgba(241,207,155,0.14),transparent)]" : "bg-[linear-gradient(180deg,rgba(181,141,88,0.18),transparent)]"}`} />
            <div className={`relative overflow-hidden rounded-[2rem] ${cardInner} p-4 sm:p-5`}>
              <div className={`rounded-[1.6rem] ${badgePanel} px-4 py-3 text-center`}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]" style={{ color: accentSoft }}>
                  {introBadge}
                </p>
                <p className="mt-1 [font-family:var(--font-playfair)] text-lg leading-tight" style={{ color: pageText }}>
                  {introCardCopy}
                </p>
              </div>

              <div className="mt-5 flex flex-col items-center">
                <div className={`relative h-24 w-24 overflow-hidden rounded-full border-[6px] shadow-[0_14px_28px_rgba(0,0,0,0.2)] ${isBlush ? "border-[#fff7f9] bg-white" : isNoir ? "border-[#19191d] bg-black" : isJewel ? "border-[#6d3a75] bg-[#5b2368]" : "border-[#fbf6f0] bg-white"}`}>
                  <Image
                    src={logoSrc}
                    alt={`${brand} logo`}
                    fill
                    sizes="96px"
                    className={logoMode === "cover" ? "object-cover" : "object-contain p-2"}
                  />
                </div>
                <h1 className="mt-4 text-center [font-family:var(--font-playfair)] text-4xl font-semibold tracking-[-0.04em]" style={{ color: pageText }}>
                  {brand}
                </h1>
                <p className="mt-1 text-sm font-medium tracking-[0.18em] uppercase" style={{ color: accentSoft }}>
                  {handle}
                </p>
                <p className="mt-4 max-w-xs text-center text-[0.95rem] leading-7" style={{ color: isMist ? "#5d7380" : isBlush ? "#8f6672" : isNoir ? "#b5b5bd" : isJewel ? "#f1d8bc" : "#7a6048" }}>
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
                    className="rounded-full border bg-white/80 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em]"
                    style={{ borderColor: cardBorder, color: accentStrong }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>

              <div className={`mt-6 rounded-[1.6rem] border p-4 ${isMist ? "bg-[linear-gradient(180deg,#fbfeff,#edf4f7)]" : isNoir ? "bg-[linear-gradient(180deg,#141418,#1d1d22)]" : isJewel ? "bg-[linear-gradient(180deg,#5b2868,#4b1d58)]" : "bg-[linear-gradient(180deg,#fffdf9,#f7eee4)]"}`} style={{ borderColor: isMist ? "#d6e1e8" : isNoir ? "#303037" : isJewel ? "#75417e" : "#e6d8ca" }}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: accentSoft }}>
                  CTA interno RiBuzz
                </p>
                <p className="mt-3 text-sm leading-7" style={{ color: isMist ? "#5c7480" : isBlush ? "#8c6571" : isNoir ? "#b8b8c0" : isJewel ? "#f0d8be" : "#725742" }}>
                  {activationCopy}
                </p>
                <a
                  href={activationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition ${ctaButton}`}
                >
                  {activationLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em]" style={{ color: accentSoft }}>
              {previewLabel}
            </p>
            <h2 className="mt-3 [font-family:var(--font-playfair)] text-4xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl" style={{ color: pageText }}>
              {previewHeading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 sm:text-lg" style={{ color: isMist ? "#5c7380" : isBlush ? "#8b6772" : isNoir ? "#b7b7bf" : isJewel ? "#e8cfb4" : "#775c45" }}>
              {summary}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className={`rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(0,0,0,0.14)] ${isNoir ? "bg-[#111114]/82" : isJewel ? "bg-[#542361]/84" : "bg-white/78"}`} style={{ borderColor: cardBorder }}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: accentSoft }}>
                Tipografia
              </p>
              <p className="mt-3 text-base leading-7" style={{ color: isMist ? "#516774" : isBlush ? "#8a6570" : isNoir ? "#b3b3bb" : isJewel ? "#edd8bf" : "#654c38" }}>
                {typography}
              </p>
            </article>
            <article className={`rounded-[2rem] border p-6 shadow-[0_18px_36px_rgba(0,0,0,0.14)] ${isMist ? "bg-[#dce7ee]" : isBlush ? "bg-[#f4dbe2]" : isNoir ? "bg-[#18181c]" : isJewel ? "bg-[#694078]" : "bg-[#f4e4d1]"}`} style={{ borderColor: cardBorder }}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: accentSoft }}>
                Direccion visual
              </p>
              <p className="mt-3 text-base leading-7" style={{ color: isMist ? "#516774" : isBlush ? "#8a6570" : isNoir ? "#b3b3bb" : isJewel ? "#f1dcc5" : "#654c38" }}>
                {directionCopy}
              </p>
            </article>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className={`rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)] ${isNoir ? "bg-[#111114]/82" : isJewel ? "bg-[#542361]/84" : "bg-white/78"}`} style={{ borderColor: cardBorder }}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: accentSoft }}>
                Instagram aparte
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl" style={{ color: pageText }}>
                {instagramTitle}
              </h3>
              <p className="mt-3 text-base leading-7" style={{ color: isMist ? "#5a717d" : isBlush ? "#8e6974" : isNoir ? "#b3b3bb" : isJewel ? "#edd8bf" : "#6e523d" }}>
                {instagramCopy}
              </p>
              <div className={`mt-5 overflow-hidden rounded-[1.7rem] border ${isNoir ? "bg-[#0f0f12]" : isJewel ? "bg-[#4f205c]" : "bg-white"}`} style={{ borderColor: isMist ? "#d8e2e8" : isBlush ? "#f0d8df" : isNoir ? "#303037" : isJewel ? "#75417e" : "#eadaca" }}>
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
                  className="group overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_38px_rgba(120,84,48,0.08)]"
                  style={{ borderColor: isMist ? "#d8e2e8" : isBlush ? "#efd7de" : isNoir ? "#303037" : isJewel ? "#75417e" : "#e6d7c8" }}
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
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em]" style={{ color: isMist ? "#dfeaf0" : isBlush ? "#ffe6ee" : "#f0dcc0" }}>
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

          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <article className={`rounded-[2rem] border p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)] ${softPanel}`} style={{ borderColor: cardBorder }}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: accentSoft }}>
                Ubicacion
              </p>
              <h3 className="mt-3 [font-family:var(--font-playfair)] text-3xl" style={{ color: pageText }}>
                {locationTitle}
              </h3>
              <p className="mt-3 text-base leading-7" style={{ color: isMist ? "#5a717d" : isBlush ? "#8d6974" : isNoir ? "#b3b3bb" : isJewel ? "#edd8bf" : "#6e523d" }}>
                {locationCopy}
              </p>
              <div className={`mt-5 inline-flex rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.08em] uppercase ${isNoir ? "bg-white/8" : isJewel ? "bg-[#f2c992]/10" : "bg-white/80"}`} style={{ borderColor: cardBorder, color: accentStrong }}>
                {locationLabel}
              </div>
            </article>

            <div className={`overflow-hidden rounded-[2rem] border shadow-[0_20px_40px_rgba(0,0,0,0.16)] ${isNoir ? "bg-[#0f0f12]" : isJewel ? "bg-[#4f205c]" : "bg-white"}`} style={{ borderColor: isMist ? "#d6e0e6" : isBlush ? "#efd8df" : isNoir ? "#303037" : isJewel ? "#75417e" : "#e4d4c2" }}>
              <div className="relative min-h-[21rem]">
                <iframe
                  title={`Ubicacion de ${brand}`}
                  src={locationMapSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_38%,rgba(89,63,38,0.14))]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
