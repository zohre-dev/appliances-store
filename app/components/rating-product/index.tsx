"use client";
import Button from "@/app/lib/design/common/button";
import SectionTitle from "@/app/lib/design/common/section-title";
import { useGetCategories } from "@/app/lib/hooks/categories";
import ProductCard from "./product-card";
import { useGetProducts } from "@/app/lib/hooks/product";
import { useState } from "react";

const RatingProduct = () => {
  // State for keeping Actived Button
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");
  // !! Fetch Categories
  const { data: allCategories } = useGetCategories();
  // !! Fetch Fetch Product By Category Id
  const { data: getBestProducts } = useGetProducts({
    sortBy: "rating",
    limit: 4,
    category: activeCategoryId,
  });
  return (
    <section className="flex flex-col justify-center gap-4 mt-20">
      <SectionTitle title="برترین محصولات" />
      <div className="flex justify-evenly gap-10 p-3">
        <Button
          className={`${
            activeCategoryId === "" ? "bg-teal-400" : ""
          } px-4 py-2`}
          onClick={() => setActiveCategoryId("")}
        >
          همه محصولات
        </Button>
        {allCategories?.data.categories.map((category) => (
          <Button
            key={category._id}
            className={`px-4 py-2 ${
              activeCategoryId === category._id ? "bg-teal-400" : ""
            }`}
            onClick={() => setActiveCategoryId(category._id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <section className="grid grid-cols-4 ">
        {getBestProducts?.data.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </section>
    </section>
  );
};
export default RatingProduct;
