import { CellBlock } from "../app/models/cell-block.model";
import { Cell } from "../app/models/cell.model";

export interface SheetState {
    currentCell: Cell;
    cellBlock: CellBlock;
    baseRow: number;
    baseCol: number;
    isSelecting: boolean;
    isSelectAll: boolean;
    rows: Array<Array<Cell>>;
}