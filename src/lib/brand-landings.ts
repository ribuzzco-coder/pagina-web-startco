import { SITE_CONFIG } from "@/lib/site-config";

export type BrandSocialKind =
  | "website"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "pinterest"
  | "email"
  | "catalog"
  | "shop"
  | "whatsapp";

export type BrandSocial = {
  kind: BrandSocialKind;
  label: string;
  href?: string;
};

export type BrandAction = {
  kind: BrandSocialKind | "link";
  title: string;
  description: string;
  href?: string;
};

export type BrandBaseLandingConfig = {
  slug: string;
  title: string;
  tagline: string;
  shareUrl: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  fontVar: string;
  background: string;
  overlay: string;
  shellBackground: string;
  shellBorder: string;
  backgroundImageSrc?: string;
  backgroundImagePosition?: string;
  logoBackground: string;
  logoBorder: string;
  textColor: string;
  mutedColor: string;
  accent: string;
  accentSoft: string;
  secondarySoft: string;
  bubbleBackground: string;
  bubbleBorder: string;
  bubbleShadow: string;
  actionBackground: string;
  actionBorder: string;
  inactiveActionBackground: string;
  inactiveActionBorder: string;
  cardBackground: string;
  cardBorder: string;
  noteBackground: string;
  noteBorder: string;
  logoShape?: "rounded" | "circle";
  actionStyle?: "soft" | "solid" | "outline";
  socialIconColor?: string;
  actionTextColor?: string;
  actionMutedColor?: string;
  inactiveActionTextColor?: string;
  inactiveActionMutedColor?: string;
  inquiryHref?: string;
  inquiryLabel?: string;
  inquiryText?: string;
  socials: BrandSocial[];
  actions: BrandAction[];
  infoCards: Array<{ title: string; body: string }>;
  noteCard?: { title: string; body: string };
};

export type BrandHeroConfig = {
  eyebrow: string;
  headline: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type BrandEditorialIntro = {
  eyebrow: string;
  title: string;
  body: string;
};

export type BrandStorySection = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  layout?: "image-right" | "image-left" | "brand-pause";
  note?: string;
};

export type BrandHighlight = {
  eyebrow: string;
  title: string;
  preview: string;
  body: string;
  tags: string[];
};

export type BrandFloatingAction = {
  kind: BrandSocialKind | "link";
  label: string;
  href?: string;
};

export type BrandClosingCta = {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type BrandDefaultLandingConfig = BrandBaseLandingConfig & {
  variant?: "default";
};

export type BrandInteractiveEditorialLandingConfig = BrandBaseLandingConfig & {
  variant: "interactive-editorial";
  hero: BrandHeroConfig;
  editorialIntro: BrandEditorialIntro;
  storySections: BrandStorySection[];
  collectionHighlights: BrandHighlight[];
  floatingActions: BrandFloatingAction[];
  closingCta: BrandClosingCta;
};

export type BrandLandingConfig = BrandDefaultLandingConfig | BrandInteractiveEditorialLandingConfig;

export function isInteractiveEditorialLanding(
  config: BrandLandingConfig,
): config is BrandInteractiveEditorialLandingConfig {
  return config.variant === "interactive-editorial";
}

export const brandLandings: Record<string, BrandLandingConfig> = {
  kynd: {
    slug: "kynd",
    title: "KYND",
    tagline: "One of a kind pieces that feel kind to your body. Proudly made in Colombia.",
    shareUrl: "https://ribuzz.com/kynd",
    logoSrc: "/images/brand-landings/kynd/logo.jpg",
    logoAlt: "Logo KYND",
    logoWidth: 240,
    logoHeight: 150,
    fontVar: "var(--font-open-sans)",
    background: "linear-gradient(180deg,rgba(247,238,199,0.62),rgba(240,229,182,0.58) 46%,rgba(231,220,172,0.86))",
    overlay: "linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))",
    backgroundImageSrc: "/images/brand-landings/kynd/hero-striped-top.jpg",
    backgroundImagePosition: "center 24%",
    shellBackground: "linear-gradient(180deg,rgba(255,255,255,0.3),rgba(250,246,230,0.2))",
    shellBorder: "rgba(122,104,31,0.14)",
    logoBackground: "linear-gradient(180deg,#f8e7aa,#f3dda0)",
    logoBorder: "rgba(122,104,31,0.14)",
    textColor: "#3B3316",
    mutedColor: "#6D6446",
    accent: "#7A681F",
    accentSoft: "#B09A43",
    secondarySoft: "#E9DC9A",
    bubbleBackground: "rgba(255,255,255,0.72)",
    bubbleBorder: "rgba(122,104,31,0.12)",
    bubbleShadow: "0 10px 24px rgba(92,79,34,0.06)",
    actionBackground: "linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,243,223,0.96))",
    actionBorder: "rgba(122,104,31,0.12)",
    inactiveActionBackground: "linear-gradient(180deg,rgba(246,241,219,0.94),rgba(239,233,206,0.94))",
    inactiveActionBorder: "rgba(122,104,31,0.1)",
    cardBackground: "linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,243,223,0.94))",
    cardBorder: "rgba(122,104,31,0.12)",
    noteBackground: "rgba(255,255,255,0.88)",
    noteBorder: "rgba(122,104,31,0.12)",
    logoShape: "circle",
    actionStyle: "solid",
    inquiryHref: SITE_CONFIG.whatsappUrl,
    inquiryLabel: "Escribenos",
    inquiryText: "Conversemos sobre nuevas piezas, styling, showroom o la siguiente capa digital de KYND.",
    socials: [
      { kind: "instagram", label: "Instagram", href: "https://instagram.com/wear.kynd" },
      { kind: "website", label: "wearkynd.com", href: "https://www.wearkynd.com" },
      { kind: "shop", label: "New in", href: "https://www.wearkynd.com" },
    ],
    actions: [
      { kind: "website", title: "Sitio web", description: "Ruta principal para descubrir piezas, categorias y compra.", href: "https://www.wearkynd.com" },
      { kind: "instagram", title: "Instagram", description: "Contenido, comunidad y universo visual de la marca.", href: "https://instagram.com/wear.kynd" },
      { kind: "shop", title: "Styling guide y new in", description: "Base lista para dirigir a producto, colecciones y novedades.", href: "https://www.wearkynd.com" },
    ],
    infoCards: [
      { title: "Minimal premium", body: "Amarillos suaves, crema y oliva para una presencia calida, limpia y contemporanea." },
      { title: "Coleccion con sistema", body: "Lista para conectar Instagram, web, showroom, new in y guias de estilo sin perder claridad." },
    ],
    noteCard: {
      title: "Universo de marca",
      body: "La referencia actual sugiere una marca de ropa con showroom, new in, styling guide y una narrativa internacional entre Medellin y New York.",
    },
  },
};
