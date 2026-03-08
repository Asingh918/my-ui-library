import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Banner = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '380px'};
  background-image: ${({ src, disabled }) => !disabled && src ? `url(${src})` : 'none'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1a1a2e' : backgroundColor || '#0d0d14'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  border-radius: 12px;
  border: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed'};
  overflow: hidden;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'default'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  filter: ${({ disabled }) => disabled ? 'grayscale(80%)' : 'none'};
  box-shadow: ${({ disabled }) => disabled ? 'none' : '0 0 40px #7c3aed44'};
  transition: opacity 0.2s, filter 0.2s;
  @media (max-width: 600px) { height: 220px; }
`;

const Scrim = styled.div<{ overlayColor?: string; disabled?: boolean }>`
  position: absolute;
  inset: 0;
  background: ${({ overlayColor, disabled }) =>
    disabled
      ? 'rgba(0,0,0,0.6)'
      : overlayColor || 'linear-gradient(to top, rgba(13,13,20,0.95) 0%, rgba(13,13,20,0.2) 60%)'};
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem 2.5rem;
`;

const HeroTitle = styled.h1<{ color?: string; disabled?: boolean }>`
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.6rem);
  font-weight: 900;
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#f1f5f9'};
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
  text-shadow: ${({ disabled }) => disabled ? 'none' : '0 0 30px #7c3aed88'};
`;

const HeroSubtitle = styled.p<{ color?: string; disabled?: boolean }>`
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: clamp(0.82rem, 2vw, 1rem);
  font-weight: 400;
  color: ${({ color, disabled }) => disabled ? '#334155' : color || '#94a3b8'};
  margin: 0;
  letter-spacing: 0.02em;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src = 'https://placehold.co/1200x380/0d0d14/7c3aed',
  title = 'Hero Title', subtitle = 'Subtitle goes here',
  backgroundColor, color, disabled = false, height, overlayColor,
}) => (
  <Banner src={src} height={height} backgroundColor={backgroundColor} disabled={disabled}>
    <Scrim overlayColor={overlayColor} disabled={disabled} />
    <Inner>
      <HeroTitle color={color} disabled={disabled}>{title}</HeroTitle>
      <HeroSubtitle color={color} disabled={disabled}>{subtitle}</HeroSubtitle>
    </Inner>
  </Banner>
);

export default HeroImage;
