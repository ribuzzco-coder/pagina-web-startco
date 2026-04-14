import type { Metadata } from "next";
import { Saira, Space_Grotesk } from "next/font/google";

import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { IntroLoader } from "@/components/layout/intro-loader";
import { Navbar } from "@/components/layout/navbar";
import { SITE_CONFIG } from "@/lib/site-config";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="es" className={`${spaceGrotesk.variable} ${saira.variable} h-full`}>
      <body className="min-h-full bg-ribuzz-bg text-ribuzz-textPrimary antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(15,239,253,0.05),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(230,37,255,0.06),transparent_30%),linear-gradient(180deg,#0B0B10_0%,#101119_52%,#0C0D13_100%)]" />
          <div className="absolute inset-0 hidden opacity-[0.08] [background:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:72px_72px] md:block" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          <IntroLoader />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </body>
    </html>
  );
}
