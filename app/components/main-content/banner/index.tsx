import {
  ImgContainer,
  loadImageFun,
} from "@/app/lib/design/common/img-container";
import { IProps } from "./index.types";
import Image from "@/public/images/p-25-min.png";
import { Title } from "@/app/lib/design/common/title";
import { Text } from "@/app/lib/design/common/text";
import Button from "@/app/lib/design/common/button";

export const Banner: React.FC<IProps> = ({ className }) => {
  return (
    <div className=" h-[600px] bg-gradient-to-r from-orange-400 to-yellow-500 flex flex-col items-center rounded-lg text-white">
      <ImgContainer src={Image.src} classes={"w-[600px] h-[300px]"} />
      <Title
        level={1}
        className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
      >
        محصولات شگفت‌انگیز ما!
      </Title>
      <Text
        as="p"
        className="w-[600px] md:text-xl max-w-[600px] mb-6 drop-shadow-md"
      >
        از جدیدترین محصولات ما دیدن کنید و بهترین انتخاب‌ها را برای خود داشته
        باشید.
      </Text>

      <Button className="bg-white text-orange-500 font-semibold px-6 py-3 shadow-md hover:bg-orange-100 transition-all duration-300">
        مشاهده محصولات
      </Button>
    </div>
  );
};
