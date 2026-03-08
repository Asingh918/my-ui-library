import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Shell = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1a1a2e' : backgroundColor || '#13131f'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#e2e8f0'};
  border: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed'};
  box-shadow: ${({ disabled }) => disabled ? 'none' : '0 0 20px #7c3aed33'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'default'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: transform 0.15s, box-shadow 0.15s;
  &:hover:not([data-disabled='true']) {
    transform: translateY(-4px);
    box-shadow: 0 0 35px #7c3aed66;
  }
  @media (max-width: 600px) { max-width: 100%; }
`;

const Thumbnail = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed'};
  filter: ${({ disabled }) => disabled ? 'grayscale(100%) brightness(0.5)' : 'none'};
  transition: filter 0.2s;
`;

const CardBody = styled.div`
  padding: 1rem 1.1rem 0.75rem;
  flex: 1;
`;

const CardTitle = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 0.4rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${({ disabled }) => disabled ? '#475569' : '#f1f5f9'};
`;

const CardDesc = styled.p<{ disabled?: boolean }>`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.6;
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: ${({ disabled }) => disabled ? '#334155' : '#94a3b8'};
`;

const CardFooter = styled.div<{ disabled?: boolean }>`
  padding: 0.6rem 1.1rem;
  border-top: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed33'};
  font-size: 0.7rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background-color: ${({ disabled }) => disabled ? '#13131f' : '#0d0d14'};
  color: ${({ disabled }) => disabled ? '#334155' : '#7c3aed'};
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title', description = 'Card description.',
  imageSrc = 'https://placehold.co/300x160/13131f/7c3aed',
  imageAlt = 'Card image', backgroundColor, color,
  disabled = false, footerText = 'Footer',
}) => (
  <Shell backgroundColor={backgroundColor} color={color} disabled={disabled} data-disabled={String(disabled)}>
    <Thumbnail src={imageSrc} alt={imageAlt} disabled={disabled} />
    <CardBody>
      <CardTitle disabled={disabled}>{title}</CardTitle>
      <CardDesc disabled={disabled}>{description}</CardDesc>
    </CardBody>
    <CardFooter disabled={disabled}>{footerText}</CardFooter>
  </Shell>
);

export default Card;
