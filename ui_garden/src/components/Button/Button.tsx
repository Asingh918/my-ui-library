import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const paddingMap = {
  small: '0.35rem 0.85rem',
  medium: '0.6rem 1.5rem',
  large: '0.85rem 2.2rem',
};
const fontMap = {
  small: '0.72rem',
  medium: '0.82rem',
  large: '0.92rem',
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size = 'medium' }) => paddingMap[size]};
  font-size: ${({ size = 'medium' }) => fontMap[size]};
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 2px solid ${({ backgroundColor, disabled }) =>
    disabled ? '#333' : backgroundColor || '#ff6b35'};
  border-radius: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#a0a0a0' : backgroundColor || '#ff6b35'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || '#0a0a0a')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.15s, color 0.15s, transform 0.1s;
  position: relative;
  &:hover:not(:disabled) {
    background-color: transparent;
    color: ${({ backgroundColor }) => backgroundColor || '#ff6b35'};
    transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0px ${({ backgroundColor }) => backgroundColor || '#ff6b35'};
  }
  &:active:not(:disabled) { transform: translate(0, 0); box-shadow: none; }
  @media (max-width: 600px) { width: 100%; }
`;

const Button: React.FC<ButtonProps> = ({
  label = 'Button', backgroundColor, color,
  disabled = false, size = 'medium', onClick,
}) => (
  <StyledButton
    backgroundColor={backgroundColor} color={color}
    disabled={disabled} size={size}
    onClick={!disabled ? onClick : undefined}
  >
    {label}
  </StyledButton>
);

export default Button;
