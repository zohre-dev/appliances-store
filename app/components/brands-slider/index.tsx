"use client";

import { useGetBrands } from "@/app/lib/hooks/brands";
import BrandItem from "./brand-item";
import { SwiperSlide } from "swiper/react";
import SectionSlider from "@/app/lib/design/common/section-slider";

const BrandSlider = () => {
  const { data: brands } = useGetBrands();

  return (
    // <div className="grid grid-cols-5 gap-4">
    //   {brands?.data.map((brand, index) => (
    //     <BrandItem key={brand._id} item={brand} />
    //   ))}
    // </div>
    <>
      {brands && (
        <SectionSlider
          slidesPerView={6}
          spaceBetween={20}
          autoplayDelay={2000}
          className="cursor-pointer"
        >
          {brands?.data.map((brand) => (
            <SwiperSlide key={brand._id}>
              <BrandItem key={brand._id} item={brand} />
            </SwiperSlide>
          ))}
        </SectionSlider>
      )}
    </>
  );
};
export default BrandSlider;
