"use client";
import { FC } from "react";
import Button from "../../button";
import { cn } from "@/app/lib/utils/cn";
import { IProps } from "./index.types";
// const option = [
//   { lable: "همه", value: "" },
//   {
//     label: "امتیاز",
//     value: "rating",
//   },
//   {
//     label: "فروش",
//     value: "sales",
//   },
// ];

// interface IOption {
//   label: string;
//   value: string;
// }
// interface IProps {
//   isOpen: boolean;
//   options: IOption[];
//   emptyMessage?: string;
//   dropdownMenuClasses?: string;
//   handleSelect: (option: IOption) => void;
// }
const DropdownMenu: FC<IProps> = ({
  isOpen,
  options,
  emptyMessage,
  dropdownMenuClasses = "",
  handleSelect,
}) => {
  //isOpen=false
  if (!isOpen) return;

  return (
    <div
      className={cn(
        "bg-white rounded-md ring-1 ring-black ring-opacity-5 top-full ",
        dropdownMenuClasses
      )}
    >
      {options.length > 0 ? (
        <ul className="py-1 divide-y divide-gary-100">
          {options.map((option) => {
            return (
              <li key={option.value}>
                <Button
                  className="block w-full px-4 py-2 text-lg text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </Button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="px-4 py-2 text-sm text-gray-500">{emptyMessage}</div>
      )}
    </div>
  );
};

export default DropdownMenu;
