import { Component } from '@angular/core';
import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/states/user.state';
import * as UserActions from '../actions/user.action';
import { SheetFile } from './models/sheetFile.model';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  constructor(
    private auth: Auth,
    private store: Store<{ user: UserState }>,
    private route: Router,
    private userService: UserService
  ) {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        let user = getAuth().currentUser;
        let idToken = await user!.getIdToken(true);
        this.store.dispatch(UserActions.getUserInfo({ idToken }));
        this.route.navigate(['/home']);
      } else {
        this.store.dispatch(UserActions.clearUserInfo());
        this.route.navigate(['/']);
      }
    });
  }

  chat$!: Observable<any>;
  message: any[] = [];
  shared: string = '';
  newMessage: string = '';
  email: string = '';

  joinRoom(email: string) {
    if (email || email !== '') {
      console.log('join room: ', email);
      this.chat$ = this.userService.getShareId(email);
      this.chat$.subscribe((message: any) => {
        console.log('message: ', message);
        this.message.push(message);
      });
    } else {
      window.alert('Please enter a share id');
    }
  }

  sendMessage(message: any) {
    let newMessageData: SheetFile = {
      _id: '',
      title: '',
      created_At: 0,
      updated_At: 0,
      owner: {
        _id: '',
        picture: '',
        name: '',
        uid: '',
        email: '',
      },
      shared: [],
      content: [],
      color: '',
    };
    console.log('msg ', newMessageData);
    this.userService.sendMessage(newMessageData);
  }
}
