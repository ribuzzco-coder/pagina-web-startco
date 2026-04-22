import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Caribbean Cartagena",
  description: "Espacio reservado para la landing Hotel Caribbean Cartagena.",
  path: "/hotelcaribbeancartagena",
});

export default function HotelCaribbeanCartagenaPage() {
  return (
    <section
      aria-label="Hotel Caribbean Cartagena"
      className="-mt-[76px] min-h-[100dvh] bg-[#0B0B10]"
    />
  );
}
