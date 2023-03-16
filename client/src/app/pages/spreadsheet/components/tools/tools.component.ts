import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cell } from 'src/app/models/cell.model';
import { SheetState } from 'src/app/states/sheet.state';

@Component({
  selector: 'lib-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  currentCell$ = this.store.select('sheet', 'currentCell');
  col: string = '';
  row: string = '';
  currentCell: Cell = <Cell>{};
  constructor(private store: Store<{ sheet: SheetState }>) {}
  ngOnInit(): void {
    this.currentCell$.subscribe((currentCell) => {
      if (
        currentCell.col != this.currentCell.col ||
        currentCell.row != this.currentCell.row
      ) {
        // console.log('currentCell', currentCell);
        this.col = this.getColName(currentCell.col - 1);
        this.row = currentCell.row.toString();
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
}
