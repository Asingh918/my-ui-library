import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Dropdown from './Dropdown';

const options = [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }];

describe('Dropdown Component', () => {
  test('renders and is visible', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByRole('combobox')).toBeVisible();
  });

  test('has grey background-color when disabled', () => {
    render(<Dropdown options={options} disabled={true} />);
    expect(screen.getByRole('combobox')).toHaveStyleRule('background-color', '#e5e7eb');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Dropdown options={options} disabled={true} />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
