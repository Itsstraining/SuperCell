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
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {


  idTokenSubscription!: Subscription;
  userSubscription!: Subscription;
  sheetFileSubscription!: Subscription;
  errorSubscription!: Subscription;
  isRenameSubscription!: Subscription;

  isRename$ = this.store.select('sheetFile', 'isRename');
  error$ = this.store.select('sheetFile', 'error');
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
    private _snackBar: MatSnackBar,

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
    this.errorSubscription = this.error$.subscribe((error) => {
      if (error) {
        this.openSnackBar('Rename unsuccess');
      }
    });
    this.isRenameSubscription = this.isRename$.subscribe((isRename) => {
      if (isRename) {
        this.store.dispatch(SheetFileActions.getSheetFilesByUserId({ idToken: this.idToken, _id: this.user._id }));
        this.openSnackBar('Rename success');
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


  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar(content: string) {
    this._snackBar.open(content, 'Oke', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }



}
