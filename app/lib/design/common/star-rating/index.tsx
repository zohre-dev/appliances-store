import { FC } from "react";
import { IProps } from "./index.types";
import { cn } from "@/app/lib/utils/cn";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

export const StarRating: FC<IProps> = ({
  rating,
  starSize = "text-xl",
  classes,
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return (
    <div className={cn("flex", classes)}>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <MdStar key={index} className={cn("text-yellow-500", starSize)} />
        ))}
      {halfStar === 1 && <MdStar className={cn("text-yellow-500", starSize)} />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <MdStar key={index} className={cn("text-yellow-500", starSize)} />
        ))}
    </div>
  );
};
