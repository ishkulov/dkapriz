import { useEffect, useState } from "react";
import heroImage from "@assets/generated_images/hero_swimwear_lifestyle_photo.png";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-[#FDF6F9]">
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium text-[#1F1F1F] leading-tight mb-6">
              Нижнее бельё
              <br />
              и купальники
              <br />
              <span className="italic text-[#F04C8B]">для всей семьи</span>
            </h1>
            <p className="text-[#3A3A3A] text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Магазин с широким ассортиментом качественного нижнего белья и купальников.
              Профессиональная консультация и возможность примерки в уютной атмосфере.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("assortment")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#F04C8B] text-white rounded-full px-8 py-4 text-base font-medium hover:bg-[#F04C8B]/90 transition-colors"
              >
                Смотреть ассортимент
              </button>
              <button
                onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-[#F04C8B]/30 text-[#3A3A3A] rounded-full px-8 py-4 text-base hover:border-[#F04C8B] hover:text-[#F04C8B] transition-colors"
              >
                Как нас найти
              </button>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Модель в стильном купальнике"
                className="w-full max-w-sm lg:max-w-md rounded-[32px] shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg hidden md:block">
                <div className="text-2xl font-serif text-[#F04C8B]">500+</div>
                <div className="text-sm text-[#7A7A7A]">моделей в наличии</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
