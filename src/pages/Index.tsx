import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import LogicSection from "@/components/landing/LogicSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import ControlSection from "@/components/landing/ControlSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ObjectionsSection from "@/components/landing/ObjectionsSection";
import FAQSection from "@/components/landing/FAQSection";
import StartSection from "@/components/landing/StartSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <LogicSection />
    <ComparisonSection />
    <ControlSection />
    <HowItWorks />
    <ObjectionsSection />
    <FAQSection />
    <StartSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
