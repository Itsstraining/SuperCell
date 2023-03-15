import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as AuthActions from '../../../../actions/auth.action';

@Component({
  selector: 'app-logout-confirm-dialog',
  templateUrl: './logout-confirm-dialog.component.html',
  styleUrls: ['./logout-confirm-dialog.component.scss'],
})
export class LogoutConfirmDialogComponent {
  constructor(private store: Store<{ user: User }>) {}

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
