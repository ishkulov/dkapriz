import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AssortmentSection from "@/components/AssortmentSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "assortment", "benefits", "contacts"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background" data-testid="home-page">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        <HeroSection />
        <AssortmentSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
