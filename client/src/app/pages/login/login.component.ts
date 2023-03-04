import { Component } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: Auth) {}

  user: User | undefined;

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  logout() {
    this.auth.signOut();
  }


}
