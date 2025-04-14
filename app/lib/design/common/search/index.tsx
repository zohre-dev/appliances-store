"use client";

import { FC } from "react";
// import { IProps } from "./index.types";
import Button from "../button";
import * as Icons from "react-icons/md";
import { cn } from "@/app/lib/utils/cn";
import Input from "../input";
import { SearchIcon } from "../icons";

// handleGetValue={(value) => setValue(value)}
interface IProps {
  handleGetValue: (value: string) => void;
  searchTerm: string;
  placeholder?: string;
  className?: string;
  buttonLabel?: string;
  onClick: () => void;
}
export const Search: FC<IProps> = ({
  handleGetValue,
  searchTerm,
  placeholder,
  className,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Input
        type="text"
        parentClasses="w-full"
        className="w-full p-3 pr-12 rounded-full border"
        handleChange={(value) => handleGetValue(value)}
        value={searchTerm}
        placeholder={placeholder}
      />

      <Button
        onClick={onClick}
        type="submit"
        className="absolute left-2  top-1/2 transform -translate-y-1/2 flex justify-cente items-center  bg-teal-600 w-8 h-8  text-white rounded-full"
      >
        <SearchIcon color="white" />
        {buttonLabel && <span className="ml-2">{buttonLabel}</span>}
      </Button>
    </div>
  );
};
