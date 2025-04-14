import SectionTitle from "@/app/lib/design/common/section-title";
import { cn } from "@/app/lib/utils/cn";
import { Divider } from "@nextui-org/react";
import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  isBorderBottom?: boolean;
}
const SideFilter: FC<IProps> = ({
  children,
  title,
  className = "",
  isBorderBottom = false,
}) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <SectionTitle title={title} isActiveLine={false} />
      {children}
      {isBorderBottom && <Divider className="h-[1px] w-[98%] bg-gray-400" />}
    </div>
  );
};

export default SideFilter;
