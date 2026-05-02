import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("almaboreal");

export default function AlmaBorealPage() {
  return <BrandLandingPage slug="almaboreal" />;
}
