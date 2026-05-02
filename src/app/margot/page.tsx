import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("margot");

export default function MargotPage() {
  return <BrandLandingPage slug="margot" />;
}
