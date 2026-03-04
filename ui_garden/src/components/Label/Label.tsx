import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.65rem;
  font-size: ${({ fontSize }) => fontSize || '0.7rem'};
  font-weight: 500;
  font-family: 'DM Mono', monospace;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 0;
  border: 1px solid ${({ backgroundColor, disabled }) =>
    disabled ? '#333' : backgroundColor || '#ff6b35'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || '#ff6b35')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.15s;
  &::before {
    content: '';
    display: inline-block;
    width: 5px; height: 5px;
    border-radius: 50%;
    background-color: ${({ backgroundColor, disabled }) =>
      disabled ? '#333' : backgroundColor || '#ff6b35'};
    filter: ${({ disabled }) => disabled ? 'none' : 'brightness(1.3)'};
  }
  @media (max-width: 600px) { font-size: 0.65rem; }
`;

const Label: React.FC<LabelProps> = ({
  text = 'Label', backgroundColor, color, disabled = false, fontSize,
}) => (
  <StyledLabel backgroundColor={backgroundColor} color={color} disabled={disabled} fontSize={fontSize}>
    {text}
  </StyledLabel>
);

export default Label;
