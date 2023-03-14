import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { updateCurrentUser } from '@firebase/auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CellBlock } from 'src/app/models/cell-block.model';
import { Cell } from 'src/app/models/cell.model';
import { SheetState } from 'src/states/sheet.state';
import * as SheetActions from '../../../../../actions/sheet.action'

@Component({
  selector: 'app-sheet-table',
  templateUrl: './sheet-table.component.html',
  styleUrls: ['./sheet-table.component.scss']
})
export class SheetTableComponent implements OnInit {
  @Output() newCurrentCellEvent = new EventEmitter<Cell>()
  rows: Array<Array<Cell>> = [];
  currentCell: Cell = <Cell>{};
  cellBlock: CellBlock = <CellBlock>{};
  isSelecting: boolean = false;
  isSelectAll: boolean = false;
  baseRow: number = 0;
  baseCol: number = 0;
  sheet$: Observable<SheetState>;
  constructor(
    private store: Store<{ sheet: SheetState }>,
    private renderer: Renderer2,
    private el: ElementRef) {
    this.sheet$ = this.store.select('sheet');
  }

  ngOnInit(): void {

    this.sheet$.subscribe((sheet) => {
      if (sheet.rows != this.rows) {
        this.rows = sheet.rows;
        // console.log('rows is change', this.rows);
      }

      if (sheet.baseCol != this.baseCol) {
        this.baseCol = sheet.baseCol;
        // console.log('baseCol is change', this.baseCol);
        if (this.baseCol > 0 && this.baseRow > 0) {
          this.drawTable();
        }
      }

      if (sheet.baseRow != this.baseRow) {
        this.baseRow = sheet.baseRow;
        // console.log('baseRow is change', this.baseRow);
        if (this.baseRow > 0 && this.baseCol > 0) {
          this.drawTable();
        }
      }

      if (sheet.isSelectAll != this.isSelectAll) {
        this.isSelectAll = sheet.isSelectAll;
        // console.log('isSelectAll is change', this.isSelectAll);
      }

      if (sheet.isSelecting != this.isSelecting) {
        this.isSelecting = sheet.isSelecting;
        // console.log('isSelecting is change', this.isSelecting);
      }

      if (sheet.cellBlock != this.cellBlock) {
        this.cellBlock = sheet.cellBlock;
        // console.log('cellBlock is change', this.cellBlock);
      }

      if (sheet.currentCell != this.currentCell) {
        this.currentCell = sheet.currentCell;
        // console.log('currentCell is change', this.currentCell);
        this.newCurrentCellEvent.emit(this.currentCell);
      }
    });
  }

  addNewRow() {
    console.log('add new row');
    this.store.dispatch(SheetActions.setBaseRow({ baseRow: this.baseRow + 1 }));
    if (this.isSelectAll) {
      this.selectAllBlock();
    }
  }

  addNewColumn() {
    console.log('add new column');
    this.store.dispatch(SheetActions.setBaseCol({ baseCol: this.baseCol + 1 }));
    if (this.isSelectAll) {
      this.selectAllBlock();
    }
  }

  drawTable() {
    let newRows = [];
    for (let i = 0; i < this.baseRow; i++) {
      let row: Cell[] = [];
      for (let j = 0; j < this.baseCol; j++) {
        if (j == 0 && i == 0) {
          let rootCell = { value: '', row: i, col: j, computedValue: '' };
          row.push(rootCell);
        }
        else if (i == 0 && j != 0) {
          let rowHeaderCell = { value: '', row: i, col: j, computedValue: this.getColName(j - 1) };
          row.push(rowHeaderCell);
        }
        else if (i != 0 && j == 0) {
          let colHeaderCell = { value: '', row: i, col: j, computedValue: i.toString() };
          row.push(colHeaderCell);
        }
        else {
          if (this.rows[i] && this.rows[i][j]) {
            row.push(this.rows[i][j]);
            continue;
          }
          let cell = {
            value: '',
            row: i,
            col: j,
            computedValue: ''
          };
          row.push(cell);
        }
      }
      newRows.push(row);
    }
    this.store.dispatch(SheetActions.setRows({ rows: newRows }));
  }

