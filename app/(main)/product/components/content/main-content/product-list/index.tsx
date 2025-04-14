import { FC } from "react";
import { IProductListProps } from "./index.types";
import ProductCard from "@/app/lib/design/common/product-card";

const ProductList: FC<IProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 border border-orange-500">
      {products.map((product) => {
        return <ProductCard product={product} key={product._id} />;
      })}
    </div>
  );
};

export default ProductList;
