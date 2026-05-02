import { BrandLandingPage, createBrandLandingMetadata } from "@/lib/brand-landing-page";

export const metadata = createBrandLandingMetadata("desayunosfelices");

export default function DesayunosFelicesPage() {
  return <BrandLandingPage slug="desayunosfelices" />;
}
