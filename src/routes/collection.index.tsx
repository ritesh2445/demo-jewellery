import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout/layout";
import { CollectionGrid } from "@/components/collection-grid";

const title = "The Collection — Tanishq Jewellers Ghatanji";
const description =
  "Browse gold, diamond and bridal rings, earrings, pendants, necklaces, bangles and bracelets at Tanishq Jewellers Ghatanji.";

export const Route = createFileRoute("/collection/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <Layout>
      <h1 className="px-4 pb-12 pt-20 text-center font-serif text-4xl font-light tracking-tight text-ink md:text-5xl">
        Explore The Collection
      </h1>
      <CollectionGrid active="all" />
    </Layout>
  );
}
