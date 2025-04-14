import { formatToIranianCurrency } from "@/app/lib/utils/curreny";
import { FC } from "react";

interface IProps {
  minPrice: number;
  maxPrice: number;
}

const SliderLabels: FC<IProps> = ({ minPrice, maxPrice }) => {
  return (
    <div className="absolute -top-10 flex justify-between gap-4 w-full border border-yellow-800">
      <div className="text-sm font-bold text-indigo-600 ">
        {formatToIranianCurrency(maxPrice)}
      </div>
      <div className="text-sm font-bold text-indigo-600 ">
        {formatToIranianCurrency(minPrice)}
      </div>
    </div>
  );
};

export default SliderLabels;
