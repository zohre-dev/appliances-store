import { Text } from "@/app/lib/design/common/text";
import { Title } from "@/app/lib/design/common/title";
import { FC } from "react";
import * as Icons from "react-icons/md";
import { ICommentCardProps } from "./index.types";

const CommentCard: FC<ICommentCardProps> = ({ name, description }) => {
  return (
    <section className="flex flex-col bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
      <section className="flex gap-6 flex-start">
        <Icons.MdComment size={40} className="text-teal-600" />
        <Title level={5} className="text-teal-600 font-semibold text-lg">
          {name}
        </Title>
      </section>
      <Text className="mt-4 text-gray-600 text-base">{description}</Text>
    </section>
  );
};

export default CommentCard;
