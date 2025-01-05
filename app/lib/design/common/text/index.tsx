import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { IProps } from "./index.types";
import { cn } from "@/app/lib/utils/cn";

export const Text: FC<IProps> = ({
  as = "p",
  textSize = "lg",
  fontWeight = "normal",
  className,
  children,
}) => {
  // IntrinsicElements contains a list of all possible native JSX tags
  const Tag = as as keyof JSX.IntrinsicElements;
  const baseClasses = "text-gray-800";
  const sizeCalsses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
  };
  const weightClasses = {
    normal: "font-normal",
    bold: "font-bold",
    semibold: "semibold",
  };

  return (
    <Tag
      className={cn(
        baseClasses,
        sizeCalsses[textSize],
        weightClasses[fontWeight],
        className
      )}
    >
      {children}
    </Tag>
  );
};
