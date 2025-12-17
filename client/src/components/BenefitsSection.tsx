import { Shirt, MessageCircle, Ruler, Award } from "lucide-react";

const benefits = [
  {
    icon: Shirt,
    title: "Примерка в магазине",
    description: "Удобные примерочные кабины для комфортного подбора белья и купальников",
  },
  {
    icon: MessageCircle,
    title: "Профессиональная консультация",
    description: "Опытные консультанты помогут подобрать идеальную модель и размер",
  },
  {
    icon: Ruler,
    title: "Широкий размерный ряд",
    description: "От XS до 6XL — найдём подходящий вариант для любой фигуры",
  },
  {
    icon: Award,
    title: "Качество и комфорт",
    description: "Только проверенные бренды с гарантией качества материалов",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-16 md:py-20 lg:py-24 bg-[#FDE4EE]"
      data-testid="benefits-section"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl font-medium text-[#1F1F1F] mb-4"
            data-testid="benefits-title"
          >
            Почему выбирают нас
          </h2>
          <p className="text-[#7A7A7A] text-base md:text-lg max-w-2xl mx-auto">
            Мы создаём комфортные условия для выбора идеального белья
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center"
              data-testid={`benefit-${index}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FDE4EE] text-primary mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#7A7A7A] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