  getColName(colIndex: number): string {
    let colName = '';
    while (colIndex >= 0) {
      colName = String.fromCharCode(65 + (colIndex % 26)) + colName;
      colIndex = Math.floor(colIndex / 26) - 1;
    }
    return colName;
  }

  getCellStyle(cell: Cell, currentCell: Cell): string[] {
    let classes = [];
    if (cell.row === 0 && cell.col === 0) {
      classes.push('corner-header');
    }

    if (cell.row === 0 && cell.col !== 0) {
      classes.push('col-header');
    }

    if (cell.col === 0 && cell.row !== 0) {
      classes.push('row-header');
    }

    if ((cell.col >= this.cellBlock.start.col && cell.col <= this.cellBlock.end.col && cell.row == 0)
      || (cell.row >= this.cellBlock.start.row && cell.row <= this.cellBlock.end.row && cell.col == 0)
      || (cell.row <= this.cellBlock.start.row && cell.row >= this.cellBlock.end.row && cell.col == 0)
      || (cell.col <= this.cellBlock.start.col && cell.col >= this.cellBlock.end.col && cell.row == 0)
    ) {
      if (classes.includes('corner-header')) {
        if (this.isSelectAll) {
          classes.push('select-corner-header');
        }
      }

      else {
        classes.push('selected-header');
      }
    }
    if (cell.row == currentCell.row && cell.col == currentCell.col) {
      classes.push('selected-cell');
    }
    if (cell.row >= this.cellBlock.start.row &&
      cell.row <= this.cellBlock.end.row &&
      cell.col >= this.cellBlock.start.col &&
      cell.col <= this.cellBlock.end.col &&
      cell.row !== 0 && cell.col !== 0) {
      if (!classes.includes('selected-cell')) {
        classes.push('selected-block');
      }
    }
    if (cell.row <= this.cellBlock.start.row &&
      cell.row >= this.cellBlock.end.row &&
      cell.col <= this.cellBlock.start.col &&
      cell.col >= this.cellBlock.end.col &&
      cell.row !== 0 && cell.col !== 0) {
      if (!classes.includes('selected-cell')) {
        classes.push('selected-block');
      }
    }
    if (cell.row <= this.cellBlock.end.row &&
      cell.row >= this.cellBlock.start.row &&
      cell.col >= this.cellBlock.end.col &&
      cell.col <= this.cellBlock.start.col &&
      cell.row !== 0 && cell.col !== 0) {
      if (!classes.includes('selected-cell')) {
        classes.push('selected-block');
      }
    }
    if (cell.row >= this.cellBlock.end.row &&
      cell.row <= this.cellBlock.start.row &&
      cell.col <= this.cellBlock.end.col &&
      cell.col >= this.cellBlock.start.col &&
      cell.row !== 0 && cell.col !== 0) {
      if (!classes.includes('selected-cell')) {
        classes.push('selected-block');
      }
    }
    return classes;
  }

  selectCell(cell: Cell) {
    console.log('selectCell');
    this.store.dispatch(SheetActions.setCurrentCell({ currentCell: cell }));
    this.store.dispatch(SheetActions.setIsSelectAll({ isSelectAll: false }));
  }


  cellMouseDown(cell: Cell) {
    let newCellBlock: CellBlock = { start: { row: cell.row, col: cell.col }, end: { row: cell.row, col: cell.col } };
    if (newCellBlock.end.col != this.cellBlock.end.col || newCellBlock.end.row != this.cellBlock.end.row
      || newCellBlock.start.col != this.cellBlock.start.col || newCellBlock.start.row != this.cellBlock.start.row) {
      console.log('cellMouseDown');
      this.store.dispatch(SheetActions.setIsSelectAll({ isSelectAll: false }));
      this.store.dispatch(SheetActions.setCellBlock({ cellBlock: newCellBlock }));
      this.store.dispatch(SheetActions.setCurrentCell({ currentCell: cell }));
      this.store.dispatch(SheetActions.setIsSelecting({ isSelecting: true }));
    }
  }

