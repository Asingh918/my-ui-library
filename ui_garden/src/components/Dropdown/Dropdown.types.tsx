export interface DropdownOption { value: string; label: string; }
export interface DropdownProps {
  options?: DropdownOption[];
  placeholder?: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  onSelect?: (value: string) => void;
}
