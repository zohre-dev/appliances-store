import { FC } from "react";
import { IProductCardProps } from "./index.types";
import { ImgContainer } from "@/app/lib/design/common/img-container";
import { StarRating } from "@/app/lib/design/common/star-rating";
import { Text } from "@/app/lib/design/common/text";
import Button from "@/app/lib/design/common/button";

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  return (
    <div className="shadow-lg rounded-xl border border-gray-200 flex flex-col gap-4 p-4 transform hover:scale-105 hover:shadow-lg transition duration-300">
      <ImgContainer
        src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
        classes="w-[300px] h-[300px] rounded-t-xl overflow-hidden"
      />
      <div className="flex flex-col items-start px-2">
        <Text textSize="lg" fontWeight="semibold" className="text-gray-800">
          {product.name}
        </Text>
        <Text
          textSize="sm"
          className="text-gray-500 max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {product.description}{" "}
        </Text>
      </div>
      <StarRating rating={product.rating} starSize="text-xl" classes="px-2" />
      <div>
        <Button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600">
          خرید محصول
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
