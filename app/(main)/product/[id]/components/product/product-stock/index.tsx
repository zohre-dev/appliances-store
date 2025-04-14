import { Text } from "@/app/lib/design/common/text";
import { Title } from "@/app/lib/design/common/title";
import { FC } from "react";
import { IProps } from "./index.types";

const ProductStock: FC<IProps> = ({ product }) => {
  return (
    <div className="mt-4 bg-gray-100 p-4 rounded-md border border-gray-300 shadow-md text-center">
      <Title level={3} className="text-lg font-bold mb-2 text-gray-800">
        موجودی انبار
      </Title>
      <Text
        textSize="md"
        className={
          product?.stock && product?.stock > 0
            ? "text-green-600"
            : "text-red-600"
        }
      >
        {product?.stock && product?.stock > 0
          ? `${product?.stock} عدد موجود است `
          : "ناموجود"}
      </Text>
    </div>
  );
};
export default ProductStock;
