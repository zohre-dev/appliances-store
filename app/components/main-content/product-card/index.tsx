"use client";

import Button from "@/app/lib/design/common/button";
import { ImgContainer } from "@/app/lib/design/common/img-container";
import { StarRating } from "@/app/lib/design/common/star-rating";
import { Text } from "@/app/lib/design/common/text";
import { useGetProductById } from "@/app/lib/hooks/product";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";
import { formatToIranianCurrency } from "@/app/lib/utils/curreny";
import * as Icons from "react-icons/md";

export const ProductCard = () => {
  //  !! Fetch Product By Id
  const { data: getProduct } = useGetProductById({
    id: "67567c704ef7005ef2656b15",
  });
  let product = getProduct?.data.product;
  const conatinerClasses =
    "h-[600px] p-6 rounded-lg border border-teal-500 flex flex-col gap-4 items-center";
  const buttonClasses = "px-4 py-2 bg-teal-400 text-white";
  return (
    <div className={conatinerClasses}>
      {product && (
        <>
          <ImgContainer
            src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
            classes="w-full h-[300px]"
          />
          <Text textSize="xl" fontWeight="semibold">
            {product.name}
          </Text>
          <section className="flex flex-col items-center gap-2">
            <Text className="text-gray-500 line-through">
              {formatToIranianCurrency(product.price, "toman")}
            </Text>
            <Text textSize="xl" fontWeight="bold" className="text-red-500">
              {formatToIranianCurrency(
                calculateDiscountedPrice(product.price, product?.discount),
                "toman"
              )}
            </Text>
          </section>
          <StarRating
            rating={product.rating}
            starSize="text-2xl"
            classes="mb-4"
          />
          <Button
            className={buttonClasses}
            rightIcon={<Icons.MdShop size={40} />}
          >
            افزودن به سبد خرید
          </Button>
        </>
      )}
    </div>
  );
};
