import type { Metadata } from "next";

import { SITE_CONFIG } from "@/lib/site-config";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: MetadataInput): Metadata {
  const pageUrl = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      type: "website",
      url: pageUrl,
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
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [SITE_CONFIG.ogImagePlaceholder],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}