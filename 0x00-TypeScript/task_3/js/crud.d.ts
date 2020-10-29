/* comment */
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;
export function updateRow(rowId: RowID, row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
