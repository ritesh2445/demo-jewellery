export interface Category {
  id: string;
  name: string;
  slug: string;
  gradient: string;
}

export const categories: Category[] = [
  { id: "rings", name: "Rings", slug: "rings", gradient: "from-amber-50 to-stone-100" },
  { id: "earrings", name: "Earrings", slug: "earrings", gradient: "from-rose-50 to-amber-50" },
  { id: "pendants", name: "Pendants", slug: "pendants", gradient: "from-stone-100 to-amber-100" },
  { id: "necklaces", name: "Necklaces", slug: "necklaces", gradient: "from-amber-100 to-stone-50" },
  { id: "bangles", name: "Bangles", slug: "bangles", gradient: "from-yellow-50 to-stone-100" },
  { id: "bracelets", name: "Bracelets", slug: "bracelets", gradient: "from-stone-50 to-rose-50" },
];
