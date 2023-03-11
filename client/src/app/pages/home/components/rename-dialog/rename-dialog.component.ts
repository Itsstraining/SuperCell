import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SheetFile } from 'src/app/models/sheetFile.model';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent {
  newFileName: string | null = '';
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RenameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SheetFile
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  renameNewFile() {
    console.log(this.newFileName,'ddsa');
    let newName = this.newFileName?.trim();
    console.log(newName);
    if (newName == this.data.title || newName == '' || newName == null) {
      this.openSnackBar();
    }else{
      let newFile = {
        _id: this.data._id,
        owner: this.data.owner,
        title: this.newFileName,
        color: this.data.color,
      };
      this.dialogRef.close(newFile);
    }
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar() {
    this._snackBar.open('File name is not changed !!!', 'Oke', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }
}
