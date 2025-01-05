"use client";

import { FC } from "react";
import { IProps } from "./index.types";
import Button from "../button";
import * as Icons from "react-icons/md";
import { cn } from "@/app/lib/utils/cn";

export const Search: FC<IProps> = ({
  placeholder,
  buttonLabel,
  className,
  onSearch,
}) => {
  const handleSearch = () => {};
  return (
    <form
      className={cn("relative flex items-center", className)}
      onSubmit={handleSearch}
    >
      <input
        name="search"
        className="w-full p-3 pr-12 rounded-full border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
        placeholder={placeholder}
      />
      <Button
        type="submit"
        className="absolute left-2  top-1/2 transform -translate-y-1/2 flex items-center px-3 py-2 bg-teal-600"
      >
        <Icons.MdSearch size={20} />
        {buttonLabel && <span className="ml-2">{buttonLabel}</span>}
      </Button>
    </form>
  );
};
