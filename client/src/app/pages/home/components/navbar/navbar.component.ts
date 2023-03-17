import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LogoutConfirmDialogComponent } from '../logout-confirm-dialog/logout-confirm-dialog.component';
import { Store } from '@ngrx/store';
import { SheetFileState } from '../../../../states/sheetFile.state';
import { AcceptDialogComponent } from '../accept-dialog/accept-dialog.component';
import { UserState } from '../../../../states/user.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input('user') user$!: Observable<UserState>;
  constructor(
    private dialog: MatDialog,
    private store: Store<{ sheetFile: SheetFileState }>
  ) {}

  requestList$ = this.store.select('sheetFile', 'requestList');

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(LogoutConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  requestListDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AcceptDialogComponent, {
      // width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.requestList$,
      autoFocus: false,
    });
  }

  handleError(event: any) {
    // console.log(event);
    event.target.src = '../../../assets/avatar.jpeg';
  }
}
