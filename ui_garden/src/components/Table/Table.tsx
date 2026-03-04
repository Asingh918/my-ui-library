import React from 'react';
import styled from 'styled-components';
import { TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableFooterProps } from './Table.types';

/* ── Table ── */
const StyledTable = styled.table<TableProps>`
  width: 100%; border-collapse: collapse;
  font-family: 'DM Mono', monospace; font-size: 0.82rem;
  border: 1px solid ${({ disabled }) => disabled ? '#1e1e1e' : '#2a2a2a'};
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#e5e7eb' : backgroundColor || '#141414'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || '#f0ebe0')};
  opacity: ${({ disabled }) => (disabled ? 0.45 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: background-color 0.2s;
  @media (max-width: 600px) { font-size: 0.75rem; display: block; overflow-x: auto; }
`;
export const Table: React.FC<TableProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledTable backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTable>
);

/* ── TableHeader ── */
const StyledThead = styled.thead<TableHeaderProps>`
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#d1d5db' : backgroundColor || '#ff6b35'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || '#0a0a0a')};
  transition: background-color 0.2s;
`;
export const TableHeader: React.FC<TableHeaderProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledThead backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledThead>
);

/* ── TableRow ── */
const StyledTr = styled.tr<TableRowProps>`
  background-color: ${({ backgroundColor, disabled }) => disabled ? 'transparent' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || 'inherit')};
  border-left: 3px solid transparent;
  transition: border-color 0.15s, background-color 0.15s;
  &:nth-child(even) { background-color: ${({ disabled }) => disabled ? 'transparent' : '#0f0f0f'}; }
  &:hover { border-left-color: ${({ disabled }) => disabled ? 'transparent' : '#ff6b35'}; background-color: ${({ disabled }) => disabled ? 'transparent' : '#1c1c1c'}; }
`;
export const TableRow: React.FC<TableRowProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledTr backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTr>
);

/* ── TableCell ── */
const StyledTd = styled.td<TableCellProps>`
  padding: 0.7rem 1rem; border-bottom: 1px solid #1e1e1e; text-align: left;
  background-color: ${({ backgroundColor, disabled }) => disabled ? 'transparent' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || 'inherit')};
  letter-spacing: 0.03em;
`;
const StyledTh = styled.th<TableCellProps>`
  padding: 0.7rem 1rem; font-weight: 500; text-align: left;
  letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.72rem;
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#1a1a1a' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || 'inherit')};
`;
export const TableCell: React.FC<TableCellProps> = ({ children, backgroundColor, color, disabled = false, isHeader = false }) =>
  isHeader
    ? <StyledTh backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTh>
    : <StyledTd backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTd>;

/* ── TableFooter ── */
const StyledTfoot = styled.tfoot<TableFooterProps>`
  background-color: ${({ backgroundColor, disabled }) => disabled ? '#111' : backgroundColor || '#0d0d0d'};
  color: ${({ color, disabled }) => (disabled ? '#333' : color || '#ff6b35')};
  font-weight: 500; border-top: 2px solid ${({ disabled }) => disabled ? '#1e1e1e' : '#ff6b35'};
  letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.75rem;
  transition: background-color 0.2s;
`;
export const TableFooter: React.FC<TableFooterProps> = ({ children, backgroundColor, color, disabled = false }) => (
  <StyledTfoot backgroundColor={backgroundColor} color={color} disabled={disabled}>{children}</StyledTfoot>
);

export default Table;
