import { useState } from "react";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  onView?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  category,
  image,
  onView,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView?.(id)}
      data-testid={`product-card-${id}`}
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>
      <div
        className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-white/90 rounded-full p-4 mb-4">
          <Eye className="w-6 h-6 text-foreground" />
        </div>
        <span className="text-white text-sm uppercase tracking-widest">
          Подробнее
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="text-white text-lg font-medium" data-testid={`product-name-${id}`}>
          {name}
        </h3>
      </div>
    </div>
  );
}
