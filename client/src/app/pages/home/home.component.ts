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
import { AuthState } from 'src/states/auth.state';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {


  idTokenSubscription!: Subscription;
  userStateSubscription!: Subscription;
  sheetFileSubscription!: Subscription;
  errorSubscription!: Subscription;
  isRenameSubscription!: Subscription;
  isAcceptSubscription!: Subscription;
  isInviteSubscription!: Subscription;

  isInvite$ = this.store.select('sheetFile', 'isInvite');
  isAccept$ = this.store.select('sheetFile', 'isAccept');
  isRename$ = this.store.select('sheetFile', 'isRename');
  error$ = this.store.select('sheetFile', 'error');
  error: string = '';
  sheetFileState$ = this.store.select('sheetFile');
  sheetFiles: SheetFile[] = [];
  idToken$ = this.store.select('auth', 'idToken');
  idToken: string = '';
  userState$ = this.store.select('user');
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
    this.userStateSubscription.unsubscribe();
    this.idTokenSubscription.unsubscribe();
    this.sheetFileSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
    this.isRenameSubscription.unsubscribe();
    this.isAcceptSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.userStateSubscription = this.userState$.subscribe((userState) => {
      if (userState.user._id != this.user._id) {
        this.user = userState.user;
        if (this.idToken) {
          console.log('userId: ', userState.user._id);
          // console.log('idToken: ', this.idToken);
          this.store.dispatch(SheetFileActions.getSheetFilesByUserId({ idToken: this.idToken, _id: this.user._id }));
          this.store.dispatch(SheetFileActions.findRequestList({ idToken: this.idToken, _id: this.user._id }));
        }
      }
      if (userState.error) {
        this.openSnackBar('Some thing went wrong');
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
    this.sheetFileSubscription = this.sheetFileState$.subscribe((state) => {
      if (state.edittingFile._id) {
        this.route.navigateByUrl('/spreadsheet/' + state.edittingFile._id);
      }
      if (state.sheetFiles != this.sheetFiles) {
        console.log('sheetFiles: ', state.sheetFiles);
        this.sheetFiles = state.sheetFiles;
      }
      if (state.error.includes('is already in shared list')) {
        this.openSnackBar(state.error);
      }
    });
    this.errorSubscription = this.error$.subscribe((error) => {
      if (error == 'Sheet file not found') {
        this.openSnackBar('Rename unsuccess');
      }
    });
    this.isRenameSubscription = this.isRename$.subscribe((isRename) => {
      if (isRename) {
        this.store.dispatch(SheetFileActions.getSheetFilesByUserId({ idToken: this.idToken, _id: this.user._id }));
        this.openSnackBar('Rename success');
      }
    });
    this.isAcceptSubscription = this.isAccept$.subscribe((isAccept) => {
      if (isAccept) {
        this.store.dispatch(SheetFileActions.getSheetFilesByUserId({ idToken: this.idToken, _id: this.user._id }));
        this.store.dispatch(SheetFileActions.findRequestList({ idToken: this.idToken, _id: this.user._id }));
        // this.openSnackBar('Accept success');
      }
    });
    this.isInviteSubscription = this.isInvite$.subscribe((isInvite) => {
      if (isInvite) {
        this.openSnackBar('Invite success');
      }
    });

  }

  openRenameDialog(file: SheetFile): void {
    const dialogRef = this.dialog.open(RenameDialogComponent, {
      data: file,
      restoreFocus: false,
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
      autoFocus: false,
      restoreFocus: false,

    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // console.log(result)
        this.store.dispatch(SheetFileActions.createSheetFile({ sheetFile: result, idToken: this.idToken }));
        console.log('Create dialog was closed');
      }
    });
  }

  openInviteDialog(sheetFile: SheetFile): void {
    // console.log('sheetFileId: ', sheetFile._id)
    const dialogRef = this.dialog.open(InviteDialogComponent, {
      data: this.user,
      autoFocus: false,
      height: '550px',
      width: '520px',
      restoreFocus: false,
    });
    dialogRef.afterClosed().subscribe((result: User[]) => {
      // console.log(result);
      if (result != undefined) {
        if (result.length == 0) {
          // this.openSnackBar('Invite unsuccess due to no user selected');
        } else {
          let updatedSheetFile = {
            ...sheetFile,
            inviteList: result
          }
          console.log('sheetFile Invite: ', updatedSheetFile._id);
          this.store.dispatch(SheetFileActions.inviteSheetFile({ idToken: this.idToken, sheetFile: updatedSheetFile }));
        }
      } else {
        // this.openSnackBar('Invite unsuccess');
      }
    });
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar(content: string) {
    this._snackBar.open(content, 'Oke', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['snackbar']
    });
  }


  handleError(event: any) {
    console.log(event);
    event.target.src = '../../assets/avatar.jpeg';

  }
}
