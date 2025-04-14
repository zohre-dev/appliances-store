import { FC } from "react";
import { IProps } from "./index.types";
import { ImgContainer } from "@/app/lib/design/common/img-container";

const ProductImageGallery: FC<IProps> = ({ product }) => {
  return (
    <>
      {Array(4)
        .fill(product.image)
        .map((img, index) => (
          <ImgContainer
            src={`${process.env.NEXT_PUBLIC_API_IMG}${img}`}
            classes="w-40 h-40 object-cover border rounded-md cursor-pointer hover:border-blue-500 transition-colors duration-300"
          />
        ))}
    </>
  );
};
export default ProductImageGallery;
