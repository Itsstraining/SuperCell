import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as SheetFileActions from '../../../../actions/sheetFile.action';
import { SheetFileState } from '../../../../states/sheetFile.state';
import { UserState } from '../../../../states/user.state';
import { Observable, Subscription } from 'rxjs';
import { SheetFile } from 'src/app/models/sheetFile.model';
import { AuthState } from '../../../../states/auth.state';
import { User } from 'src/app/models/user.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.scss'],
})
export class AcceptDialogComponent implements OnInit, OnDestroy {
  idTokenSubscription!: Subscription;
  userSubscription!: Subscription;
  idToken$ = this.store.select('auth', 'idToken');
  idToken: string = '';
  user$ = this.store.select('user', 'user');
  user: User = <User>{};

  constructor(
    private store: Store<{
      sheetFile: SheetFileState;
      user: UserState;
      auth: AuthState;
    }>,
    public dialogRef: MatDialogRef<AcceptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<SheetFile[]>,
    private _snackBar: MatSnackBar
  ) {}
  ngOnDestroy(): void {
    this.idTokenSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.idTokenSubscription = this.idToken$.subscribe((idToken) => {
      this.idToken = idToken;
    });
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  acceptRequest(request: SheetFile) {
    if (this.idToken == '' || this.user._id == '') {
      this.openSnackBar('Request failed');
      return;
    } else {
      this.store.dispatch(
        SheetFileActions.acceptRequest({
          sheetFile: request,
          idToken: this.idToken,
          uid: this.user._id,
        })
      );
      this.openSnackBar('Request accepted');
    }
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar(content: string) {
    this._snackBar.open(content, 'Oke', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['snackbar'],
    });
  }
}
