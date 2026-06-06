import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ExpertSection from "@/components/landing/ExpertSection";
import PriceSection from "@/components/landing/PriceSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCta from "@/components/landing/FinalCta";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ExpertSection />
      <PriceSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
}
