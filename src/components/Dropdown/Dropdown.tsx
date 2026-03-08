import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 280px;
`;

const SelectEl = styled.select<DropdownProps>`
  width: 100%;
  padding: 0.55rem 2.2rem 0.55rem 0.9rem;
  font-size: 0.85rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 500;
  border: 1px solid ${({ disabled }) => disabled ? '#334155' : '#7c3aed'};
  border-radius: 8px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1a1a2e' : backgroundColor || '#13131f'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#e2e8f0'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  appearance: none;
  -webkit-appearance: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  outline: none;
  box-shadow: ${({ disabled }) => disabled ? 'none' : '0 0 10px #7c3aed33'};
  &:focus {
    border-color: #06b6d4;
    box-shadow: 0 0 16px #06b6d455;
  }
  @media (max-width: 600px) { max-width: 100%; }
`;

const Arrow = styled.span<{ disabled?: boolean }>`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ disabled }) => disabled ? '#475569' : '#7c3aed'};
  font-size: 0.65rem;
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
  <SelectWrapper>
    <SelectEl disabled={disabled} backgroundColor={backgroundColor} color={color}
      defaultValue="" onChange={(e) => onSelect?.(e.target.value)}>
      <option value="" disabled>{placeholder}</option>
      {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </SelectEl>
    <Arrow disabled={disabled}>▼</Arrow>
  </SelectWrapper>
);

export default Dropdown;
