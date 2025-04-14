import { FC } from "react";
import { IProps } from "./index.types";
import { Text } from "@/app/lib/design/common/text";
import { formatToIranianCurrency } from "@/app/lib/utils/curreny";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";

const ProductPrice: FC<IProps> = ({ product }) => {
  return (
    product && (
      <div className="mt-4 bg-gray-50 p-4 rounded-md border-2 border-gray-200 shadow-md text-center">
        {product.discount ? (
          <div className="mb-2">
            <Text className="text-lg font-semibold text-red-500 line-through">
              {formatToIranianCurrency(product.price, "toman")}
            </Text>
            <div className="flex justify-center items-center gap-2 mt-2">
              <Text textSize="md" fontWeight="bold" className="text-gray-700">
                قیمت با تخفیف:
              </Text>
              <Text textSize="lg" fontWeight="bold" className="text-green-600">
                {formatToIranianCurrency(
                  calculateDiscountedPrice(product.price, product.discount),
                  "toman"
                )}
              </Text>
            </div>
          </div>
        ) : (
          <Text textSize="lg" fontWeight="bold" className="text-green-600">
            {formatToIranianCurrency(product.price, "toman")}
          </Text>
        )}
      </div>
    )
  );
};
export default ProductPrice;
