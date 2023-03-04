import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet.component';
import { ExcelsisModule } from 'projects/excelsis/src/public-api';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    SpreadsheetComponent
  ],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    ExcelsisModule,
    ShareModule
  ]
})
export class SpreadsheetModule { }
