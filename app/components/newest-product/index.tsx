"use client";
import SectionTitle from "@/app/lib/design/common/section-title";
import { useGetProducts } from "@/app/lib/hooks/product";
import ProductCard from "./product-card";

const NewestProduct = () => {
  //  !! Fetch Newest Product
  const { data: getProducts } = useGetProducts({ sortBy: "newest", limit: 4 });
  return (
    <section className="flex flex-col gap-4 mt-20">
      <SectionTitle title="جدیدترین محصولات" />
      <section className="grid grid-cols-4 gap-6 p-2">
        {getProducts?.data.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </section>
  );
};

export default NewestProduct;
