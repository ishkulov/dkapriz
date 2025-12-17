import { Award, Heart, Users, Sparkles } from "lucide-react";
import boutiqueImage from "@assets/generated_images/boutique_interior_photo.png";

const features = [
  {
    icon: Award,
    title: "Премиум качество",
    description: "Только сертифицированная продукция от проверенных европейских брендов",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description: "Профессиональные консультации и подбор идеальной модели",
  },
  {
    icon: Users,
    title: "Опытная команда",
    description: "Наши консультанты помогут подобрать размер и фасон",
  },
  {
    icon: Sparkles,
    title: "Широкий выбор",
    description: "Более 50 брендов и 1000 моделей в наличии",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 lg:py-24 bg-muted/30"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
              О нашем бутике
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6"
              data-testid="about-title"
            >
              Создаём красоту
              <br />
              <span className="italic">с 2019 года</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p data-testid="about-description">
                Бутик «Белла» — это уютное пространство, где каждая женщина найдёт
                идеальное нижнее бельё и купальники. Мы тщательно отбираем коллекции,
                уделяя внимание качеству материалов, комфорту и элегантному дизайну.
              </p>
              <p>
                Наша миссия — помочь каждой клиентке почувствовать себя уверенной и
                красивой. Мы предлагаем персональные консультации, профессиональный
                подбор размера и создаём атмосферу заботы и внимания.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-serif text-primary" data-testid="about-stat-satisfaction">98%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Довольных клиенток
                </div>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-serif text-primary" data-testid="about-stat-brands">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Брендов
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={boutiqueImage}
                alt="Интерьер бутика Белла"
                className="rounded-md w-full aspect-[4/3] object-cover"
                data-testid="about-image"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-md hidden md:block">
                <div className="text-3xl font-serif">5+</div>
                <div className="text-sm uppercase tracking-wider">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 md:mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6"
              data-testid={`feature-${index}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