  cellMouseMove(cell: Cell) {
    if (!this.isSelecting) {
      return;
    }
    let newCellBlock: CellBlock = { start: { row: this.cellBlock.start.row, col: this.cellBlock.start.col }, end: { row: cell.row, col: cell.col } };
    if (newCellBlock.end.row != this.cellBlock.end.row || newCellBlock.end.col != this.cellBlock.end.col) {
      console.log('cellMouseMove');
      this.store.dispatch(SheetActions.setIsSelectAll({ isSelectAll: false }));
      this.store.dispatch(SheetActions.setCellBlock({ cellBlock: newCellBlock }));
    }
  }

  cellMouseUp(cell: Cell) {
    console.log('cellMouseUp');
    this.cellMouseMove(cell);
    this.store.dispatch(SheetActions.setIsSelecting({ isSelecting: false }));
  }

  selectRowHeader(row: number) {
    console.log('selectRowHeader');
    this.store.dispatch(SheetActions.setIsSelectAll({ isSelectAll: false }));
    let newCellBlock: CellBlock = { start: { row: row, col: 0 }, end: { row: row, col: this.baseCol - 1 } };
    this.store.dispatch(SheetActions.setCellBlock({ cellBlock: newCellBlock }));
    let newCurrentCell: Cell = { ...this.currentCell, row: row, col: 1 };
    this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
    this.el.nativeElement.querySelector(`#cell-${this.currentCell.row}-${this.currentCell.col}`).focus();
  }

  selectColHeader(col: number) {
    console.log('selectColHeader');
    this.store.dispatch(SheetActions.setIsSelectAll({ isSelectAll: false }));
    let newCellBlock: CellBlock = { start: { row: 0, col: col }, end: { row: this.baseRow - 1, col: col } };
    this.store.dispatch(SheetActions.setCellBlock({ cellBlock: newCellBlock }));
    let newCurrentCell: Cell = { ...this.currentCell, row: 1, col: col };
    this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
    this.el.nativeElement.querySelector(`#cell-${this.currentCell.row}-${this.currentCell.col}`).focus();
  }

