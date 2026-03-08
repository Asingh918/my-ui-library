import React from 'react';
import styled from 'styled-components';
import { TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableFooterProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.85rem;
  border: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed55'};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#0d0d14' : backgroundColor || '#13131f'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#e2e8f0'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'default'};
  box-shadow: ${({ disabled }) => disabled ? 'none' : '0 0 20px #7c3aed22'};
  transition: background-color 0.15s;
  @media (max-width: 600px) { font-size: 0.78rem; display: block; overflow-x: auto; }
`;
export const Table: React.FC<TableProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledTable backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTable>
);

const StyledThead = styled.thead<TableHeaderProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1e293b' : backgroundColor || '#1a0a3a'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#a78bfa'};
  border-bottom: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed'};
`;
export const TableHeader: React.FC<TableHeaderProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledThead backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledThead>
);

const StyledTr = styled.tr<TableRowProps>`
  border-bottom: 1px solid #1e1e30;
  transition: background-color 0.1s;
  &:nth-child(even) { background-color: ${({ disabled }) => disabled ? 'transparent' : '#0d0d1a'}; }
  &:hover { background-color: ${({ disabled }) => disabled ? 'transparent' : '#1a0a3a55'}; }
`;
export const TableRow: React.FC<TableRowProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledTr backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTr>
);

const StyledTd = styled.td<TableCellProps>`
  padding: 0.7rem 1rem;
  text-align: left;
  color: ${({ color, disabled }) => disabled ? '#475569' : color || 'inherit'};
`;
const StyledTh = styled.th<TableCellProps>`
  padding: 0.7rem 1rem;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  text-transform: uppercase;
  color: ${({ color, disabled }) => disabled ? '#475569' : color || 'inherit'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#1e293b' : backgroundColor || 'transparent'};
`;
export const TableCell: React.FC<TableCellProps> = ({ children, backgroundColor, color, disabled = false, isHeader = false }) =>
  isHeader
    ? <StyledTh backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTh>
    : <StyledTd backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTd>;

const StyledTfoot = styled.tfoot<TableFooterProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#0d0d14' : backgroundColor || '#13131f'};
  color: ${({ color, disabled }) => disabled ? '#475569' : color || '#7c3aed'};
  font-weight: 700;
  font-size: 0.8rem;
  border-top: 1px solid ${({ disabled }) => disabled ? '#1e293b' : '#7c3aed'};
`;
export const TableFooter: React.FC<TableFooterProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledTfoot backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTfoot>
);

export default Table;
