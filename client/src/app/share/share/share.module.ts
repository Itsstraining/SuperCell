import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ]
})
export class ShareModule { }
