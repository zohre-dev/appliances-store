export interface IOption {
  label: string;
  value: string;
}
export interface IProps {
  isOpen: boolean;
  options: IOption[];
  emptyMessage?: string;
  dropdownMenuClasses?: string;
  handleSelect: (option: IOption) => void;
}
