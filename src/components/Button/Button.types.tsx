export interface ButtonProps {
  label?: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}
