import { FC } from "react";
import { IProps } from "./index.types";
import { Text } from "@/app/lib/design/common/text";

const TechnicalSpecificationItem: FC<IProps> = ({
  isDimmed,
  specification,
}) => {
  return (
    <div
      className={`flex items-center gap-3  px-6 py-4 rounded-md shadow-md hover:bg-blue-50 transition-all duration-300 ${
        isDimmed ? "opacity-60" : ""
      }`}
    >
      <Text textSize="md" fontWeight="bold" className="text-gray-900">
        {specification.key}
      </Text>
      <Text textSize="md" className="text-gray-700">
        {specification.value}
      </Text>
    </div>
  );
};
export default TechnicalSpecificationItem;
