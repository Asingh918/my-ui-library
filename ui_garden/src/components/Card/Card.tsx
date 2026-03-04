import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Wrapper = styled.div<CardProps>`
  display: flex; flex-direction: column;
  width: 100%; max-width: 340px;
  border-radius: 0;
  overflow: hidden;
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#e5e7eb' : backgroundColor || '#141414'};
  color: ${({ color, disabled }) => (disabled ? '#444' : color || '#f0ebe0')};
  border: 1px solid ${({ disabled }) => disabled ? '#222' : '#2a2a2a'};
  border-top: 3px solid ${({ disabled }) => disabled ? '#333' : '#ff6b35'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: border-color 0.2s, transform 0.15s, box-shadow 0.15s;
  &:hover:not([data-disabled='true']) {
    transform: translate(-3px, -3px);
    box-shadow: 4px 4px 0px #ff6b35;
  }
  @media (max-width: 600px) { max-width: 100%; }
`;

const CardImage = styled.img<{ disabled?: boolean }>`
  width: 100%; height: 180px; object-fit: cover;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%) brightness(0.4)' : 'none')};
  transition: filter 0.2s;
`;

const Body = styled.div`padding: 1.25rem; flex: 1;`;

const Title = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 0.5rem;
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ disabled }) => (disabled ? '#444' : 'inherit')};
`;

const Description = styled.p<{ disabled?: boolean }>`
  margin: 0; font-size: 0.82rem; line-height: 1.6;
  font-family: 'DM Mono', monospace;
  color: ${({ disabled }) => (disabled ? '#333' : '#888')};
`;

const Footer = styled.div<{ disabled?: boolean }>`
  padding: 0.65rem 1.25rem;
  border-top: 1px solid ${({ disabled }) => disabled ? '#222' : '#2a2a2a'};
  font-size: 0.7rem;
  font-family: 'DM Mono', monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background-color: ${({ disabled }) => disabled ? '#111' : '#0d0d0d'};
  color: ${({ disabled }) => (disabled ? '#333' : '#ff6b35')};
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title', description = 'Card description.',
  imageSrc = 'https://placehold.co/340x180', imageAlt = 'Card image',
  backgroundColor, color, disabled = false, footerText = 'Footer',
}) => (
  <Wrapper backgroundColor={backgroundColor} color={color} disabled={disabled} data-disabled={String(disabled)}>
    <CardImage src={imageSrc} alt={imageAlt} disabled={disabled} />
    <Body>
      <Title disabled={disabled}>{title}</Title>
      <Description disabled={disabled}>{description}</Description>
    </Body>
    <Footer disabled={disabled}>{footerText}</Footer>
  </Wrapper>
);

export default Card;
