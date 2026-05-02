import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("eyra");

export default function EyraPage() {
  return <BrandLandingPage slug="eyra" />;
}
