import { CellBlock } from '../models/cell-block.model';
import { Cell } from '../models/cell.model';

export interface SheetState {
  currentCell: Cell;
  cellBlock: CellBlock;
  baseRow: number;
  baseCol: number;
  isSelecting: boolean;
  isSelectAll: boolean;
  rows: Array<Array<Cell>>;
}
