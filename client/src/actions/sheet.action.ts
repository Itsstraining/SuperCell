import { createAction, props } from "@ngrx/store";
import { CellBlock } from "../app/models/cell-block.model";
import { Cell } from "../app/models/cell.model";

export const setCurrentCell = createAction('[Sheet] Set Current Cell', props<{ currentCell: Cell }>());
export const setCellBlock = createAction('[Sheet] Set Cell Block', props<{ cellBlock: CellBlock }>());
export const setBaseRow = createAction('[Sheet] Set Base Row', props<{ baseRow: number }>());
export const setBaseCol = createAction('[Sheet] Set Base Col', props<{ baseCol: number }>());
export const setIsSelecting = createAction('[Sheet] Set Is Selecting', props<{ isSelecting: boolean }>());
export const setIsSelectAll = createAction('[Sheet] Set Is Select All', props<{ isSelectAll: boolean }>());
export const setRows = createAction('[Sheet] Set Rows', props<{ rows: Array<Array<Cell>> }>());