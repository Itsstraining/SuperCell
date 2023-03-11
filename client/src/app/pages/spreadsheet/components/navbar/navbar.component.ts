import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent
{
  @Input('user') user !: User;
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;
  subscription!: Subscription;

  constructor(public dialog: MatDialog, public filedialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      data: this.user,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openFileDialog() {
    const dialogRef = this.dialog.open(FileDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }





}

