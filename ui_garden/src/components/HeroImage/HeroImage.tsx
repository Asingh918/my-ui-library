import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<HeroImageProps>`
  position: relative; width: 100%;
  height: ${({ height }) => height || '420px'};
  background-image: ${({ src, disabled }) => (!disabled && src ? `url(${src})` : 'none')};
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#d1d5db' : backgroundColor || '#141414'};
  background-size: cover; background-position: center;
  display: flex; align-items: flex-end; justify-content: flex-start;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  transition: opacity 0.2s, filter 0.2s;
  border-left: 4px solid ${({ disabled }) => disabled ? '#333' : '#ff6b35'};
  @media (max-width: 600px) { height: 260px; }
`;

const Overlay = styled.div<{ overlayColor?: string; disabled?: boolean }>`
  position: absolute; inset: 0;
  background: ${({ overlayColor, disabled }) =>
    disabled
      ? 'rgba(0,0,0,0.7)'
      : overlayColor || 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)'};
`;

const Content = styled.div`
  position: relative; z-index: 1;
  padding: 2.5rem 2.5rem;
`;

const HeroTitle = styled.h1<{ color?: string; disabled?: boolean }>`
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 800;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: ${({ color, disabled }) => (disabled ? '#444' : color || '#f0ebe0')};
  line-height: 1;
`;

const AccentLine = styled.div<{ disabled?: boolean }>`
  width: 60px;
  height: 3px;
  background-color: ${({ disabled }) => disabled ? '#333' : '#ff6b35'};
  margin-bottom: 0.75rem;
`;

const HeroSubtitle = styled.p<{ color?: string; disabled?: boolean }>`
  font-family: 'DM Mono', monospace;
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  color: ${({ color, disabled }) => (disabled ? '#444' : color || '#888')};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src = 'https://placehold.co/1200x420', title = 'Hero Title',
  subtitle = 'Subtitle goes here', backgroundColor, color,
  disabled = false, height, overlayColor,
}) => (
  <HeroWrapper src={src} height={height} backgroundColor={backgroundColor} disabled={disabled}>
    <Overlay overlayColor={overlayColor} disabled={disabled} />
    <Content>
      <AccentLine disabled={disabled} />
      <HeroTitle color={color} disabled={disabled}>{title}</HeroTitle>
      <HeroSubtitle color={color} disabled={disabled}>{subtitle}</HeroSubtitle>
    </Content>
  </HeroWrapper>
);

export default HeroImage;
