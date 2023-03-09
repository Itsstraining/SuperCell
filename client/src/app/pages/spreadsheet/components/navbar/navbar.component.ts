import { Component, Input, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { MatMenuTrigger} from '@angular/material/menu';

import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{
  @Input('user') user$ !: Observable<User>;
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;
  constructor(public dialog: MatDialog, public filedialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openFileDialog() 
  {
    const dialogRef = this.filedialog.open(FileDialogComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}

  

