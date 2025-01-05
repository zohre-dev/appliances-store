"use client";
import { Swiper } from "swiper/react";
import { IProps } from "./index.types";
import { cn } from "@/app/lib/utils/cn";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FC } from "react";

const SectionSlider: FC<IProps> = ({
  slidesPerView = 5,
  spaceBetween = 15,
  autoplayDelay = 1800,
  className = "",
  children,
}) => {
  return (
    <>
      <section>
        <Swiper
          style={{ cursor: "pointer" }}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          autoplay={{
            delay: autoplayDelay,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          loop
          navigation={true}
          className={cn(`Swiper`, className)}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {children}
        </Swiper>
      </section>
    </>
  );
};

export default SectionSlider;
