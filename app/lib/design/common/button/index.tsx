"use client";

import { cn } from "@/app/lib/utils/cn";
import { FC } from "react";
import { IProps } from "./index.types";
import { FaSpinner } from "react-icons/fa";

const Button: FC<IProps> = ({
  children,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  isDisabled = false,
  isOutline = false,
  ...rest
}) => {
  const baseClasses =
    "flex items-center justify-center font-medium rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const outlineClasses = isOutline ? "border-2 bg-transparent" : "";
  const disableClasses = isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <>
      <button
        className={cn(baseClasses, outlineClasses, disableClasses, className)}
        disabled={isDisabled}
        {...rest}
      >
        {isLoading ? (
          <FaSpinner className="animate-spin text-lg" />
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    </>
  );
};
export default Button;
