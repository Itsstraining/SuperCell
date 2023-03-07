import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SheetFile } from 'src/app/models/sheetFile.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserState } from 'src/states/user.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sheetFiles: SheetFile[] = [
    {
      _id: '1',
      title: 'Sheet 1',
      created_At: 123456789,
      updated_At: 123456789,
      owner: {
        _id: '1',
        name: 'John Doe',
        uid: '123456789',
        email: 'hehe@gmail.com',
        picture:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinteres',
      },
      shared: [],
      content: [],
    },
    {
      _id: '2',
      title: 'Sheet 2',
      created_At: 123456789,
      updated_At: 123456789,
      owner: {
        _id: '1',
        name: 'John Doe',
        uid: '123456789',
        email: '',
        picture: '',
      },
      shared: [],
      content: [],
    },
    {
      _id: '3',
      title: 'Sheet 3',
      created_At: 123456789,
      updated_At: 123456789,
      owner: {
        _id: '1',
        name: 'John Doe',
        uid: '123456789',
        email: '',
        picture: '',
      },
      shared: [],
      content: [],
    },
  ];

  subscription!: Subscription;

  user$ = this.store.select('user', 'user');
  constructor(private store: Store<{ user: UserState }>) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.user$.subscribe((user) => {
      if (user) {
        console.log(user);
      }
    });
  }
}
