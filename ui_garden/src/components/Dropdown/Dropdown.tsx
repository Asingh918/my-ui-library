import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<DropdownProps>`
  display: block; width: 100%; max-width: 320px;
  padding: 0.65rem 1rem;
  font-size: 0.82rem;
  font-family: 'DM Mono', monospace;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  border-bottom: 2px solid ${({ disabled }) => (disabled ? '#333' : '#ff6b35')};
  border-radius: 0;
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#e5e7eb' : backgroundColor || '#141414'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || '#f0ebe0')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: border-color 0.2s;
  -webkit-appearance: none;
  appearance: none;
  background-image: ${({ disabled }) => disabled
    ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23333' fill='none' stroke-width='2'/%3E%3C/svg%3E\")"
    : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23ff6b35' fill='none' stroke-width='2'/%3E%3C/svg%3E\")"};
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.5rem;
  &:focus { outline: none; border-bottom-color: #00d4aa; }
  @media (max-width: 600px) { max-width: 100%; }
`;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Dropdown: React.FC<DropdownProps> = ({
  options = defaultOptions, placeholder = 'Select an option',
  backgroundColor, color, disabled = false, onSelect,
}) => (
  <StyledSelect
    disabled={disabled}
    backgroundColor={backgroundColor}
    color={color}
    defaultValue=""
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelect?.(e.target.value)}
  >
    <option value="" disabled>{placeholder}</option>
    {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
  </StyledSelect>
);

export default Dropdown;
