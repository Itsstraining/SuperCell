import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SheetFile } from 'src/app/models/sheetFile.model';
import { User } from 'src/app/models/user.model';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  color: string = 'e9e3e7';
  fileColor = ['e9e3e7', 'fff6d4', 'fdeacc', 'fbd9db', 'cef6ec', 'dae9fd']
  fileNameFormControl = new FormControl('', [Validators.required]);
  disabled = false;;
  isChecked = false;


  ngOnInit(): void {
  }

  createNewFile() {
    let newFile: SheetFile = {
      title: this.fileNameFormControl.value,
      created_At: 0,
      updated_At: 0,
      owner: this.data,
      shared: [],
      content: [],
      color: this.color,
      _id: '',
      canCollab: this.isChecked
    }
    this.dialogRef.close(newFile);
  }



}
