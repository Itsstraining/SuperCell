import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { LogoutConfirmDialogComponent } from '../logout-confirm-dialog/logout-confirm-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { SheetFileService } from 'src/app/services/sheet-file.service';
import { Store } from '@ngrx/store';
import { SheetFileState } from 'src/states/sheetFile.state';
import { AcceptDialogComponent } from '../accept-dialog/accept-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input('user') user$ !: Observable<User>;
  constructor(private dialog: MatDialog,private store:Store<{sheetFile : SheetFileState}>) { }

  requestList$ = this.store.select('sheetFile', 'requestList');


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LogoutConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  requestListDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AcceptDialogComponent, {
      // width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.requestList$
    });
  }

}
