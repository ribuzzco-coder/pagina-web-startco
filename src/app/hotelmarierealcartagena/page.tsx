import { HotelLandingClonePage } from "@/components/hotel/hotel-landing-clone-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Marie Real Cartagena",
  description: "Base inicial de la landing Hotel Marie Real Cartagena.",
  path: "/hotelmarierealcartagena",
});

export default function HotelMarieRealCartagenaPage() {
  return (
    <HotelLandingClonePage
      title="Hotel Marie Real Cartagena"
      city="Cartagena"
      rnt="RNT próximamente"
      footerName="Hotel Marie Real Cartagena"
    />
  );
}
