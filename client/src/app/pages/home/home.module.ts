import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { CreateComponent } from './components/create/create.component';
import { LogoutConfirmDialogComponent } from './components/logout-confirm-dialog/logout-confirm-dialog.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CreateComponent,
    LogoutConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
  ]
})
export class HomeModule { }
