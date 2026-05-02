import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("conga");

export default function CongaPage() {
  return <BrandLandingPage slug="conga" />;
}
