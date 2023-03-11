import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
export interface DialogData { }
@Component({
  selector: 'lib-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent {

  tempInviteList: User[] = [

  ];
  emailControl = new FormControl('');
  subscription!: Subscription;
  constructor(
    public dialogRef: MatDialogRef<ShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  addInvite() {
    this.tempInviteList.push(this.data);
  }
}
