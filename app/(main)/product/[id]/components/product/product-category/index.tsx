import { FC } from "react";
import { IProps } from "./index.types";
import { Text } from "@/app/lib/design/common/text";
import { LinkContainer } from "@/app/lib/design/common/link-container";

const ProductCategory: FC<IProps> = ({ product }) => {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <Text as="span" textSize="sm">
        دسته بندی:
      </Text>
      <LinkContainer>{product.category.name}</LinkContainer>
    </div>
  );
};
export default ProductCategory;
