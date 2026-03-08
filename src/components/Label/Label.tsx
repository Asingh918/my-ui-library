import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const Tag = styled.label<LabelProps>`
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.65rem;
  font-size: ${({ fontSize }) => fontSize || '0.7rem'};
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1e293b' : backgroundColor || '#7c3aed'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#ffffff'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'default'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  border: 1px solid ${({ backgroundColor, disabled }) =>
    disabled ? '#334155' : backgroundColor || '#7c3aed'};
  box-shadow: ${({ disabled, backgroundColor }) =>
    disabled ? 'none' : `0 0 8px ${backgroundColor || '#7c3aed'}44`};
  transition: background-color 0.15s;
  @media (max-width: 600px) { font-size: 0.65rem; }
`;

const Label: React.FC<LabelProps> = ({
  text = 'Label', backgroundColor, color, disabled = false, fontSize,
}) => (
  <Tag backgroundColor={backgroundColor} color={color} disabled={disabled} fontSize={fontSize}>
    {text}
  </Tag>
);

export default Label;
