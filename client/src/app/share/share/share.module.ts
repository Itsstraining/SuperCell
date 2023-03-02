import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule,
  ]
})
export class ShareModule { }
