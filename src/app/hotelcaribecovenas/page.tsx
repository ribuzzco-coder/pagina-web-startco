import { HotelLandingClonePage } from "@/components/hotel/hotel-landing-clone-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Caribe Coveñas",
  description: "Base inicial de la landing Hotel Caribe Coveñas.",
  path: "/hotelcaribecovenas",
});

export default function HotelCaribeCovenasPage() {
  return (
    <HotelLandingClonePage
      title="Hotel Caribe Coveñas"
      city="Coveñas"
      rnt="RNT próximamente"
      footerName="Hotel Caribe Coveñas"
    />
  );
}
