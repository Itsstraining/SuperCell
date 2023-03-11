<<<<<<< HEAD
import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { Observable } from 'rxjs';
=======
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { MatMenuTrigger } from '@angular/material/menu';

import { Observable, Subscription } from 'rxjs';
>>>>>>> 255f8bf3a7ab9986bcacdb3046e2e91aafef8fe9
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
<<<<<<< HEAD
export class NavbarComponent 
{
  @Input('user') user$ !: Observable<User>;

  constructor(public dialog: MatDialog, public filedialog: MatDialog) {}
=======
export class NavbarComponent {
  @Input('user') user !: User;
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;
  subscription!: Subscription;

  constructor(public dialog: MatDialog, public filedialog: MatDialog) { }

>>>>>>> 255f8bf3a7ab9986bcacdb3046e2e91aafef8fe9

  openDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      data: this.user,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

<<<<<<< HEAD
  openFileDialog() 
  {
    const dialogRef = this.dialog.open(FileDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
=======
  openFileDialog() {
    const dialogRef = this.filedialog.open(FileDialogComponent, { restoreFocus: false });
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
>>>>>>> 255f8bf3a7ab9986bcacdb3046e2e91aafef8fe9
  }
}



