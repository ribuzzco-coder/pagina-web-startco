import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("lepetitversion2");

export default function LepetitVersion2Page() {
  return <BrandLandingPage slug="lepetitversion2" />;
}
