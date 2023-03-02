import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShareModule } from 'src/app/share/share/share.module';




@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
  ]
})
export class HomeModule { }
