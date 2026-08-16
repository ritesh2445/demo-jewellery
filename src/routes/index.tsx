import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/layout";
import { HeroSlider } from "@/components/home/hero-slider";
import { ShopByCategory } from "@/components/home/shop-by-category";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { CampaignBanner } from "@/components/ui/campaign-banner";
import { CollectionShowcase } from "@/components/home/collection-showcase";
import { EditorialFeature } from "@/components/home/editorial-feature";
import { VideoSection } from "@/components/home/video-section";
import { InstagramStrip } from "@/components/home/instagram-strip";
import { VisitTeaser } from "@/components/home/visit-teaser";
import { SectionLabel } from "@/components/ui/section-label";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/data/products";
import { fadeUp } from "@/lib/animations";

const title = "Tanishq Jewellers Ghatanji — Fine Gold, Diamond & Bridal Jewellery";
const description =
  "Discover gold, diamond and bridal jewellery at Tanishq Jewellers, Rakesh Chandarana Road, Ghatanji, Maharashtra. Enquire on WhatsApp or visit the store.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <HeroSlider />
      <ShopByCategory />
      <FeaturedCollection />
      <CampaignBanner
        gradient="from-rose-950 via-stone-900 to-amber-950"
        eyebrow="Bridal Collection"
        headline={"For The Moments\nThat Matter."}
        cta="Explore Bridal"
        ctaLink="/collection/bridal"
      />
      <CollectionShowcase />
      <EditorialFeature />
      <VideoSection />

      <section className="py-20 md:py-28">
        <motion.div {...fadeUp} className="mx-auto max-w-screen-xl px-4 md:px-8">
          <SectionLabel>Explore the collection</SectionLabel>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6 md:gap-y-16">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-14 text-right">
            <Link
              to="/collection"
              className="group inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-ink"
            >
              View all pieces
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      <InstagramStrip />
      <VisitTeaser />
    </Layout>
  );
}
