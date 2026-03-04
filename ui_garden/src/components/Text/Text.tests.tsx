import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Text from './Text';

describe('Text Component', () => {
  test('renders and is visible', () => {
    render(<Text content="Hello World" />);
    expect(screen.getByText('Hello World')).toBeVisible();
  });

  test('has grey background-color when disabled', () => {
    render(<Text content="Disabled" disabled={true} />);
    expect(screen.getByText('Disabled')).toHaveStyleRule('background-color', '#f3f4f6');
  });

  test('has not-allowed cursor when disabled', () => {
    render(<Text content="Disabled" disabled={true} />);
    expect(screen.getByText('Disabled')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
