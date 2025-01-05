import { ImgContainer } from "@/app/lib/design/common/img-container";
import { FC } from "react";
import { IProps } from "./index.types";
import { Text } from "@/app/lib/design/common/text";

export const Card: FC<IProps> = ({
  src,
  title,
  subtitle,
  hasBorder = true,
}) => {
  return (
    <section className="flex items-center gap-4">
      <ImgContainer src={src} classes="h-20 w-20" />
      <section className="flex flex-col gap-2">
        <Text>{title}</Text>
        <Text className="text-gray-500" textSize="xs">
          {subtitle}
        </Text>
      </section>
      {hasBorder && (
        <span className="w-[1px] h-[90px] bg-gray-400 hidden sm:block"></span>
      )}
    </section>
  );
};
