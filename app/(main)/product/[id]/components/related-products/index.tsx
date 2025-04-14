import SectionTitle from "@/app/lib/design/common/section-title";
import RelatedList from "./related-list";

const RelatedProducts = () => {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="محصولات مرتبط" />
      <RelatedList />
    </section>
  );
};
export default RelatedProducts;
