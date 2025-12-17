import { Heart, MapPin, Phone, Clock } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1F1F] text-white" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-medium tracking-wide" data-testid="footer-logo">
              Дамский Каприз
            </span>
            <p className="text-white/70 mt-4 text-sm leading-relaxed">
              Магазин нижнего белья и купальников для всей семьи. Качество, комфорт
              и индивидуальный подход.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/damskiy_kapriz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors"
                data-testid="footer-instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors"
                data-testid="footer-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Навигация</h4>
            <ul className="space-y-3">
              {["Главная", "Ассортимент", "Преимущества", "Контакты"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${["home", "assortment", "benefits", "contacts"][index]}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                    data-testid={`footer-nav-${index}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Категории</h4>
            <ul className="space-y-3">
              {["Купальники", "Женское бельё", "Мужские плавки", "Детские купальники", "Пляжная одежда"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#assortment"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                      data-testid={`footer-category-${index}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Контакты</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="footer-address">
                  г. Краснодар, ул. Красная, д. 150
                  <br />
                  ТЦ «Галерея», 2 этаж
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+79001234567"
                  className="hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="footer-hours">
                  Пн-Сб: 10:00-20:00
                  <br />
                  Вс: 11:00-18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p data-testid="footer-copyright">
            {currentYear} Дамский Каприз. Все права защищены.
          </p>
          <p className="flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-primary" /> в Краснодаре
          </p>
        </div>
      </div>
    </footer>
  );
}
