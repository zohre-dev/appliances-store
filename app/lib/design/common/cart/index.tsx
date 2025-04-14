import { FC } from "react";
import { IProps } from "./index.types";
import { LinkContainer } from "../link-container";
import * as Icons from "react-icons/fa";
import { cn } from "@/app/lib/utils/cn";
import { Text } from "../text";
import { ShoppingCartFullIcon } from "../icons";

export const Cart: FC<IProps> = ({ itemsCount = 0, className }) => {
  return (
    <LinkContainer href="./" classes={cn("relative cursor-pointer", className)}>
      <ShoppingCartFullIcon />
      {itemsCount > 0 && (
        <Text
          as="span"
          className="absolute top-0 right-0 bg-red-500 rounded-full text-white text-sm font-bold h-5 w-5 flex items-center justify-center transform -translate-y-1/2 translate-x-1/2  "
        >
          {itemsCount}
        </Text>
      )}
    </LinkContainer>
  );
};
