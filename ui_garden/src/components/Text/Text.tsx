import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '0.88rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-family: ${({ fontWeight }) => fontWeight && parseInt(fontWeight as string) >= 700
    ? "'Syne', sans-serif"
    : "'DM Mono', monospace"};
  line-height: 1.7;
  margin: 0;
  letter-spacing: ${({ fontWeight }) => fontWeight && parseInt(fontWeight as string) >= 700 ? '-0.01em' : '0.02em'};
  padding: ${({ backgroundColor }) => (backgroundColor ? '0.5rem 0.75rem' : '0')};
  border-left: ${({ backgroundColor, disabled }) =>
    backgroundColor || disabled ? 'none' : '2px solid #ff6b35'};
  padding-left: ${({ backgroundColor, disabled }) =>
    !backgroundColor && !disabled ? '0.75rem' : backgroundColor ? '0.75rem' : '0'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#f3f4f6' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || '#f0ebe0')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  transition: background-color 0.2s;
  @media (max-width: 600px) { font-size: 0.8rem; }
`;

const Text: React.FC<TextProps> = ({
  content = 'Text content', backgroundColor, color,
  disabled = false, fontSize, fontWeight, as = 'p',
}) => (
  <StyledText as={as} backgroundColor={backgroundColor} color={color}
    disabled={disabled} fontSize={fontSize} fontWeight={fontWeight}>
    {content}
  </StyledText>
);

export default Text;
