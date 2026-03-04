import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

const renderTable = (disabled = false) => render(
  <Table disabled={disabled}>
    <TableHeader disabled={disabled}>
      <TableRow disabled={disabled}>
        <TableCell isHeader disabled={disabled}>Name</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow disabled={disabled}>
        <TableCell disabled={disabled}>Alice</TableCell>
      </TableRow>
    </tbody>
    <TableFooter disabled={disabled}>
      <TableRow disabled={disabled}>
        <TableCell disabled={disabled}>Total</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

describe('Table Component', () => {
  test('renders and cells are visible', () => {
    renderTable(false);
    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Alice')).toBeVisible();
  });

  test('table has grey background-color when disabled', () => {
    const { container } = renderTable(true);
    expect(container.querySelector('table')).toHaveStyleRule('background-color', '#e5e7eb');
  });

  test('table header has grey background-color when disabled', () => {
    const { container } = renderTable(true);
    expect(container.querySelector('thead')).toHaveStyleRule('background-color', '#d1d5db');
  });
});
