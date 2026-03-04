import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  display: block; max-width: 100%;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  border-radius: 0;
  border: 2px solid ${({ disabled }) => disabled ? '#222' : '#2a2a2a'};
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#111' : backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  transition: opacity 0.2s, filter 0.2s, border-color 0.15s, transform 0.15s, box-shadow 0.15s;
  &:hover:not([data-disabled='true']) {
    border-color: #ff6b35;
    transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0px #ff6b35;
  }
`;

const Img: React.FC<ImgProps> = ({
  src = 'https://placehold.co/400x250', alt = 'Image',
  width, height, disabled = false, backgroundColor, borderRadius, objectFit = 'cover',
}) => (
  <StyledImg src={src} alt={alt} width={width} height={height}
    disabled={disabled} backgroundColor={backgroundColor} borderRadius={borderRadius} objectFit={objectFit}
    data-disabled={String(disabled)} />
);

export default Img;
