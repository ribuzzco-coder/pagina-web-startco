import Script from "next/script";

import { publicEnv } from "@/lib/public-env";

/**
 * Inerte hasta que NEXT_PUBLIC_GA_MEASUREMENT_ID esté configurado en el entorno
 * (local o de producción). No requiere ningún otro cambio de código: agrega la
 * variable de entorno con tu Measurement ID de GA4 (formato G-XXXXXXXXXX) y
 * redeploya.
 */
export function GoogleAnalytics() {
  const measurementId = publicEnv.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
