import Button from "@/app/lib/design/common/button";
import { ImgContainer } from "@/app/lib/design/common/img-container";
import { Text } from "@/app/lib/design/common/text";
import { FC } from "react";
import { IProductCardProps } from "./index.types";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discount
  );
  return (
    <div className="relative flex flex-col gap-4 p-4 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transform transition duration-300">
      <ImgContainer
        classes="w-[300px] h-[300px] rounded-t-xl overflow-hidden"
        src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
      />
      <div className="flex flex-col gap-3 items-start px-2">
        <Text className="text-gray-800" textSize="lg" fontWeight="semibold">
          {product.name}
        </Text>
        <Text
          className="text-gray-500 max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap "
          textSize="sm"
        >
          {product.description}
        </Text>
      </div>

      <div className="flex justify-between items-center px-2">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Text textSize="sm" className="text-gray-400 line-through">
              {product.price.toLocaleString()}
            </Text>
            <Text textSize="sm" fontWeight="semibold" className="text-red-500">
              {product.discount}% تخفیف خورده
            </Text>
          </div>

          <Text textSize="lg" fontWeight="bold" className="text-teal-500">
            {discountedPrice.toLocaleString()} تومان
          </Text>
        </div>
        <Button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600">
          خرید محصول
        </Button>
      </div>

      <div className="py-[5px] px-[9px] rounded-[5px] bg-red-500 absolute top-[3%] right-[6%]">
        <span className="text-white">حراج</span>
      </div>
    </div>
  );
};
export default ProductCard;
