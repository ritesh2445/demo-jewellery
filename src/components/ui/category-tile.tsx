import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/categories";
import { categoryImages } from "@/data/images";
import { MediaPlaceholder } from "./media-placeholder";

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      to="/collection/$category"
      params={{ category: category.slug }}
      className="group block min-w-[140px] snap-start"
    >
      <div className="overflow-hidden rounded-full">
        <MediaPlaceholder
          gradient={category.gradient}
          src={categoryImages[category.slug]}
          alt={`${category.name} jewellery`}
          className="rounded-full"
          imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
      </div>
      <p className="mt-3 text-center font-sans text-xs font-medium uppercase tracking-widest text-ink transition-colors group-hover:text-gold">
        {category.name}
      </p>
    </Link>
  );
}
