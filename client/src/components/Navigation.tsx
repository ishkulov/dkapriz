import { useState, useEffect } from "react";
import logoImage from "@assets/image_1765980730827.png";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "assortment", label: "Ассортимент" },
    { id: "benefits", label: "Преимущества" },
    { id: "contacts", label: "Контакты" },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <img src={logoImage} alt="Дамский Каприз" className="h-10 md:h-12 w-auto" />

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-[#F04C8B] font-medium"
                      : "text-[#3A3A3A] hover:text-[#F04C8B]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <a
              href="tel:+78612990909"
              className="hidden md:flex items-center gap-2 text-sm text-[#3A3A3A] hover:text-[#F04C8B] transition-colors"
            >
              +7 (861) 299-09-09
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <img src={logoImage} alt="Дамский Каприз" className="h-10 w-auto" />
              <button className="p-2" onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xl transition-colors ${
                    activeSection === item.id
                      ? "text-[#F04C8B] font-medium"
                      : "text-[#3A3A3A] hover:text-[#F04C8B]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="p-6 text-center border-t border-gray-100">
              <a href="tel:+78612990909" className="text-lg text-[#3A3A3A]">
                +7 (861) 299-09-09
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
