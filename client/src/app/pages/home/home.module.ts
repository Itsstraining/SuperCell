import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { LogoutConfirmDialogComponent } from './components/logout-confirm-dialog/logout-confirm-dialog.component';
import { RenameDialogComponent } from './components/rename-dialog/rename-dialog.component';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { InviteDialogComponent } from './components/invite-dialog/invite-dialog.component';
import { AcceptDialogComponent } from './components/accept-dialog/accept-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LogoutConfirmDialogComponent,
    RenameDialogComponent,
    CreateDialogComponent,
    InviteDialogComponent,
    AcceptDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
  ]
})
export class HomeModule { }
