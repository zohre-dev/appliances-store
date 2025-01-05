export interface IProps {
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
  onSearch?: (searchTerm: string) => void;
}
