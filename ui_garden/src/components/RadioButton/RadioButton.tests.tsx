import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('renders and is visible', () => {
    render(<RadioButton label="Test Option" name="test" value="test" />);
    expect(screen.getByRole('radio')).toBeVisible();
    expect(screen.getByText('Test Option')).toBeVisible();
  });

  test('wrapper has grey background-color when disabled', () => {
    const { container } = render(<RadioButton label="Disabled" name="test" value="test" disabled={true} />);
    expect(container.querySelector('label')).toHaveStyleRule('background-color', '#e5e7eb');
  });

  test('input is disabled when disabled prop is true', () => {
    render(<RadioButton label="Disabled" name="test" value="test" disabled={true} />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });
});
