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
import { UserState } from 'src/states/user.state';
import * as UserActions from '../../../../../actions/user.action';

@Component({
  selector: 'app-invite-dialog',
  templateUrl: './invite-dialog.component.html',
  styleUrls: ['./invite-dialog.component.scss'],
})
export class InviteDialogComponent implements OnInit, OnDestroy {
  requestList: User[] = [];
  error$ = this.store.select((state) => state.user.error);
  errorSubscription!: Subscription;
  tempInviteList: User[] = [];
  inviteUserSubscription!: Subscription;
  idTokenSubscription!: Subscription;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  inviteUser$ = this.store.select((state) => state.user.inviteUser);
  idToken: string = '';
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InviteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private store: Store<{ user: UserState; auth: AuthState }>
  ) {}

  ngOnDestroy(): void {
    this.inviteUserSubscription.unsubscribe();
    this.idTokenSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.inviteUserSubscription = this.inviteUser$.subscribe((user) => {
      if (user._id) {
        console.log('user: ', user);
        if (!this.tempInviteList.find((u) => u._id === user._id)) {
          this.tempInviteList.push(user);
        } else {
          return this.openSnackBar();
        }
      }
    });
    this.idTokenSubscription = this.store
      .select((state) => state.auth.idToken)
      .subscribe((idToken) => {
        this.idToken = idToken;
      });
    this.errorSubscription = this.error$.subscribe((error) => {
      if (error === 'User not found') {
        this.emailControl.setErrors({ incorrect: true });
        this.openSnackBar();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.tempInviteList = [];
  }

  addInvite() {
    let email = this.emailControl.value;
    this.emailControl.setValue('');
    return this.store.dispatch(
      UserActions.getUserInfoByEmail({ email: email, idToken: this.idToken })
    );
  }

  removeInvite(user: User) {
    this.tempInviteList = this.tempInviteList.filter((u) => u._id !== user._id);
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar() {
    this._snackBar.open('User not found!!', 'Oke', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }
}
