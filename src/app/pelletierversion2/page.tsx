import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("pelletierversion2");

export default function PelletierVersion2Page() {
  return <BrandLandingPage slug="pelletierversion2" />;
}
