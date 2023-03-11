import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SheetFile } from 'src/app/models/sheetFile.model';
import { User } from 'src/app/models/user.model';
import { SheetFileState } from 'src/states/sheetFile.state';
import { UserState } from 'src/states/user.state';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { InviteDialogComponent } from './components/invite-dialog/invite-dialog.component';
import { RenameDialogComponent } from './components/rename-dialog/rename-dialog.component';
import * as SheetFileActions from '../../../actions/sheetFile.action';
import * as UserActions from '../../../actions/user.action';
import * as AuthActions from '../../../actions/auth.action';
import { AuthState } from 'src/states/auth.state';
import { Router } from '@angular/router';
import { SpreadsheetService } from 'src/app/services/spreadsheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {


  idTokenSubscription!: Subscription;
  userSubscription!: Subscription;
  sheetFileSubscription!: Subscription;

  sheetFiles$ = this.store.select('sheetFile');
  sheetFiles: SheetFile[] = [];
  idToken$ = this.store.select('auth', 'idToken');
  idToken: string = '';
  user$ = this.store.select('user', 'user');
  user: User = <User>{};

  constructor(
    private store: Store<{
      user: UserState,
      sheetFile: SheetFileState,
      auth: AuthState
    }>,
    public dialog: MatDialog,
    private route: Router,
    private spreadsheet: SpreadsheetService
  ) { }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.idTokenSubscription.unsubscribe();
    this.sheetFileSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.userSubscription = this.user$.subscribe((user) => {
      if (user._id) {
        this.user = user;
        if (this.idToken) {
          console.log('userId: ', user._id);
          this.store.dispatch(SheetFileActions.getSheetFilesByUserId({ idToken: this.idToken, _id: this.user._id }));
        }
      }
    });
    this.idTokenSubscription = this.idToken$.subscribe((idToken) => {
      if (idToken) {
        this.idToken = idToken;
        // if (this.user.uid) {
        //   console.log('idToken: ', idToken);
        //   this.store.dispatch(SheetFileActions.getSheetFilesByUserId({ idToken: this.idToken, _id: this.user._id }));
        // }
      }
    });
    this.sheetFileSubscription = this.sheetFiles$.subscribe((sheetFiles) => {
      if (sheetFiles.edittingFile._id) {
        this.route.navigateByUrl('/spreadsheet/' + sheetFiles.edittingFile._id);
      }
      if (sheetFiles.sheetFiles.length > 0) {
        console.log('sheetFiles: ', sheetFiles.sheetFiles);
        this.sheetFiles = sheetFiles.sheetFiles;
      }
    });

  }

  openRenameDialog(file: SheetFile): void {
    const dialogRef = this.dialog.open(RenameDialogComponent, {
      data: file,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      console.log(result);
      this.store.dispatch(SheetFileActions.renameSheetFile({ sheetFile: result, idToken: this.idToken }));
      console.log('The dialog was closed');
      }
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
      if (result) {
        console.log(result)
        this.store.dispatch(SheetFileActions.createSheetFile({ sheetFile: result, idToken: this.idToken }));
        console.log('The dialog was closed');
      }
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
      createdAt: file.createdAt,
      updatedAt: file.updatedAt,
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
