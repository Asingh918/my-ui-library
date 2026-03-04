import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Label from './Label';

describe('Label Component', () => {
  test('renders and is visible', () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText('Test Label')).toBeVisible();
  });

  test('has grey background-color when disabled', () => {
    render(<Label text="Disabled" disabled={true} />);
    expect(screen.getByText('Disabled')).toHaveStyleRule('background-color', '#d1d5db');
  });

  test('has not-allowed cursor when disabled', () => {
    render(<Label text="Disabled" disabled={true} />);
    expect(screen.getByText('Disabled')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
