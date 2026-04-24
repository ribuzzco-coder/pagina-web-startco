import { HotelLandingClonePage } from "@/components/hotel/hotel-landing-clone-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Virrey Cartagena",
  description: "Base inicial de la landing Hotel Virrey Cartagena.",
  path: "/hotelvirreycartagena",
});

export default function HotelVirreyCartagenaPage() {
  return (
    <HotelLandingClonePage
      title="Hotel Virrey Cartagena"
      city="Cartagena"
      rnt="RNT próximamente"
      footerName="Hotel Virrey Cartagena"
    />
  );
}
