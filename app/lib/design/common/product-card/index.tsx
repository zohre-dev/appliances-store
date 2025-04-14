import { IProductState } from "@/app/lib/services/product/index.types";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";
import { cn } from "@/app/lib/utils/cn";
import { FC } from "react";
import { LinkContainer } from "../link-container";
import { ImgContainer } from "../img-container";
import { Text } from "../text";
import { convertDateFormat } from "@/app/lib/utils/date.format";
import { StarRating } from "../star-rating";
import { formatToIranianCurrency } from "@/app/lib/utils/curreny";

interface IProductCardProps {
  product: IProductState;
  showDescription?: boolean;
  showRating?: boolean;
  showDiscount?: boolean;
  showCreatedDate?: boolean;
  buttonLable?: string;
  onButtonClick?: () => void;
  parrentClassName?: string;
  imgClassName?: string;
  imgLink?: string;
}

const ProductCard: FC<IProductCardProps> = ({
  product,
  showDescription = true,
  showRating = true,
  showDiscount = true,
  showCreatedDate = true,
  buttonLable = "مشاهده محصول",
  onButtonClick,
  parrentClassName,
  imgClassName,
  imgLink = `/product/${product._id}`,
}) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discount
  );

  return (
    <div
      className={cn(
        "rounded-xl shadow-lg border border-gray-200 relative flex flex-col gap-4 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl",
        parrentClassName
      )}
    >
      <LinkContainer classes="relative" href={imgLink}>
        <ImgContainer
          classes={cn("h-60 w-60 rounded-t-xl mx-auto  object-fill")}
          src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
        />
      </LinkContainer>

      <div className="flex flex-col items-start px-2 gap-3">
        <Text className="font-semibold text-gray-800">{product.name}</Text>
        {showDescription && (
          <Text className="text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%]">
            {product.description ||
              "محصولاتی با کیفیت بالا و ویژگی‌های منحصر به فرد که تجربه‌ای عالی برای شما به ارمغان می‌آورند"}
          </Text>
        )}
        {showCreatedDate && (
          <Text className="text-sm mt-2 text-gray-500">
            محصول جدید از تاریخ : {convertDateFormat(product.createdAt, "fa")}
          </Text>
        )}
      </div>
      {showRating && (
        <div className="flex items-center">
          <span className="text-sm mr-2 text-blue-500 font-semibold">
            امتیاز مشتریان :
          </span>
          <StarRating
            rating={product.rating}
            classes="px-2"
            starSize="text-lg"
          />
        </div>
      )}
      <div className="flex flex-col px-2">
        {showDiscount && product.discount > 0 && (
          <div className="flex items-center space-x-2 space-x-reverse">
            <Text className="text-sm text-gray-400 line-through text-center border border-blue-500">
              {formatToIranianCurrency(product.price, "toman")}
            </Text>
            <Text className="text-sm text-red-500 font-semibold text-center border border-yellow-500">
              {product.discount}% تخفیف خورده
            </Text>
          </div>
        )}

        <Text
          textSize="lg"
          fontWeight="bold"
          className={cn(
            `${product.discount ? "text-teal-500" : "text-red-500"}`
          )}
        >
          {formatToIranianCurrency(discountedPrice, "toman")}
        </Text>
      </div>
    </div>
  );
};

export default ProductCard;
