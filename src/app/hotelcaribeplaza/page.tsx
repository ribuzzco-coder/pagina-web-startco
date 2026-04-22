import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Caribe Plaza",
  description:
    "Espacio reservado para la landing Hotel Caribe Plaza.",
  path: "/hotelcaribeplaza",
});

export default function HotelCaribePlazaPage() {
  return (
    <section
      aria-label="Hotel Caribe Plaza"
      className="-mt-[76px] min-h-[100dvh] bg-[#0B0B10]"
    />
  );
}
