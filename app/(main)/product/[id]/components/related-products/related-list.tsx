"use client";

import ProductCard from "@/app/lib/design/common/product-card";
import SectionSlider from "@/app/lib/design/common/section-slider";
import { useGetProductById, useGetProducts } from "@/app/lib/hooks/product";
import { useParams } from "next/navigation";
import { SwiperSlide } from "swiper/react";

const RelatedList = () => {
  // !! Get Param
  const param = useParams();
  const id = param.id;

  // !! Fetch
  const { data: getProductDetails } = useGetProductById({ id: String(id) });
  const categoryId = getProductDetails?.data.product.category._id;

  const { data: getProducts } = useGetProducts({ category: categoryId });

  return (
    <div>
      <SectionSlider>
        {getProducts?.data.products.map((product, index) => (
          <SwiperSlide>
            <ProductCard
              key={product._id}
              buttonLable="خرید محصول"
              product={product}
            />
          </SwiperSlide>
        ))}
      </SectionSlider>
    </div>
  );
};
export default RelatedList;
