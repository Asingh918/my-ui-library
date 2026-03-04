import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Card from './Card';

describe('Card Component', () => {
  test('renders and is visible', () => {
    render(<Card title="Test Card" description="Test description" />);
    expect(screen.getByText('Test Card')).toBeVisible();
    expect(screen.getByText('Test description')).toBeVisible();
  });

  test('has grey background-color when disabled', () => {
    const { container } = render(<Card title="Disabled" disabled={true} />);
    expect(container.firstChild).toHaveStyleRule('background-color', '#e5e7eb');
  });

  test('has not-allowed cursor when disabled', () => {
    const { container } = render(<Card title="Disabled" disabled={true} />);
    expect(container.firstChild).toHaveStyleRule('cursor', 'not-allowed');
  });
});
