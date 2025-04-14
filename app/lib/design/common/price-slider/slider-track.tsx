import { FC } from "react";

interface IProps {
  minPrice: number;
  maxPrice: number;
  calculatePosition: (value: number) => number;
}

const SliderTrack: FC<IProps> = ({ minPrice, maxPrice, calculatePosition }) => {
  return (
    <div className="relative h-1 bg-gray-300 rounded-full w-full">
      <div
        className="absolute h-1 bg-green-600 rounded-full w-full"
        style={{
          left: ` ${calculatePosition(minPrice)}%`,
          width: `${
            calculatePosition(maxPrice) - calculatePosition(minPrice)
          }%`,
        }}
      ></div>
    </div>
  );
};
export default SliderTrack;
