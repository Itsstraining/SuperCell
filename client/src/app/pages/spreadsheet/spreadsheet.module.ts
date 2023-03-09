import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { SheetComponent } from './components/sheet/sheet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SheetlistComponent } from './components/sheetlist/sheetlist.component';
import { OperationComponent } from './components/operation/operation.component';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { FileDialogComponent } from './components/file-dialog/file-dialog.component';


@NgModule({
  declarations: [
    SpreadsheetComponent,
    SheetComponent,
    NavbarComponent,
    ToolsComponent,
    SheetlistComponent,
    OperationComponent,
    ShareDialogComponent,
    FileDialogComponent,
  ],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    ShareModule
  ]
})
export class SpreadsheetModule { }
