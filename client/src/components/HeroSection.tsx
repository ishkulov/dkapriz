import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/hero_swimwear_lifestyle_photo.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = () => {
    onCtaClick?.();
    const assortmentSection = document.getElementById("assortment");
    if (assortmentSection) {
      assortmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-[#FDF6F9]"
      data-testid="hero-section"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium text-[#1F1F1F] leading-tight mb-6"
              data-testid="hero-title"
            >
              Нижнее бельё
              <br />
              и купальники
              <br />
              <span className="italic text-primary">для всей семьи</span>
            </h1>
            <p
              className="text-[#3A3A3A] text-base md:text-lg leading-relaxed mb-8 max-w-md"
              data-testid="hero-description"
            >
              Магазин с широким ассортиментом качественного нижнего белья и купальников.
              Профессиональная консультация и возможность примерки в уютной атмосфере.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base"
                onClick={handleCtaClick}
                data-testid="hero-cta-button"
              >
                Смотреть ассортимент
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base border-primary/30 text-[#3A3A3A]"
                onClick={() => {
                  const contactSection = document.getElementById("contacts");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                data-testid="hero-contact-button"
              >
                Как нас найти
              </Button>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="relative animate-float"
              style={{
                animation: "float 12s ease-in-out infinite",
              }}
            >
              <img
                src={heroImage}
                alt="Модель в стильном купальнике"
                className="w-full max-w-sm lg:max-w-md rounded-[32px] shadow-2xl object-cover"
                data-testid="hero-image"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg hidden md:block">
                <div className="text-2xl font-serif text-primary">500+</div>
                <div className="text-sm text-[#7A7A7A]">моделей в наличии</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
