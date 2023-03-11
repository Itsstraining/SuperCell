import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { FileDialogComponent } from './components/file-dialog/file-dialog.component';
import { SheetTableComponent } from './components/sheet-table/sheet-table.component';


@NgModule({
  declarations: [
    SpreadsheetComponent,
    NavbarComponent,
    ToolsComponent,
    ShareDialogComponent,
    FileDialogComponent,
    SheetTableComponent,
  ],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    ShareModule
  ]
})
export class SpreadsheetModule { }
