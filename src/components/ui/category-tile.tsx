import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/categories";
import { JewelSilhouette, MediaPlaceholder } from "./media-placeholder";

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      to="/collection/$category"
      params={{ category: category.slug }}
      className="group block min-w-[140px] snap-start"
    >
      <div className="overflow-hidden">
        <MediaPlaceholder
          gradient={category.gradient}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        >
          <JewelSilhouette />
        </MediaPlaceholder>
      </div>
      <p className="mt-3 text-center font-sans text-xs font-medium uppercase tracking-widest text-ink">
        {category.name}
      </p>
    </Link>
  );
}
