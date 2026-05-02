import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("verbenaversion2");

export default function VerbenaVersion2Page() {
  return <BrandLandingPage slug="verbenaversion2" />;
}
