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
<<<<<<< HEAD
import {MatTooltipModule} from '@angular/material/tooltip';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';



>>>>>>> 255f8bf3a7ab9986bcacdb3046e2e91aafef8fe9
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
<<<<<<< HEAD
    MatTooltipModule,
=======
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    RouterModule,


>>>>>>> 255f8bf3a7ab9986bcacdb3046e2e91aafef8fe9
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
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
<<<<<<< HEAD
    MatTooltipModule,
=======
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    RouterModule,

>>>>>>> 255f8bf3a7ab9986bcacdb3046e2e91aafef8fe9
  ],
})
export class ShareModule { }