  selectAllBlock() {
    console.log('selectAllBlock');
    this.store.dispatch(SheetActions.setIsSelectAll({ isSelectAll: true }));
    let newCurrentCell: Cell = { ...this.currentCell, row: 1, col: 1 };
    this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
    let newCellBlock: CellBlock = { start: { row: 0, col: 0 }, end: { row: this.baseRow - 1, col: this.baseCol - 1 } };
    this.store.dispatch(SheetActions.setCellBlock({ cellBlock: newCellBlock }));
    this.el.nativeElement.querySelector(`#cell-${this.currentCell.row}-${this.currentCell.col}`).focus();
  }
  changeCellByTab(cell: Cell, event: any) {
    if (cell.row >= this.cellBlock.start.row &&
      cell.row <= this.cellBlock.end.row &&
      cell.col >= this.cellBlock.start.col &&
      cell.col <= this.cellBlock.end.col) {
      //check if cell is last cell in sheet table
      if (cell.row == this.baseRow - 1 && cell.col == this.baseCol - 1) {
        event.preventDefault();
        let newCurrentCell = this.rows[1][1];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        this.store.dispatch(SheetActions.setCellBlock({ cellBlock: { start: newCurrentCell, end: newCurrentCell } }));
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      //check if cell is last cell in row
      else if (cell.col == this.baseCol - 1) {
        event.preventDefault();
        let newCurrentCell = this.rows[cell.row + 1][1];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        this.store.dispatch(SheetActions.setCellBlock({ cellBlock: { start: newCurrentCell, end: newCurrentCell } }));
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      else {
        let newCurrentCell: Cell = this.rows[cell.row][cell.col + 1];
        event.preventDefault();
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        this.store.dispatch(SheetActions.setCellBlock({ cellBlock: { start: newCurrentCell, end: newCurrentCell } }));
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
    }
  }

  changeCellByTabInCellBlock(cell: Cell, event: any) {
    //check if cell is in top-left cellblock
    if (cell.row >= this.cellBlock.start.row &&
      cell.row <= this.cellBlock.end.row &&
      cell.col >= this.cellBlock.start.col &&
      cell.col <= this.cellBlock.end.col) {
      // console.log('changeCell by Tab in  top-left cellblock', cell);
      //check if cell is last cell in cellblock 
      if (cell.row == this.cellBlock.end.row && cell.col == this.cellBlock.end.col) {
        let newCurrentCell: Cell = this.rows[this.cellBlock.start.row][this.cellBlock.start.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      //check if cell is last cell in row
      else if (cell.col == this.cellBlock.end.col) {
        let newCurrentCell: Cell = this.rows[cell.row + 1][this.cellBlock.start.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();

      } else {
        let newCurrentCell: Cell = this.rows[cell.row][cell.col + 1];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
    }
    //check if cell is in bot-right cellblock
    else if (cell.row <= this.cellBlock.start.row &&
      cell.row >= this.cellBlock.end.row &&
      cell.col <= this.cellBlock.start.col &&
      cell.col >= this.cellBlock.end.col) {
      //check if cell is last cell in cellblock 
      if (cell.row == this.cellBlock.start.row && cell.col == this.cellBlock.start.col) {
        let newCurrentCell: Cell = this.rows[this.cellBlock.end.row][this.cellBlock.end.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      //check if cell is last cell in row
      else if (cell.col == this.cellBlock.start.col) {
        let newCurrentCell: Cell = this.rows[cell.row + 1][this.cellBlock.end.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      } else {
        let newCurrentCell: Cell = this.rows[cell.row][cell.col + 1];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
    }
    //check if cell is in bottom-left cellblock
    else if (cell.row <= this.cellBlock.start.row &&
      cell.row >= this.cellBlock.end.row &&
      cell.col >= this.cellBlock.start.col &&
      cell.col <= this.cellBlock.end.col) {
      //check if cell is last cell in cellblock 
      if (cell.row == this.cellBlock.start.row && cell.col == this.cellBlock.end.col) {
        let newCurrentCell: Cell = this.rows[this.cellBlock.end.row][this.cellBlock.start.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      //check if cell is last cell in row
      else if (cell.col == this.cellBlock.end.col) {
        let newCurrentCell: Cell = this.rows[cell.row + 1][this.cellBlock.start.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      else {
        let newCurrentCell: Cell = this.rows[cell.row][cell.col + 1];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
    }
    //check if cell is in top-right cellblock
    else if (cell.row >= this.cellBlock.start.row &&
      cell.row <= this.cellBlock.end.row &&
      cell.col <= this.cellBlock.start.col &&
      cell.col >= this.cellBlock.end.col) {
      //check if cell is last cell in cellblock 
      if (cell.row == this.cellBlock.end.row && cell.col == this.cellBlock.start.col) {
        let newCurrentCell: Cell = this.rows[this.cellBlock.start.row][this.cellBlock.end.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      //check if cell is last cell in row
      else if (cell.col == this.cellBlock.start.col) {
        let newCurrentCell: Cell = this.rows[cell.row + 1][this.cellBlock.end.col];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
      else {
        let newCurrentCell: Cell = this.rows[cell.row][cell.col + 1];
        this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newCurrentCell }));
        event.preventDefault();
        this.el.nativeElement.querySelector(`#cell-${newCurrentCell.row}-${newCurrentCell.col}`).focus();
      }
    }
  }


  enterCellKey(cell: Cell, event: any) {
    console.log(event.code);
    if (event.code == "Enter") {
      console.log('changeCell by Enter');
      let newRow = this.rows[cell.row].map((c, index) => {
        if (index == cell.col && c.row == cell.row) {
          return {
            ...cell,
            value: event.target.value,
            computedValue: event.target.value
          };
        }
        return c;
      })
      let newRows = this.rows.map((r, index) => {
        if (index == cell.row) {
          return newRow;
        }
        return r;
      })
      console.log(event)
      event.preventDefault();
      this.store.dispatch(SheetActions.setCurrentCell({ currentCell: newRows[cell.row][cell.col] }));
    }

    if (event.code == "Tab") {
      if (this.cellBlock.start.row == -1 && this.cellBlock.start.col == -1 && this.cellBlock.end.row == -1 && this.cellBlock.end.col == -1) {
        return;
      }
      else if (this.cellBlock.start.row == this.cellBlock.end.row && this.cellBlock.start.col == this.cellBlock.end.col) {
        this.changeCellByTab(cell, event);
      }
      else {
        this.changeCellByTabInCellBlock(cell, event);
      }
    }

    if (event.code == "Backspace") {
      if (this.cellBlock.start.row == -1 && this.cellBlock.start.col == -1 && this.cellBlock.end.row == -1 && this.cellBlock.end.col == -1) {
        return;
      } else {
        if (this.cellBlock.start.row == this.cellBlock.end.row && this.cellBlock.start.col == this.cellBlock.end.col) {
          return
        } else {
          event.preventDefault();
          console.log('changeCell by Delete');
          let newRows = this.rows;
          newRows = newRows.map((r, index) => {
            if (index >= this.cellBlock.start.row && index <= this.cellBlock.end.row) {
              return r.map((c, index) => {
                if (index >= this.cellBlock.start.col && index <= this.cellBlock.end.col) {
                  return {
                    ...c,
                    value: '',
                    computedValue: ''
                  }
                }
                return c;
              })
            }
            else if (index >= this.cellBlock.end.row && index <= this.cellBlock.start.row) {
              return r.map((c, index) => {
                if (index >= this.cellBlock.start.col && index <= this.cellBlock.end.col) {
                  return {
                    ...c,
                    value: '',
                    computedValue: ''
                  }
                }
                return c;
              })
            }
            // else if(index >= this.cellBlock.start.row && index <= this.cellBlock.end.row){
            //   return r.map((c, index) => {
            //     if (index <= this.cellBlock.start.col && index >= this.cellBlock.end.col) {
            //       return {
            //         ...c,
            //         value: '',
            //         computedValue: ''
            //       }
            //     }
            //     return c;
            //   })
            // }
            // else if(index <= this.cellBlock.start.row && index >= this.cellBlock.end.row){
            //   return r.map((c, index) => {
            //     if (index <= this.cellBlock.start.col && index >= this.cellBlock.end.col) {
            //       return {
            //         ...c,
            //         value: '',
            //         computedValue: ''
            //       }
            //     }
            //     return c;
            //   })
            // }

            return r;
          })
          console.log(newRows);
          this.store.dispatch(SheetActions.setRows({ rows: newRows }));
        }
      }
    }
  }
  onBlur(cell: Cell, event: any) {
    if (event.target.value == cell.value) {
      console.log('blur', event);
      return;
    }
    else {
      console.log('update rows');
      let newRow = this.rows[cell.row].map((c, index) => {
        if (index == cell.col && c.row == cell.row) {
          return {
            ...cell,
            value: event.target.value,
            computedValue: event.target.value
          };
        }
        return c;
      })
      let newRows = this.rows.map((r, index) => {
        if (index == cell.row) {
          return newRow;
        }
        return r;
      })
      this.store.dispatch(SheetActions.setRows({ rows: newRows }));
    }
  }
}