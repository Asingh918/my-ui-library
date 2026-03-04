import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid ${({ disabled }) => disabled ? '#2a2a2a' : '#2a2a2a'};
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#e5e7eb' : backgroundColor || '#141414'};
  color: ${({ disabled }) => (disabled ? '#333' : '#f0ebe0')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  transition: border-color 0.15s, background-color 0.15s;
  &:hover:not([data-disabled='true']) { border-color: #ff6b35; }
  @media (max-width: 600px) { font-size: 0.75rem; }
`;

const HiddenInput = styled.input`
  width: 14px; height: 14px;
  accent-color: #ff6b35;
  cursor: inherit;
  flex-shrink: 0;
`;

const CustomRadio = styled.span<{ checked?: boolean; disabled?: boolean }>`
  width: 14px; height: 14px;
  border: 2px solid ${({ checked, disabled }) =>
    disabled ? '#333' : checked ? '#ff6b35' : '#555'};
  background-color: ${({ checked, disabled }) =>
    disabled ? 'transparent' : checked ? '#ff6b35' : 'transparent'};
  display: inline-block;
  flex-shrink: 0;
  transition: border-color 0.15s, background-color 0.15s;
  position: relative;
  &::after {
    content: '';
    display: ${({ checked }) => checked ? 'block' : 'none'};
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 4px; height: 4px;
    background-color: #0a0a0a;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Option', name = 'radio', value = 'option',
  checked = false, disabled = false, backgroundColor, color, onSelect,
}) => (
  <Wrapper disabled={disabled} backgroundColor={backgroundColor} data-disabled={String(disabled)}>
    <HiddenInput
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSelect?.(e.target.value)}
      readOnly={!onSelect}
    />
    <span style={{ color: disabled ? '#333' : color || '#f0ebe0' }}>{label}</span>
  </Wrapper>
);

export default RadioButton;
