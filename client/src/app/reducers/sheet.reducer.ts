import { createReducer, on } from '@ngrx/store';
import { SheetState } from '../states/sheet.state';
import * as SheetActions from '../actions/sheet.action';

export const initialState: SheetState = {
  rows: [],
  currentCell: {
    value: '',
    row: -1,
    col: -1,
    computedValue: '',
  },
  cellBlock: {
    start: {
      row: -1,
      col: -1,
    },
    end: {
      row: -1,
      col: -1,
    },
  },
  baseRow: 27,
  baseCol: 27,
  isSelecting: false,
  isSelectAll: false,
};

export const sheetFeatureKey = 'sheet';

export const sheetReducer = createReducer(
  initialState,
  on(SheetActions.setBaseCol, (state, action) => {
    console.log('set base col', action.baseCol);
    let newState = {
      ...state,
      baseCol: action.baseCol,
    };
    return newState;
  }),
  on(SheetActions.setBaseRow, (state, action) => {
    console.log('set base row', action.baseRow);
    let newState = {
      ...state,
      baseRow: action.baseRow,
    };
    return newState;
  }),
  on(SheetActions.setCurrentCell, (state, action) => {
    // console.log('set current cell', action.currentCell);
    let newState = {
      ...state,
      currentCell: action.currentCell,
    };
    return newState;
  }),
  on(SheetActions.setCellBlock, (state, action) => {
    // console.log('set cell block', action.cellBlock);
    let newState = {
      ...state,
      cellBlock: action.cellBlock,
    };
    return newState;
  }),
  on(SheetActions.setIsSelectAll, (state, action) => {
    // console.log('set is select all', action.isSelectAll);
    let newState = {
      ...state,
      isSelectAll: action.isSelectAll,
    };
    return newState;
  }),
  on(SheetActions.setIsSelecting, (state, action) => {
    // console.log('set is selecting', action.isSelecting);
    let newState = {
      ...state,
      isSelecting: action.isSelecting,
    };
    return newState;
  }),
  on(SheetActions.setRows, (state, action) => {
    // console.log('set cell values', action.rows);
    let newState = {
      ...state,
      rows: action.rows,
    };
    return newState;
  })
);
