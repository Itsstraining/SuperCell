import { Component} from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';


@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
  

