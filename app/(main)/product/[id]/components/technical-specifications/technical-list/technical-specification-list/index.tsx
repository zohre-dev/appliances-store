import { FC } from "react";
import { IProps } from "./index.types";
import TechnicalSpecificationItem from "../technical-specification-item";
import { Button } from "@nextui-org/react";
import { ArrowDownIcon } from "@/app/lib/design/common/icons";

const TechnicalSpecificationList: FC<IProps> = ({
  sepecifications,
  showMore,
  onToggleShowMore,
}) => {
  const variableSpecifications = showMore
    ? sepecifications
    : sepecifications.slice(0, 4);

  return (
    <div className="flex flex-col gap-2 ">
      {variableSpecifications.map((item, index) => (
        <TechnicalSpecificationItem
          key={item._id}
          specification={item}
          isDimmed={!showMore && index === variableSpecifications.length - 1}
        />
      ))}
      <Button
        className="flex items-center gap-4 w-fit px-4 py-2 mx-auto"
        onPress={onToggleShowMore}
        size="md"
        color="primary"
        endContent={
          <span
            className={`transform transition-all duration-300 ${
              showMore ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDownIcon color="white" width={20} height={20} />
          </span>
        }
      >
        {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
      </Button>
    </div>
  );
};

export default TechnicalSpecificationList;
