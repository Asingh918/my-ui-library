import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const Paragraph = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '0.95rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-family: 'Segoe UI', system-ui, sans-serif;
  line-height: 1.75;
  margin: 0;
  padding: ${({ backgroundColor }) => backgroundColor ? '0.75rem 1rem' : '0'};
  border-radius: ${({ backgroundColor }) => backgroundColor ? '8px' : '0'};
  border-left: ${({ backgroundColor, disabled }) =>
    (backgroundColor || disabled) ? `3px solid ${disabled ? '#334155' : '#7c3aed'}` : 'none'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1a1a2e' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#e2e8f0'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'text'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  transition: background-color 0.15s;
  @media (max-width: 600px) { font-size: 0.88rem; }
`;

const Text: React.FC<TextProps> = ({
  content = 'Text content', backgroundColor, color,
  disabled = false, fontSize, fontWeight, as = 'p',
}) => (
  <Paragraph as={as} backgroundColor={backgroundColor} color={color}
    disabled={disabled} fontSize={fontSize} fontWeight={fontWeight}>
    {content}
  </Paragraph>
);

export default Text;
