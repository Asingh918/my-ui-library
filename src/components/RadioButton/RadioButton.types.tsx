export interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  onSelect?: (value: string) => void;
}
