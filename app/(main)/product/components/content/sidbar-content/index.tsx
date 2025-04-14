"use client";

import { cn } from "@/app/lib/utils/cn";
import { FC } from "react";
import SideFilter from "./side-filter";
import DropDown from "@/app/lib/design/common/dropdown";
import SortFilter from "./sort-filter";
import CategoriesFilter from "./categories-filter";
import Brand from "./brand/brand";
import PriceFilter from "./price-filter";
import ResetFilter from "./reset-filter";

export interface ClassNameType {
  className?: string;
}
export interface IProps extends ClassNameType {}

// ********************************************
const SideBarContent: FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        `flex flex-col gap-8 px-6 py-3 rounded-lg bg-white bg-opacity-50 backdrop-blur-lg border border-white border-opacity-20`,
        className
      )}
    >
      <SideFilter title="">
        <ResetFilter />
      </SideFilter>
      <SideFilter title="مرتب سازی">
        <SortFilter />
      </SideFilter>

      <SideFilter title="دسته بندی">
        <CategoriesFilter />
      </SideFilter>

      <SideFilter title="برند محصول">
        <Brand />
      </SideFilter>
      <SideFilter title=" بر اساس قیمت">
        <PriceFilter />
      </SideFilter>
    </div>
  );
};

export default SideBarContent;
