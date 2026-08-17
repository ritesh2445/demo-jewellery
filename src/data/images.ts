import heroGold from "@/assets/hero-gold.jpg";
import heroBridal from "@/assets/hero-bridal.jpg";
import heroDiamond from "@/assets/hero-diamond.jpg";
import editorialCraft from "@/assets/editorial-craft.jpg";
import antiqueGoldNecklace from "@/assets/products/antique-gold-necklace.jpg";
import diamondSolitaireRing from "@/assets/products/diamond-solitaire-ring.jpg";
import bridalKundanSet from "@/assets/products/bridal-kundan-set.jpg";
import jhumkaDropEarrings from "@/assets/products/jhumka-drop-earrings.jpg";
import diamondHaloPendant from "@/assets/products/diamond-halo-pendant.jpg";
import kadaGoldBangle from "@/assets/products/kada-gold-bangle.jpg";
import everydayGoldChainBracelet from "@/assets/products/everyday-gold-chain-bracelet.jpg";
import templeWorkChoker from "@/assets/products/temple-work-choker.jpg";
import diamondStudEarrings from "@/assets/products/diamond-stud-earrings.jpg";
import bandOfLightRing from "@/assets/products/band-of-light-ring.jpg";
import paisleyGoldPendant from "@/assets/products/paisley-gold-pendant.jpg";
import bridalBanglePair from "@/assets/products/bridal-bangle-pair.jpg";

export { heroGold, heroBridal, heroDiamond, editorialCraft };

export const productImages: Record<string, string> = {
  "antique-gold-necklace": antiqueGoldNecklace,
  "diamond-solitaire-ring": diamondSolitaireRing,
  "bridal-kundan-set": bridalKundanSet,
  "jhumka-drop-earrings": jhumkaDropEarrings,
  "diamond-halo-pendant": diamondHaloPendant,
  "kada-gold-bangle": kadaGoldBangle,
  "everyday-gold-chain-bracelet": everydayGoldChainBracelet,
  "temple-work-choker": templeWorkChoker,
  "diamond-stud-earrings": diamondStudEarrings,
  "band-of-light-ring": bandOfLightRing,
  "paisley-gold-pendant": paisleyGoldPendant,
  "bridal-bangle-pair": bridalBanglePair,
};

export const categoryImages: Record<string, string> = {
  rings: diamondSolitaireRing,
  earrings: jhumkaDropEarrings,
  pendants: paisleyGoldPendant,
  necklaces: antiqueGoldNecklace,
  bangles: kadaGoldBangle,
  bracelets: everydayGoldChainBracelet,
};

export const collectionImages: Record<string, string> = {
  gold: heroGold,
  diamond: heroDiamond,
  bridal: heroBridal,
  everyday: everydayGoldChainBracelet,
};

export const productImage = (slug: string) => productImages[slug];
