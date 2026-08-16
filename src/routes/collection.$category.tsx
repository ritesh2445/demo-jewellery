import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout/layout";
import { CollectionGrid } from "@/components/collection-grid";

const label = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const Route = createFileRoute("/collection/$category")({
  head: ({ params }) => {
    const title = `${label(params.category)} Jewellery — Tanishq Jewellers Ghatanji`;
    const description = `Explore ${params.category} jewellery at Tanishq Jewellers, Ghatanji, Maharashtra. Enquire on WhatsApp or visit the store.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  return (
    <Layout>
      <h1 className="px-4 pb-12 pt-20 text-center font-serif text-4xl font-light tracking-tight text-ink md:text-5xl">
        {label(category)}
      </h1>
      <CollectionGrid active={category} />
    </Layout>
  );
}
