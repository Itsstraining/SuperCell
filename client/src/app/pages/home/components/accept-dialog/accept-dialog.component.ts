import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SheetFileService } from 'src/app/services/sheet-file.service';
import { Store } from '@ngrx/store';
import * as SheetFileActions from '../../../../../actions/sheetFile.action';
import { SheetFileState } from 'src/states/sheetFile.state';
import { idToken } from '@angular/fire/auth';
import { User } from '@angular/fire/auth';
import { UserState } from 'src/states/user.state';
import { Observable } from 'rxjs';
import { SheetFile } from 'src/app/models/sheetFile.model';

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.scss'],
})
export class AcceptDialogComponent {
  constructor(
    private store: Store<{ sheetFile: SheetFileState; user: UserState }>,
    public dialogRef: MatDialogRef<AcceptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<SheetFile[]>
  ) {}

  acceptRequest() {

  }

}
