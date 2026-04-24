import { HotelLandingClonePage } from "@/components/hotel/hotel-landing-clone-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Caribbean Cartagena",
  description: "Base inicial de la landing Hotel Caribbean Cartagena.",
  path: "/hotelcaribbeancartagena",
});

export default function HotelCaribbeanCartagenaPage() {
  return (
    <HotelLandingClonePage
      title="Hotel Caribbean Cartagena"
      city="Cartagena"
      rnt="RNT próximamente"
      footerName="Hotel Caribbean Cartagena"
    />
  );
}
