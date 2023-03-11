import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SheetFile } from 'src/app/models/sheetFile.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SpreadsheetService } from 'src/app/services/spreadsheet.service';
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
      color: 'e9e3e7',
      canCollab: true
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
      color: 'e9e3e7',
      canCollab: false
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
      color: 'e9e3e7',
      canCollab: false
    },
  ];

  subscription!: Subscription;

  user$ = this.store.select('user', 'user');
  user: User = <User>{};
  constructor(
    private store: Store<{ user: UserState }>,
    public dialog: MatDialog,
    private spreadsheet: SpreadsheetService
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

  openRenameDialog(file: SheetFile): void {
    const dialogRef = this.dialog.open(RenameDialogComponent, {
      data: file,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      data: this.user,
      width: '640px',
      height: '650px',
      autoFocus: false //
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      console.log('The dialog was closed');
    });
  }

  openInviteDialog(): void {
    const dialogRef = this.dialog.open(InviteDialogComponent, {
      data: this.user,
      autoFocus: false,
      height: '550px',
      width: '520px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  file$!: Observable<any>;
  file: any[] = [];
  shared: string = '';
  newFile: SheetFile[] = [];
  email: string = '';

  joinRoom(email: string) {
    if (email || email !== '') {
      console.log('join room: ', email);
      this.file$ = this.spreadsheet.getShareId(email);
      this.file$.subscribe((file: any) => {
        console.log('file: ', file);
        this.file.push(file);
      });
    } else {
      window.alert('Please enter a share id');
    }
  }

  sendFile(file: any) {
    let newFileData: SheetFile = {
      _id: file._id,
      title: file.title,
      created_At: file.created_At,
      updated_At: file.updated_At,
      owner: {
        _id: file.owner._id,
        picture: file.owner.picture,
        name: file.owner.name,
        uid: file.owner.uid,
        email: file.owner.email,
      },
      shared: [],
      content: [],
      color: '',
      canCollab: false,
    };
    console.log('file ', newFileData);
    this.spreadsheet.sendFile(newFileData);
  }

}
