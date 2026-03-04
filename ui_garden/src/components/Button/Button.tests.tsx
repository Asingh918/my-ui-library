import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Button from './Button';

describe('Button Component', () => {
  test('renders and is visible', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeVisible();
  });

  test('has grey background-color when disabled', () => {
    render(<Button label="Disabled" disabled={true} />);
    expect(screen.getByText('Disabled')).toHaveStyleRule('background-color', '#a0a0a0');
  });

  test('has not-allowed cursor when disabled', () => {
    render(<Button label="No Click" disabled={true} />);
    expect(screen.getByText('No Click')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
