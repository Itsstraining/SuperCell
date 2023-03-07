import { Component } from '@angular/core';
import {User,} from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from 'src/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public authService: AuthService, private store: Store<{auth:AuthState}>) { }

  user: User | undefined;

  login(){
    this.store.dispatch(AuthActions.login());
  }



}
