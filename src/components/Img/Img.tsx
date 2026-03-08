import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const Picture = styled.img<ImgProps>`
  display: block;
  max-width: 100%;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  border-radius: 10px;
  border: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1a1a2e' : backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => disabled ? 0.35 : 1};
  filter: ${({ disabled }) => disabled ? 'grayscale(100%) brightness(0.5)' : 'none'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'default'};
  transition: opacity 0.2s, filter 0.2s, box-shadow 0.2s, transform 0.15s;
  box-shadow: ${({ disabled }) => disabled ? 'none' : '0 0 20px #7c3aed44'};
  &:hover:not([data-disabled='true']) {
    box-shadow: 0 0 30px #7c3aed88;
    transform: scale(1.02);
  }
`;

const Img: React.FC<ImgProps> = ({
  src = 'https://placehold.co/400x250', alt = 'Image',
  width, height, disabled = false, backgroundColor, borderRadius, objectFit = 'cover',
}) => (
  <Picture src={src} alt={alt} width={width} height={height} disabled={disabled}
    backgroundColor={backgroundColor} borderRadius={borderRadius} objectFit={objectFit}
    data-disabled={String(disabled)} />
);

export default Img;
