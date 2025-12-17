import { Heart, MapPin, Phone, Clock } from "lucide-react";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-semibold tracking-wide" data-testid="footer-logo">
              Белла
            </span>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Элегантный бутик нижнего белья и купальников. Создаём красоту и
              уверенность для каждой женщины с 2019 года.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/bella_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/bella_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-telegram"
              >
                <SiTelegram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Навигация
            </h4>
            <ul className="space-y-3">
              {["Главная", "Каталог", "О нас", "Контакты"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${["home", "catalog", "about", "contacts"][index]}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`footer-nav-${index}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Категории
            </h4>
            <ul className="space-y-3">
              {["Купальники", "Нижнее бельё", "Домашняя одежда", "Аксессуары"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#catalog"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
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
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Контакты
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="footer-address">
                  г. Москва, ул. Тверская, д. 15
                  <br />
                  ТЦ «Галерея», 2 этаж
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+79001234567"
                  className="hover:text-foreground transition-colors"
                  data-testid="footer-phone"
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="footer-hours">
                  Пн-Пт: 10:00-21:00
                  <br />
                  Сб-Вс: 11:00-20:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p data-testid="footer-copyright">
            {currentYear} Белла. Все права защищены.
          </p>
          <p className="flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-primary" /> в Москве
          </p>
        </div>
      </div>
    </footer>
  );
}
