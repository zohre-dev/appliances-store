import { ImgContainer } from "@/app/lib/design/common/img-container";
import { LinkContainer } from "@/app/lib/design/common/link-container";
import { Text } from "@/app/lib/design/common/text";

import { FC } from "react";
import { IBrandItemProps } from "./index.types";

const BrandItem: FC<IBrandItemProps> = ({ item }) => {
  return (
    <LinkContainer classes="relative cursor-pointer px-6 py-3 flex flex-col items-center justify-center bg-white rounded-xl shadow-lg gap-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <ImgContainer
        src={`${process.env.NEXT_PUBLIC_API_IMG}${item.image}`}
        classes="w-28 h-28 object-fill"
      />
      <Text className="hover:text-primary transition duration-300">
        {item.name}
      </Text>
    </LinkContainer>
  );
};

export default BrandItem;
