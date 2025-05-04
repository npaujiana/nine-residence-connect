
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import TrustedBySection from "@/components/TrustedBySection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <AppShowcaseSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
