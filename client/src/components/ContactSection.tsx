import { MapPin, Phone, Clock } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

// todo: remove mock functionality
const contactInfo = {
  address: "г. Санкт-Петербург, Наличная ул., д. 49",
  phone: "+7 (921) 892-48-60",
  hours: [
    { days: "Пн-Пт", time: "10:00 — 20:00" },
    { days: "Сб-Вс", time: "10:00 — 19:00" },
  ],
  socials: {
    instagram: "https://instagram.com/damskiy_kapriz",
    whatsapp: "https://wa.me/79218924860",
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
              src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=30.233528%2C59.949956&mode=search&oid=1179203603&ol=biz&z=16.83"
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
