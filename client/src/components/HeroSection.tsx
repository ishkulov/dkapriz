import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/hero_swimwear_fashion_photo.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const handleCtaClick = () => {
    onCtaClick?.();
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center"
      data-testid="hero-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-white/80 uppercase tracking-[0.3em] text-sm mb-4">
            Бутик нижнего белья и купальников
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6"
            data-testid="hero-title"
          >
            Элегантность
            <br />
            <span className="italic">в каждой детали</span>
          </h1>
          <p
            className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            data-testid="hero-description"
          >
            Откройте для себя коллекцию изысканного нижнего белья и купальников от
            ведущих европейских брендов. Индивидуальный подход и профессиональные
            консультации.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base uppercase tracking-wider backdrop-blur-sm"
              onClick={handleCtaClick}
              data-testid="hero-cta-button"
            >
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base uppercase tracking-wider text-white border-white/50 backdrop-blur-sm bg-white/10 hover:bg-white/20"
              onClick={() => {
                const contactSection = document.getElementById("contacts");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              data-testid="hero-contact-button"
            >
              Связаться с нами
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8 text-white/70">
            <div className="text-center" data-testid="stat-years">
              <div className="text-3xl font-serif text-white">5+</div>
              <div className="text-sm uppercase tracking-wider">Лет на рынке</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center" data-testid="stat-brands">
              <div className="text-3xl font-serif text-white">50+</div>
              <div className="text-sm uppercase tracking-wider">Брендов</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center" data-testid="stat-clients">
              <div className="text-3xl font-serif text-white">2000+</div>
              <div className="text-sm uppercase tracking-wider">Клиенток</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
