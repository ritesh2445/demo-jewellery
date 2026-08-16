export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  material: string;
  description: string;
  gradient: string;
  availability: "In Store" | "Made to Order";
  featured: boolean;
  newArrival: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "antique-gold-necklace",
    name: "Antique Gold Necklace",
    category: "necklaces",
    collection: "gold",
    material: "22K Gold",
    description:
      "Handcrafted in the traditional Maharashtrian style, this piece carries generations of artistry. A statement necklace for occasions that call for something enduring.",
    gradient: "from-amber-100 via-yellow-50 to-stone-100",
    availability: "In Store",
    featured: true,
    newArrival: false,
    tags: ["antique", "temple", "traditional"],
  },
  {
    id: "p2",
    slug: "diamond-solitaire-ring",
    name: "Diamond Solitaire Ring",
    category: "rings",
    collection: "diamond",
    material: "18K Gold & Diamonds",
    description:
      "A single stone held in a clean, minimal setting. Designed to sit close to the finger and catch light from every angle.",
    gradient: "from-slate-50 via-stone-100 to-amber-50",
    availability: "Made to Order",
    featured: true,
    newArrival: true,
    tags: ["solitaire", "engagement", "classic"],
  },
  {
    id: "p3",
    slug: "bridal-kundan-set",
    name: "Bridal Kundan Set",
    category: "necklaces",
    collection: "bridal",
    material: "Gold & Kundan",
    description:
      "A ceremonial set of necklace and earrings in uncut kundan work. Made for the centrepiece moments of a wedding day.",
    gradient: "from-rose-100 via-amber-50 to-yellow-100",
    availability: "Made to Order",
    featured: true,
    newArrival: false,
    tags: ["bridal", "kundan", "set"],
  },
  {
    id: "p4",
    slug: "jhumka-drop-earrings",
    name: "Jhumka Drop Earrings",
    category: "earrings",
    collection: "gold",
    material: "22K Gold",
    description:
      "Classic bell-shaped jhumkas with fine granulation along the dome. Balanced in weight for long wear.",
    gradient: "from-amber-100 via-stone-50 to-yellow-100",
    availability: "In Store",
    featured: true,
    newArrival: false,
    tags: ["jhumka", "traditional", "drop"],
  },
  {
    id: "p5",
    slug: "diamond-halo-pendant",
    name: "Diamond Halo Pendant",
    category: "pendants",
    collection: "diamond",
    material: "18K Gold & Diamonds",
    description:
      "A softly rounded pendant with a ring of pavé set stones. Quiet enough for daily wear, bright enough for evenings.",
    gradient: "from-slate-50 via-stone-100 to-blue-50",
    availability: "In Store",
    featured: false,
    newArrival: true,
    tags: ["pendant", "halo", "pave"],
  },
  {
    id: "p6",
    slug: "kada-gold-bangle",
    name: "Kada Gold Bangle",
    category: "bangles",
    collection: "gold",
    material: "22K Gold",
    description:
      "A broad, sculpted kada with a hand-finished surface. Substantial on the wrist without excess ornament.",
    gradient: "from-yellow-50 via-amber-100 to-stone-100",
    availability: "In Store",
    featured: false,
    newArrival: false,
    tags: ["kada", "bangle", "statement"],
  },
  {
    id: "p7",
    slug: "everyday-gold-chain-bracelet",
    name: "Everyday Gold Chain Bracelet",
    category: "bracelets",
    collection: "everyday",
    material: "18K Gold",
    description:
      "A fine link bracelet with a secure clasp, made to be worn alone or layered. Light and comfortable all day.",
    gradient: "from-stone-100 via-amber-50 to-stone-200",
    availability: "In Store",
    featured: false,
    newArrival: true,
    tags: ["chain", "everyday", "layering"],
  },
  {
    id: "p8",
    slug: "temple-work-choker",
    name: "Temple Work Choker",
    category: "necklaces",
    collection: "bridal",
    material: "22K Gold",
    description:
      "A close-fitting choker with temple motifs worked in relief. Traditionally worn with a longer haram.",
    gradient: "from-amber-100 via-rose-50 to-yellow-100",
    availability: "Made to Order",
    featured: true,
    newArrival: false,
    tags: ["temple", "choker", "bridal"],
  },
  {
    id: "p9",
    slug: "diamond-stud-earrings",
    name: "Diamond Stud Earrings",
    category: "earrings",
    collection: "diamond",
    material: "18K Gold & Diamonds",
    description:
      "Simple studs in a four-prong setting. The pair most often reached for, morning to evening.",
    gradient: "from-slate-50 via-stone-50 to-stone-100",
    availability: "In Store",
    featured: false,
    newArrival: false,
    tags: ["stud", "diamond", "everyday"],
  },
  {
    id: "p10",
    slug: "band-of-light-ring",
    name: "Band Of Light Ring",
    category: "rings",
    collection: "everyday",
    material: "18K Gold & Diamonds",
    description:
      "A slim eternity band with a continuous line of small stones. Designed to stack or stand alone.",
    gradient: "from-stone-50 via-amber-50 to-slate-100",
    availability: "In Store",
    featured: false,
    newArrival: true,
    tags: ["band", "eternity", "stackable"],
  },
  {
    id: "p11",
    slug: "paisley-gold-pendant",
    name: "Paisley Gold Pendant",
    category: "pendants",
    collection: "gold",
    material: "22K Gold",
    description:
      "A paisley silhouette with fine filigree detail, suspended on a delicate chain.",
    gradient: "from-amber-50 via-yellow-50 to-stone-100",
    availability: "In Store",
    featured: false,
    newArrival: false,
    tags: ["paisley", "filigree", "pendant"],
  },
  {
    id: "p12",
    slug: "bridal-bangle-pair",
    name: "Bridal Bangle Pair",
    category: "bangles",
    collection: "bridal",
    material: "22K Gold",
    description:
      "A matched pair of ceremonial bangles with textured edges, made to be worn together.",
    gradient: "from-rose-50 via-amber-100 to-yellow-50",
    availability: "Made to Order",
    featured: false,
    newArrival: false,
    tags: ["bridal", "pair", "bangle"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
