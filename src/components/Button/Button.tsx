import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const sizeStyles = {
  small:  { padding: '0.3rem 1rem',    fontSize: '0.75rem' },
  medium: { padding: '0.5rem 1.5rem',  fontSize: '0.85rem' },
  large:  { padding: '0.7rem 2rem',    fontSize: '0.95rem' },
};

const Btn = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size = 'medium' }) => sizeStyles[size].padding};
  font-size: ${({ size = 'medium' }) => sizeStyles[size].fontSize};
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  border-radius: 8px;
  border: 1px solid ${({ backgroundColor, disabled }) =>
    disabled ? '#334155' : backgroundColor || '#7c3aed'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1e293b' : backgroundColor || '#7c3aed'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#ffffff'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  transition: all 0.15s;
  box-shadow: ${({ disabled, backgroundColor }) =>
    disabled ? 'none' : `0 0 14px ${backgroundColor || '#7c3aed'}55`};
  &:hover:not(:disabled) {
    filter: brightness(1.15);
    box-shadow: 0 0 22px ${({ backgroundColor }) => backgroundColor || '#7c3aed'}88;
    transform: translateY(-1px);
  }
  @media (max-width: 600px) { width: 100%; }
`;

const Button: React.FC<ButtonProps> = ({
  label = 'Button', backgroundColor, color,
  disabled = false, size = 'medium', onClick,
}) => (
  <Btn
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    size={size}
    onClick={!disabled ? onClick : undefined}
  >
    {label}
  </Btn>
);

export default Button;
