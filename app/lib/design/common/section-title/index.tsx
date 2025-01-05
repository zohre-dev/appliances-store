import { FC } from "react";
import { IProps } from "./index.types";
import { cn } from "@/app/lib/utils/cn";

const SectionTitle: FC<IProps> = ({
  title,
  className = "",
  lineClassName = "",
  isActiveLine = true,
}) => {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {isActiveLine && (
        <span
          className={cn("bg-gray-300 h-[1px] flex-1", lineClassName)}
        ></span>
      )}
    </div>
  );
};

export default SectionTitle;
