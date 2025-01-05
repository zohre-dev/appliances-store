import { ImgContainer } from "@/app/lib/design/common/img-container";
import { Text } from "@/app/lib/design/common/text";
import { FC } from "react";
import { IProductCardProps } from "./index.types";
import { convertDateFormat } from "@/app/lib/utils/date.format";
import Button from "@/app/lib/design/common/button";

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  return (
    <div className="product_card_container">
      <ImgContainer
        classes="product_card_image "
        src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
      />
      <div className="product_card_holder_text">
        <Text className="text-gray-800" fontWeight="semibold" textSize="md">
          {product.name}
        </Text>
        <Text className="product_card_description" textSize="sm">
          {product.description}
        </Text>
        <Text textSize="sm" className="text-gray-500 mt-2">
          {convertDateFormat(product.createdAt, "fa")}
        </Text>
      </div>
      <div className="product_card_holder_btn ">
        <Button className="product_card_btn">مشاهده محصول</Button>
      </div>
    </div>
  );
};

export default ProductCard;
