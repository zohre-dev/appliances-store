"use client";

import { FC } from "react";
import { Text } from "../../text";
import { ArrowDownIcon } from "../../icons";

interface IProps {
  disabled: boolean;
  toggleDropdown: () => void;
  selectedLabel: string | null;
  placeholder: string;
  isOpen: boolean;
}
const DropDownLine: FC<IProps> = ({
  disabled,
  toggleDropdown,
  selectedLabel,
  placeholder,
  isOpen,
}) => {
  return (
    <div
      onClick={toggleDropdown}
      className={`flex justify-between items-center border-b-2 ${
        disabled
          ? "cursor-not-allowed bg-opacity-300 border-gray-200"
          : "border-indigo-500"
      }`}
    >
      <Text
        textSize="xl"
        className={`pb-1 text-gray-700 ${
          disabled ? "text-gray-400" : "hover:text-indigo-600"
        }`}
      >
        {selectedLabel || placeholder}
      </Text>
      <Text
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <ArrowDownIcon width={20} height={20} />
      </Text>
    </div>
  );
};

export default DropDownLine;
