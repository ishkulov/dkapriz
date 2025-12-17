import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import lingerieWhite from "@assets/generated_images/elegant_lingerie_product_photo.png";
import bikiniCoral from "@assets/generated_images/coral_bikini_product_photo.png";
import lingerieBlack from "@assets/generated_images/black_silk_lingerie_photo.png";
import swimsuitGreen from "@assets/generated_images/green_tropical_swimsuit_photo.png";
import slipBlush from "@assets/generated_images/blush_satin_slip_photo.png";
import bikiniNavy from "@assets/generated_images/navy_sporty_bikini_photo.png";

// todo: remove mock functionality
const products = [
  {
    id: "1",
    name: "Кружевной комплект Elegant",
    category: "Нижнее бельё",
    image: lingerieWhite,
    type: "lingerie",
  },
  {
    id: "2",
    name: "Бикини Coral Sunset",
    category: "Купальники",
    image: bikiniCoral,
    type: "swimwear",
  },
  {
    id: "3",
    name: "Шёлковый комплект Noir",
    category: "Нижнее бельё",
    image: lingerieBlack,
    type: "lingerie",
  },
  {
    id: "4",
    name: "Слитный купальник Tropical",
    category: "Купальники",
    image: swimsuitGreen,
    type: "swimwear",
  },
  {
    id: "5",
    name: "Атласная сорочка Blush",
    category: "Домашняя одежда",
    image: slipBlush,
    type: "homewear",
  },
  {
    id: "6",
    name: "Спортивное бикини Marine",
    category: "Купальники",
    image: bikiniNavy,
    type: "swimwear",
  },
];

const categories = [
  { id: "all", label: "Все товары" },
  { id: "swimwear", label: "Купальники" },
  { id: "lingerie", label: "Нижнее бельё" },
  { id: "homewear", label: "Домашняя одежда" },
];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.type === activeCategory);

  const handleProductView = (id: string) => {
    console.log(`Viewing product ${id}`);
  };

  return (
    <section
      id="catalog"
      className="py-16 md:py-20 lg:py-24 bg-background"
      data-testid="catalog-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
            Коллекция
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6"
            data-testid="catalog-title"
          >
            Наш каталог
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Изысканные модели от лучших европейских брендов для вашего комфорта и
            уверенности
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`category-filter-${cat.id}`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onView={handleProductView}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Больше моделей ждут вас в нашем магазине
          </p>
          <Button
            variant="outline"
            className="rounded-full px-8"
            onClick={() => {
              const contactSection = document.getElementById("contacts");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            data-testid="catalog-visit-store-button"
          >
            Посетить магазин
          </Button>
        </div>
      </div>
    </section>
  );
}
