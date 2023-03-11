import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SheetFile } from 'src/app/models/sheetFile.model';


@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent {
  newFileName: string | null = '';
  constructor(
    public dialogRef: MatDialogRef<RenameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SheetFile
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {}

  renameNewFile() {
    let newFile  ={
      _id: this.data._id,
      owner: this.data.owner,
      title: this.newFileName,
      color: this.data.color,
    };
    this.dialogRef.close(newFile);
  }
}
