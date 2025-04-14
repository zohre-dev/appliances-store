"use client";

import SectionSlider from "@/app/lib/design/common/section-slider";

import Image1 from "@/public/images/banner/1.jpg";
import Image2 from "@/public/images/banner/2.jpg";
import Image3 from "@/public/images/banner/3.jpg";
import Image4 from "@/public/images/banner/4.jpg";
import BannerItem from "./banner-item";
import { SwiperSlide } from "swiper/react";

const bannerItems = [
  {
    id: "1",
    title: "کولرهای گازی با تکنولوژی پیشرفته",
    description:
      "تجربه خنکی بی‌نظیر با کمترین مصرف انرژی. مناسب برای تمامی فصول.",
    src: Image1.src,
  },
  {
    id: "2",
    title: "لباسشویی‌های کم‌مصرف",
    description:
      "شستشوی سریع و موثر با جدیدترین فناوری‌های روز دنیا. مناسب برای خانواده‌های پرمشغله.",
    src: Image2.src,
  },
  {
    id: "3",
    title: "یخچال و فریزرهای مدرن",
    description: "حفظ تازگی مواد غذایی با طراحی‌های جذاب و هوشمند.",
    src: Image3.src,
  },
  {
    id: "4",
    title: "مایکروویوهای پیشرفته",
    description: "گرم کردن سریع، پخت و پز آسان، و طراحی شیک برای هر آشپزخانه.",
    src: Image4.src,
  },
];
const Banner = () => {
  return (
    <div className="w-full" style={{ border: "4px solid blue" }}>
      <SectionSlider
        breakpoints={{ 0: { slidesPerView: 1 } }}
        slidesPerView={1}
        spaceBetween={20}
        autoplayDelay={3000}
      >
        {bannerItems.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <BannerItem item={banner} />
            </SwiperSlide>
          );
        })}
      </SectionSlider>
    </div>
  );
};

export default Banner;
