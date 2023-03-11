import { Component } from '@angular/core';
import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
import { UserState } from 'src/states/user.state';
import * as UserActions from '../actions/user.action';
import * as AuthActions from '../actions/auth.action';
import * as SheetFileActions from '../actions/sheetFile.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  constructor(
    private auth: Auth,
    private store: Store<{ user: UserState, auth: AuthState }>,
    private route: Router,
  ) {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        let user = getAuth().currentUser;
        let idToken = await user!.getIdToken(true);
        this.store.dispatch(AuthActions.storeIdToken(idToken));
        this.store.dispatch(UserActions.getUserInfo({ idToken }));
        this.route.navigate(['../home']);
      } else {
        this.store.dispatch(UserActions.clearUserInfo());
        this.store.dispatch(SheetFileActions.clearUserSheetFiles());
        this.route.navigate(['/']);
      }
    });
  }

}
