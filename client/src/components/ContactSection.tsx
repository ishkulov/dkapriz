import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// todo: remove mock functionality
const contactInfo = {
  address: "г. Москва, ул. Тверская, д. 15, ТЦ «Галерея», 2 этаж",
  phone: "+7 (900) 123-45-67",
  email: "info@bella-boutique.ru",
  hours: [
    { days: "Пн-Пт", time: "10:00 - 21:00" },
    { days: "Сб-Вс", time: "11:00 - 20:00" },
  ],
  socials: {
    instagram: "https://instagram.com/bella_boutique",
    telegram: "https://t.me/bella_boutique",
    whatsapp: "https://wa.me/79001234567",
  },
};

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
    
    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contacts"
      className="py-16 md:py-20 lg:py-24 bg-background"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
            Свяжитесь с нами
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6"
            data-testid="contact-title"
          >
            Контакты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Приходите к нам в бутик или свяжитесь любым удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Анна"
                  className="rounded-md"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Телефон
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+7 (___) ___-__-__"
                  className="rounded-md"
                  required
                  data-testid="input-phone"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Сообщение
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Ваш вопрос или пожелание..."
                  className="rounded-md min-h-[120px]"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="rounded-full px-8 w-full sm:w-auto"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div
              className="bg-muted/50 rounded-md p-6"
              data-testid="contact-info-card"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Адрес</h4>
                    <p className="text-muted-foreground" data-testid="contact-address">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Телефон</h4>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="contact-phone"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="contact-email"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Часы работы</h4>
                    <div className="text-muted-foreground" data-testid="contact-hours">
                      {contactInfo.hours.map((h, i) => (
                        <p key={i}>
                          {h.days}: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="social-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="social-telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="social-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>

            <div className="rounded-md overflow-hidden h-64" data-testid="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0940645657427!2d37.59972631593245!3d55.76265998055524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KLQstC10YDRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1635000000000!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения магазина"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
