import { ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  isOutline?: boolean;
  isDisabled?: boolean;
}
