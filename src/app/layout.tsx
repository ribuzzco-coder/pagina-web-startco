import type { Metadata } from "next";
import {
  Assistant,
  Barlow,
  Jost,
  Lato,
  Open_Sans,
  Playfair_Display,
  Saira,
  Space_Grotesk,
  Zen_Dots,
} from "next/font/google";

import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { IntroLoader } from "@/components/layout/intro-loader";
import { Navbar } from "@/components/layout/navbar";
import { RouteVisibility } from "@/components/layout/route-visibility";
import { SITE_CONFIG } from "@/lib/site-config";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-dots",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
  display: "swap",
});

const fontVariables = [
  spaceGrotesk.variable,
  saira.variable,
  zenDots.variable,
  openSans.variable,
  lato.variable,
  barlow.variable,
  jost.variable,
  playfairDisplay.variable,
  assistant.variable,
].join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Sistemas comerciales para crecer con estructura`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Sistemas comerciales para crecer con estructura`,
    description: SITE_CONFIG.description,
    type: "website",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "es_CO",
    images: [
      {
        url: SITE_CONFIG.ogImagePlaceholder,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - imagen Open Graph`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`h-full ${fontVariables}`}
    >
      <body className="min-h-full bg-ribuzz-bg text-ribuzz-textPrimary antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(15,239,253,0.05),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(230,37,255,0.06),transparent_30%),linear-gradient(180deg,#0B0B10_0%,#101119_52%,#0C0D13_100%)]" />
          <div className="absolute inset-0 hidden opacity-[0.08] [background:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:72px_72px] md:block" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          <RouteVisibility>
            <IntroLoader />
            <Navbar />
          </RouteVisibility>
          <main className="flex-1 pt-[76px]">{children}</main>
          <RouteVisibility>
            <Footer />
            <FloatingWhatsAppButton />
          </RouteVisibility>
        </div>
      </body>
    </html>
  );
}
