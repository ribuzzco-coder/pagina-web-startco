import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("diusatti");

export default function DiusattiPage() {
  return <BrandLandingPage slug="diusatti" />;
}
