import { FC } from "react";
import { IProps } from "./index.types";
import { Text } from "@/app/lib/design/common/text";
import { LinkContainer } from "@/app/lib/design/common/link-container";
import Button from "@/app/lib/design/common/button";

const Card: FC<IProps> = ({ item }) => {
  return (
    <div className="relative basis-1/4  flex items-center">
      <div
        className={`w-full h-full mx-[15px] py-10 pr-6 rounded-lg flex flex-col gap-2 ${item.bgColor}`}
      >
        <div
          className={`overlay w-full h-full absolute top-0 left-0 bg-no-repeat bg-contain bg-transparent bg-custom-position ${item.imagePath}`}
        ></div>
        {item.title.map((text, index) => (
          <Text
            key={index}
            as="p"
            textSize="lg"
            className={`relative text-white ${
              index === 1 && `text-2xl font-bold`
            }`}
          >
            {text}
          </Text>
        ))}
        <LinkContainer href={""}>
          <Button isOutline className="px-4 py-2 text-white">
            {item.buttonText}
          </Button>
        </LinkContainer>
      </div>
    </div>
  );
};
export default Card;
