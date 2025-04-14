import { formatToIranianCurrency } from "@/app/lib/utils/curreny";
import { FC } from "react";

interface IProps {
  minRange: number;
  maxRange: number;
  currency: "toman" | "rial";
}

const RangeLabels: FC<IProps> = ({ minRange, maxRange, currency }) => {
  return (
    <div className="flex justify-between text-sm text-gray-600 mt-8">
      <span>{formatToIranianCurrency(maxRange, currency)}</span>
      <span>{formatToIranianCurrency(minRange, currency)}</span>
    </div>
  );
};

export default RangeLabels;
