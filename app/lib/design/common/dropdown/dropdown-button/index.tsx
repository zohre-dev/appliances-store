"use client";
import { Button } from "@nextui-org/react";
import { Text } from "../../text";
import { FC } from "react";
import { ArrowDownIcon } from "../../icons";

interface IProps {
  isOpen: boolean;
  disable: boolean;
  buttonDropdownClasses?: string;
  selectedLabel: string | null;
  placeholder: string;
  toggleDropdown: () => void;
}
const DropdownButton: FC<IProps> = ({
  isOpen,
  disable,
  buttonDropdownClasses = "",
  selectedLabel,
  placeholder,
  toggleDropdown,
}) => {
  return (
    <Button
      onPress={toggleDropdown}
      className={`flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500${
        disable ? "opacity-50 cursor-not-allowed" : ""
      } ${buttonDropdownClasses}`}
    >
      <Text textSize="xl">{selectedLabel || placeholder}</Text>
      <Text
        as="span"
        className={`transform transition-transform duration-300 `}
      >
        <ArrowDownIcon width={20} height={20} />
      </Text>
    </Button>
  );
};
export default DropdownButton;
