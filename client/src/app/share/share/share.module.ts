import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    MatTooltipModule,
    FormsModule,
    MatTooltipModule,
    RouterModule,
    MatBadgeModule,
    MatSnackBarModule,
  ],
  exports: [
    MatToolbarModule,
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatIconModule,
  ],
})
export class ShareModule { }
