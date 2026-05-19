import { KyndFashionBiolink } from "@/components/brand/kynd-fashion-biolink";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "KYND",
  description: "One of a kind pieces that feel kind to your body.",
  path: "/kynd",
});

export default function KyndPage() {
  return <KyndFashionBiolink />;
}
