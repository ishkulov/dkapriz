import { MapPin, Phone, Clock } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

// todo: remove mock functionality
const contactInfo = {
  address: "г. Санкт-Петербург, Наличная ул., д. 49, ТЦ «Галерея», 2 эта",
  phone: "+7 (900) 123-45-67",
  hours: [
    { days: "Пн-Сб", time: "10:00 — 20:00" },
    { days: "Вс", time: "11:00 — 18:00" },
  ],
  socials: {
    instagram: "https://instagram.com/damskiy_kapriz",
    whatsapp: "https://wa.me/79001234567",
  },
};

export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="py-16 md:py-20 lg:py-24 bg-white"
      data-testid="contact-section"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl font-medium text-[#1F1F1F] mb-4"
            data-testid="contact-title"
          >
            Контакты
          </h2>
          <p className="text-[#7A7A7A] text-base md:text-lg max-w-2xl mx-auto">
            Приходите к нам в магазин — будем рады видеть вас!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div
              className="bg-[#FDF6F9] rounded-2xl p-6 md:p-8"
              data-testid="contact-info-card"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE4EE] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F] mb-1">Адрес магазина</h4>
                    <p className="text-[#3A3A3A]" data-testid="contact-address">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE4EE] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F] mb-1">Телефон</h4>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                      className="text-[#3A3A3A] hover:text-primary transition-colors text-lg"
                      data-testid="contact-phone"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE4EE] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F] mb-1">Часы работы</h4>
                    <div className="text-[#3A3A3A]" data-testid="contact-hours">
                      {contactInfo.hours.map((h, i) => (
                        <p key={i}>
                          {h.days}: <span className="font-medium">{h.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FDE4EE]">
                <p className="text-[#7A7A7A] text-sm mb-4">Мы в социальных сетях:</p>
                <div className="flex items-center gap-4">
                  <a
                    href={contactInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#FDE4EE] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    data-testid="social-instagram"
                  >
                    <SiInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#FDE4EE] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    data-testid="social-whatsapp"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 lg:h-auto" data-testid="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.428308671!2d38.97573!3d45.03547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04e3e8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2z0JrRgNCw0YHQvdCw0Y8g0YPQuy4sINCa0YDQsNGB0L3QvtC00LDRgA!5e0!3m2!1sru!2sru!4v1635000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения магазина"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
