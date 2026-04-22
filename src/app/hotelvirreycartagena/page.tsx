import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Virrey Cartagena",
  description: "Espacio reservado para la landing Hotel Virrey Cartagena.",
  path: "/hotelvirreycartagena",
});

export default function HotelVirreyCartagenaPage() {
  return (
    <section
      aria-label="Hotel Virrey Cartagena"
      className="-mt-[76px] min-h-[100dvh] bg-[#0B0B10]"
    />
  );
}
