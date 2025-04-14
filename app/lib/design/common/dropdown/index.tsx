"use client";

import { cn } from "@/app/lib/utils/cn";
import { FC, useState } from "react";
import { Text } from "../text";
import DropDownLine from "./dropdown-line";
import DropdownMenu from "./dropdown-menu";
import { IOption } from "./dropdown-menu/index.types";
import DropdownButton from "./dropdown-button";

// options,
// onSelect,
// placeholder = 'Select Option',
// disabled = false,
// selectedValue = null,
// emptyMessage = 'No options available',
// className,
// buttonClassName = '',
// dropdownClassName = '',
// variant = 'button',

interface IDropDown {
  options: IOption[];
  onSelect: (selectedOption: IOption) => void;
  placeholder?: string;
  emptyMessage: string;
  selectedValue?: IOption | null;
  variant?: "button" | "line";
  disabled?: boolean;
  className?: string;
  buttonDropdownClasses?: string;
  dropdownMenuClasses?: string;
}
const DropDown: FC<IDropDown> = ({
  className = "",
  placeholder = "",
  onSelect,
  options,
  emptyMessage = "آیتمی وجود ندارد",
  selectedValue,
  variant = "button",
  disabled = false,
  dropdownMenuClasses = "",
  buttonDropdownClasses = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };
  const handleSelect = (option: IOption) => {
    onSelect(option);
    setIsOpen(false);
  };
  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      <Text textSize="xl">{placeholder}</Text>
      {variant === "button" ? (
        <DropdownButton
          disable={disabled}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          selectedLabel={selectedValue?.label || null}
          placeholder={placeholder}
          buttonDropdownClasses="shadow-none bg-white text-black"
        />
      ) : (
        <DropDownLine
          disabled={disabled}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          placeholder={placeholder}
          selectedLabel={selectedValue?.label || null}
        />
      )}

      <DropdownMenu
        isOpen={isOpen}
        options={options}
        handleSelect={handleSelect}
        emptyMessage={emptyMessage}
        dropdownMenuClasses={dropdownMenuClasses}
      />
    </div>
  );
};
export default DropDown;
