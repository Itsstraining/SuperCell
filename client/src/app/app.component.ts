import { Component } from '@angular/core';
import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from 'src/states/user.state';
import * as UserActions from '../actions/user.action';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  constructor(private auth: Auth, private store: Store<{ user: UserState }>,private route: Router) {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        let user = getAuth().currentUser;
        let idToken = await user!.getIdToken(true);
        this.store.dispatch(UserActions.getUserInfo({ idToken }));
        this.route.navigate(['/spreadsheet']);
      }else{
        this.store.dispatch(UserActions.clearUserInfo());
        this.route.navigate(['/']);
      }
    });
  }
}
