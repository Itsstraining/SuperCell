import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SheetFile } from 'src/app/models/sheetFile.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserState } from 'src/states/user.state';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { InviteDialogComponent } from './components/invite-dialog/invite-dialog.component';
import { RenameDialogComponent } from './components/rename-dialog/rename-dialog.component';

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
      color: '1',
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
      color: '1',
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
      color: '1',
    },
  ];

  subscription!: Subscription;

  user$ = this.store.select('user', 'user');
  user: User = <User>{};
  constructor(
    private store: Store<{ user: UserState }>,
    public dialog: MatDialog
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RenameDialogComponent, {
      data: { name: 'Sheet 1' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Create(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      data: this.user,
      width: '640px',
      height: '650px',
      autoFocus: false //
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Invite(): void {
    const dialogRef = this.dialog.open(InviteDialogComponent, {
      data: { name: 'Sheet 1' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
