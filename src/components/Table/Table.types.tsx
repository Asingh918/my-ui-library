import { ReactNode } from 'react';

export interface TableProps       { backgroundColor?: string; color?: string; disabled?: boolean; children?: ReactNode; }
export interface TableHeaderProps { backgroundColor?: string; color?: string; disabled?: boolean; children?: ReactNode; }
export interface TableRowProps    { backgroundColor?: string; color?: string; disabled?: boolean; children?: ReactNode; }
export interface TableCellProps   { backgroundColor?: string; color?: string; disabled?: boolean; children?: ReactNode; isHeader?: boolean; }
export interface TableFooterProps { backgroundColor?: string; color?: string; disabled?: boolean; children?: ReactNode; }
