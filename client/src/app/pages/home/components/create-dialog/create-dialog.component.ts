import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  color?: string;
  fileColor = ['#e9e3e7', '#fff6d4', '#fdeacc', '#fbd9db', '#cef6ec', '#dae9fd']
  fileNameFormControl = new FormControl('', [Validators.required]);
  disabled = false;;
  checked = false;


  ngOnInit(): void {
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];

}
