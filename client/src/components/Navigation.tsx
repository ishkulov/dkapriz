import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export default function Navigation({ activeSection = "home", onNavigate }: NavigationProps) {
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
    { id: "catalog", label: "Каталог" },
    { id: "about", label: "О нас" },
    { id: "contacts", label: "Контакты" },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate?.(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
        data-testid="navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <span
                className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid="logo"
              >
                Белла
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm uppercase tracking-widest transition-colors ${
                    isScrolled
                      ? activeSection === item.id
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                      : activeSection === item.id
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+79001234567"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid="phone-link"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (900) 123-45-67</span>
              </a>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isScrolled ? "" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="mobile-menu-button"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-serif text-2xl font-semibold">Белла</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="close-mobile-menu"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xl uppercase tracking-widest transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  data-testid={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="p-6 text-center border-t border-border">
              <a
                href="tel:+79001234567"
                className="flex items-center justify-center gap-2 text-lg"
                data-testid="mobile-phone-link"
              >
                <Phone className="w-5 h-5" />
                <span>+7 (900) 123-45-67</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
