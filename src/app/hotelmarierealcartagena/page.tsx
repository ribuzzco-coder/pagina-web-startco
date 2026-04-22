import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Marie Real Cartagena",
  description: "Espacio reservado para la landing Hotel Marie Real Cartagena.",
  path: "/hotelmarierealcartagena",
});

export default function HotelMarieRealCartagenaPage() {
  return (
    <section
      aria-label="Hotel Marie Real Cartagena"
      className="-mt-[76px] min-h-[100dvh] bg-[#0B0B10]"
    />
  );
}
