import { NgModule } from '@angular/core';
import { ExcelsisComponent } from './excelsis.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SheetlistComponent } from './components/sheetlist/sheetlist.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { OperationComponent } from './components/operation/operation.component';



@NgModule({
  declarations: [
    ExcelsisComponent,
    SheetComponent,
    NavbarComponent,
    ToolsComponent,
    SheetlistComponent,
    OperationComponent,
    
  ],
  imports: [
    ShareModule
  ],
  exports: [
    ExcelsisComponent,
    SheetComponent,
    NavbarComponent,
    ToolsComponent,
    SheetlistComponent,
    OperationComponent,
  ]
})
export class ExcelsisModule { }
