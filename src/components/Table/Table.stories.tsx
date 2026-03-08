import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:    { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Table>;

const SampleTable = (disabled: boolean) => (
  <Table disabled={disabled}>
    <TableHeader disabled={disabled}>
      <TableRow disabled={disabled}>
        <TableCell isHeader disabled={disabled}>Name</TableCell>
        <TableCell isHeader disabled={disabled}>Role</TableCell>
        <TableCell isHeader disabled={disabled}>Department</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow disabled={disabled}>
        <TableCell disabled={disabled}>Alice Johnson</TableCell>
        <TableCell disabled={disabled}>Developer</TableCell>
        <TableCell disabled={disabled}>Engineering</TableCell>
      </TableRow>
      <TableRow disabled={disabled}>
        <TableCell disabled={disabled}>Bob Smith</TableCell>
        <TableCell disabled={disabled}>Designer</TableCell>
        <TableCell disabled={disabled}>Product</TableCell>
      </TableRow>
    </tbody>
    <TableFooter disabled={disabled}>
      <TableRow disabled={disabled}>
        <TableCell isHeader disabled={disabled}>Total</TableCell>
        <TableCell disabled={disabled}>2 employees</TableCell>
        <TableCell disabled={disabled}>2 departments</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default: Story  = { render: (args) => SampleTable(args.disabled || false), args: { disabled: false } };
export const Disabled: Story = { render: () => SampleTable(true), args: { disabled: true } };
