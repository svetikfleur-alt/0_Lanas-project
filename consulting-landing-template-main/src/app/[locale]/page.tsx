import { Base44Landing } from "@/features/landing/Base44Landing";
import { Locale } from "@/types/identity";

export default function LandingPage({ params }: { params: { locale: Locale } }) {
  return <Base44Landing locale={params.locale} />;
}
