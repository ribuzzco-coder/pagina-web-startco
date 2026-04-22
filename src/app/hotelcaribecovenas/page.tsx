import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Caribe Covenas",
  description: "Espacio reservado para la landing Hotel Caribe Covenas.",
  path: "/hotelcaribecovenas",
});

export default function HotelCaribeCovenasPage() {
  return (
    <section
      aria-label="Hotel Caribe Covenas"
      className="-mt-[76px] min-h-[100dvh] bg-[#0B0B10]"
    />
  );
}
