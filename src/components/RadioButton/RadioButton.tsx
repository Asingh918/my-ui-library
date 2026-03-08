import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Container = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 0.65rem;
  border-radius: 8px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1a1a2e' : backgroundColor || '#13131f'};
  color: ${({ disabled }) => disabled ? '#475569' : '#e2e8f0'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  border: 1px solid ${({ disabled }) => disabled ? '#334155' : '#7c3aed'};
  box-shadow: ${({ disabled }) => disabled ? 'none' : '0 0 8px #7c3aed33'};
  transition: all 0.15s;
  &:hover:not([data-disabled='true']) {
    border-color: #06b6d4;
    box-shadow: 0 0 14px #06b6d455;
    background-color: #0d1a2e;
  }
  @media (max-width: 600px) { font-size: 0.8rem; }
`;

const RadioInput = styled.input`
  width: 0.9rem;
  height: 0.9rem;
  accent-color: #7c3aed;
  cursor: inherit;
  flex-shrink: 0;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Option', name = 'radio', value = 'option',
  checked = false, disabled = false, backgroundColor, color, onSelect,
}) => (
  <Container disabled={disabled} backgroundColor={backgroundColor} data-disabled={String(disabled)}>
    <RadioInput type="radio" name={name} value={value} checked={checked}
      disabled={disabled} onChange={(e) => onSelect?.(e.target.value)} readOnly={!onSelect} />
    <span style={{ color: disabled ? '#475569' : color || '#e2e8f0' }}>{label}</span>
  </Container>
);

export default RadioButton;
