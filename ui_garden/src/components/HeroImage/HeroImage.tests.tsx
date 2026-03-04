import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders title and subtitle and they are visible', () => {
    render(<HeroImage title="Test Hero" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Hero')).toBeVisible();
    expect(screen.getByText('Test Subtitle')).toBeVisible();
  });

  test('wrapper has grey background-color when disabled', () => {
    const { container } = render(<HeroImage title="Disabled" subtitle="Sub" disabled={true} />);
    expect(container.firstChild).toHaveStyleRule('background-color', '#d1d5db');
  });

  test('wrapper has not-allowed cursor when disabled', () => {
    const { container } = render(<HeroImage title="Disabled" subtitle="Sub" disabled={true} />);
    expect(container.firstChild).toHaveStyleRule('cursor', 'not-allowed');
  });
});
