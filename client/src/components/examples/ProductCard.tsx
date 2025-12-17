import ProductCard from "../ProductCard";
import lingerieWhite from "@assets/generated_images/elegant_lingerie_product_photo.png";

export default function ProductCardExample() {
  return (
    <div className="w-64">
      <ProductCard
        id="1"
        name="Кружевной комплект Elegant"
        category="Нижнее бельё"
        image={lingerieWhite}
        onView={(id) => console.log(`Viewing product ${id}`)}
      />
    </div>
  );
}
