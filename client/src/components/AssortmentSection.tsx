import swimwearImg from "@assets/generated_images/swimwear_category_photo.png";
import lingerieImg from "@assets/generated_images/women's_lingerie_category.png";
import mensImg from "@assets/generated_images/men's_swimwear_category.png";
import kidsImg from "@assets/generated_images/children's_swimwear_category.png";
import poolImg from "@assets/generated_images/pool_accessories_category.png";
import beachImg from "@assets/generated_images/beach_clothing_category.png";

const categories = [
  { id: "1", name: "Купальники", image: swimwearImg },
  { id: "2", name: "Женское бельё", image: lingerieImg },
  { id: "3", name: "Мужские плавки и шорты", image: mensImg },
  { id: "4", name: "Детские купальники", image: kidsImg },
  { id: "5", name: "Для бассейна", image: poolImg },
  { id: "6", name: "Пляжная одежда", image: beachImg },
];

export default function AssortmentSection() {
  return (
    <section
      id="assortment"
      className="py-16 md:py-20 lg:py-24 bg-white"
      data-testid="assortment-section"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl font-medium text-[#1F1F1F] mb-4"
            data-testid="assortment-title"
          >
            Ассортимент
          </h2>
          <p className="text-[#7A7A7A] text-base md:text-lg max-w-2xl mx-auto">
            В нашем магазине представлен широкий выбор качественного белья и купальников
            для женщин, мужчин и детей
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group"
              data-testid={`category-card-${category.id}`}
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-[#FDE4EE] mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-[#1F1F1F]">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
