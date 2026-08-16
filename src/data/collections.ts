export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  accentGradient: string;
}

export const collections: Collection[] = [
  {
    id: "gold",
    slug: "gold",
    name: "Gold",
    tagline: "Timeless by tradition",
    description:
      "Classic gold jewellery shaped by traditional craft — pieces made to be worn every day and passed on.",
    gradient: "from-amber-950 via-stone-900 to-stone-950",
    accentGradient: "from-amber-100 via-yellow-50 to-stone-100",
  },
  {
    id: "diamond",
    slug: "diamond",
    name: "Diamond",
    tagline: "Precision and light",
    description: "Finely cut diamonds, beautifully set in gold for a quiet, lasting brilliance.",
    gradient: "from-slate-900 via-stone-800 to-slate-950",
    accentGradient: "from-slate-50 via-stone-100 to-blue-50",
  },
  {
    id: "bridal",
    slug: "bridal",
    name: "Bridal",
    tagline: "For the moments that matter",
    description: "Ceremonial sets and statement pieces created for weddings and celebrations.",
    gradient: "from-rose-950 via-stone-900 to-amber-950",
    accentGradient: "from-rose-100 via-amber-50 to-yellow-100",
  },
  {
    id: "everyday",
    slug: "everyday",
    name: "Everyday",
    tagline: "Lightweight, always on",
    description: "Understated designs made for everyday wear, in gold and diamond.",
    gradient: "from-stone-900 via-stone-800 to-stone-950",
    accentGradient: "from-stone-100 via-amber-50 to-stone-200",
  },
];
