import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cell } from 'src/app/models/cell.model';
import { FxService } from 'src/app/services/fx.service';
import { SheetState } from 'src/app/states/sheet.state';
import { SheetFileState } from 'src/app/states/sheetFile.state';
import * as SheetActions from 'src/app/actions/sheet.action';
import * as SheetFileActions from 'src/app/actions/sheetFile.action';
import { SheetFile } from 'src/app/models/sheetFile.model';

@Component({
  selector: 'lib-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  @Output() memoryZoneChange = new EventEmitter<any>();
  @Input('idToken') set _idToken(idToken: string) {
    if (idToken) {
      // console.log('idToken', idToken);
      this.idToken = idToken;
    }
  }
  idToken: string = '';
  currentCell$ = this.store.select('sheet', 'currentCell');
  sheetState$ = this.store.select('sheet');
  col: string = '';
  row: string = '';
  rows: Array<Array<Cell>> = [];
  edittingFile$ = this.store.select('sheetFile', 'edittingFile');
  edittingFile: SheetFile = <SheetFile>{};
  currentCell: Cell = <Cell>{};

  constructor(
    private store: Store<{ sheet: SheetState; sheetFile: SheetFileState }>,
    private fxService: FxService
  ) {}
  ngOnInit(): void {
    this.currentCell$.subscribe((currentCell) => {
      if (
        currentCell.col != this.currentCell.col ||
        currentCell.row != this.currentCell.row
      ) {
        // console.log('currentCell', currentCell);
        this.col = this.getColName(currentCell.col - 1);
        this.row = currentCell.row.toString();
        this.currentCell = currentCell;
      }
    });
    this.sheetState$.subscribe((sheetState) => {
      if (sheetState.rows != this.rows) {
        this.rows = sheetState.rows;
      }
    });
    this.edittingFile$.subscribe((file) => {
      if (file) {
        this.edittingFile = file;
      }
    });
  }

  getColName(colIndex: number): string {
    let colName = '';
    while (colIndex >= 0) {
      colName = String.fromCharCode(65 + (colIndex % 26)) + colName;
      colIndex = Math.floor(colIndex / 26) - 1;
    }
    return colName;
  }

  enterCellKey(event: any) {
    // console.log(event.code);
    if (event.code == 'Enter') {
      if (event.target.value[0] == '=') {
        // console.log(event.target.value);
        // let val = event.target.value;
        // val = val.slice(1);
        // // console.log(val);
        // if (Number.isNaN(Number(val))) {
        //   val = '=' + '"' + val + '"';
        // } else {
        //   val = Number(val);
        // }
        // console.log(val);
        event.preventDefault();
        this.calculate(this.col, this.row, event.target.value);
        console.log(this.fxService.memoryZone);
        let stringMemo = this.fxService.getMemory();
        console.log(stringMemo);
        // this.fxService.loadMemory(stringMemo);
        this.memoryZoneChange.emit({
          change: 'file has been changed',
        });
        let newRow = this.rows[Number(this.row)].map((c, index) => {
          if (index == this.currentCell.col && c.row == this.currentCell.row) {
            return {
              ...this.currentCell,
              value: event.target.value,
              computedValue: this.fxService.getValue(
                this.currentCell.row.toString(),
                this.getColName(this.currentCell.col - 1)
              ),
            };
          }
          return c;
        });
        let newRows = this.rows.map((r, index) => {
          if (index == this.currentCell.row) {
            return newRow;
          }
          return r;
        });
        // console.log(event);
        this.store.dispatch(
          SheetActions.setCurrentCell({
            currentCell: newRows[this.currentCell.row][this.currentCell.col],
          })
        );
        this.store.dispatch(SheetActions.setRows({ rows: newRows }));
        let temp: SheetFile = {
          ...this.edittingFile,
          content: newRows,
          memoryZone: stringMemo,
        };
        this.store.dispatch(
          SheetFileActions.updateSheetFile({
            sheetFile: temp,
            idToken: this.idToken,
          })
        );
      } else {
        // console.log('changeCell by Enter without =');
        let val = event.target.value;
        // console.log(val);
        if (Number.isNaN(Number(val))) {
          val = '"' + event.target.value + '"';
        } else {
          val = Number(val);
        }
        event.preventDefault();
        this.calculate(
          this.getColName(this.currentCell.col - 1),
          this.currentCell.row.toString(),
          '=' + val
        );
        console.log(this.fxService.memoryZone);
        let stringMemo = this.fxService.getMemory();
        console.log(stringMemo);
        let newRow = this.rows[this.currentCell.row].map((c, index) => {
          if (index == this.currentCell.col && c.row == this.currentCell.row) {
            return {
              ...this.currentCell,
              value: '=' + val,
              computedValue: event.target.value,
            };
          }
          return c;
        });
        let newRows = this.rows.map((r, index) => {
          if (index == this.currentCell.row) {
            return newRow;
          }
          return r;
        });
        // console.log(event);
        this.store.dispatch(
          SheetActions.setCurrentCell({
            currentCell: newRows[this.currentCell.row][this.currentCell.col],
          })
        );
        this.store.dispatch(SheetActions.setRows({ rows: newRows }));
        let temp = {
          ...this.edittingFile,
          content: newRows,
          memoryZone: stringMemo,
        };
        this.store.dispatch(
          SheetFileActions.updateSheetFile({
            sheetFile: temp,
            idToken: this.idToken,
          })
        );
      }
    }
  }
  calculate(col: string, row: string, value: string) {
    try {
      this.fxService.setFormula(row, col, value);
      this.fxService.execute();
    } catch (e) {
      console.log(e);
    }
  }
}
