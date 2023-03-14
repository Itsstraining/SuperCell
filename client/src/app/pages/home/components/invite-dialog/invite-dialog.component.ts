import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthState } from 'src/states/auth.state';
import { SheetState } from 'src/states/sheet.state';
import { SheetFileState } from 'src/states/sheetFile.state';
import { UserState } from 'src/states/user.state';
import * as UserActions from '../../../../../actions/user.action';

@Component({
  selector: 'app-invite-dialog',
  templateUrl: './invite-dialog.component.html',
  styleUrls: ['./invite-dialog.component.scss'],
})
export class InviteDialogComponent implements OnInit, OnDestroy {

  userError$ = this.store.select((state) => state.user.error);
  inviteUser$ = this.store.select((state) => state.user.inviteUser);

  userErrorSubscription!: Subscription;
  inviteUserSubscription!: Subscription;
  idTokenSubscription!: Subscription;

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  tempInviteList: User[] = [];
  idToken: string = '';

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InviteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private store: Store<{ user: UserState; auth: AuthState, sheetFile: SheetFileState }>
  ) { }

  ngOnDestroy(): void {
    this.inviteUserSubscription.unsubscribe();
    this.idTokenSubscription.unsubscribe();
    this.userErrorSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.inviteUserSubscription = this.inviteUser$.subscribe((user) => {
      if (user._id) {
        console.log('user: ', user.email);
        if (!this.tempInviteList.find((u) => u._id === user._id)) {
          this.tempInviteList.push(user);
        } else {
          return this.openSnackBar('User is already in list!');
        }
      }
    });
    this.idTokenSubscription = this.store
      .select((state) => state.auth.idToken)
      .subscribe((idToken) => {
        this.idToken = idToken;
      });
    this.userErrorSubscription = this.userError$.subscribe((error) => {
      if (error === 'User not found') {
        this.openSnackBar('User not found!!');
      }
    });

  }

  onNoClick(): void {
    this.dialogRef.close([]);
    this.tempInviteList = [];
  }

  addInvite() {
    let email = this.emailControl.value;
    if (this.emailControl.value == this.data.email) {
      return this.openSnackBar('You cannot invite yourself!');
    }
    this.emailControl.setValue('');
    this.store.dispatch(
      UserActions.getUserInfoByEmail({ email: email, idToken: this.idToken })
    );
  }

  removeInvite(user: User) {
    this.tempInviteList = this.tempInviteList.filter((u) => u._id !== user._id);
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

  invite() {
    console.log('tempInviteList: ', this.tempInviteList);
    if (this.tempInviteList.length === 0) {
      this.dialogRef.close([]);
    } else {
      this.dialogRef.close(this.tempInviteList);
    }
  }


}
