import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Img from './Img';

describe('Img Component', () => {
  test('renders and is visible', () => {
    render(<Img src="https://placehold.co/400x250" alt="Test image" />);
    expect(screen.getByRole('img')).toBeVisible();
  });

  test('has reduced opacity when disabled', () => {
    render(<Img src="https://placehold.co/400x250" alt="Disabled" disabled={true} />);
    expect(screen.getByRole('img')).toHaveStyleRule('opacity', '0.4');
  });

  test('has grayscale filter when disabled', () => {
    render(<Img src="https://placehold.co/400x250" alt="Disabled" disabled={true} />);
    expect(screen.getByRole('img')).toHaveStyleRule('filter', 'grayscale(100%)');
  });
});
