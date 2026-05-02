import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("innata");

export default function InnataPage() {
  return <BrandLandingPage slug="innata" />;
}
