import { ImgContainer } from "@/app/lib/design/common/img-container";
import { Text } from "@/app/lib/design/common/text";
import { Title } from "@/app/lib/design/common/title";
import { Button } from "@nextui-org/react";
import { FC } from "react";

interface IProps {
  item: {
    src: string;
    title: string;
    description: string;
  };
}
const BannerItem: FC<IProps> = ({ item }) => {
  const { title, src, description } = item;
  return (
    <div className="lg:h-[550px] h-[300px] text-white flex flex-col justify-center items-center  relative ">
      <ImgContainer
        src={src}
        classes="w-full h-full rounded-xl  -z-1 object-fill"
      />
      <div className="bg-opacity-70 flex flex-col justify-center items-center z-10 p-6  bg-black rounded-lg absolute">
        <Title level={3} className="font-bold mb-4  text-white">
          {title}
        </Title>
        <Text
          textSize="md"
          className="mb-6 text-justify  text-white leading-loose"
        >
          {description}
        </Text>

        <Button size="lg" variant="shadow">
          خرید
        </Button>
      </div>
    </div>
  );
};

export default BannerItem;
