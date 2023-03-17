import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { map, mergeMap, Subject, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SpreadsheetService } from 'src/app/services/spreadsheet.service';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input('user') user!: User;

  clientId$: Subject<string> = new Subject<string>();

  joinedList: any[] = [];
  subscription!: Subscription;
  route$ = this.route.params.pipe(map((p) => p['id']));
  id: string = '';

  constructor(
    public dialog: MatDialog,
    public filedialog: MatDialog,
    private spreadSheetService: SpreadsheetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route$.subscribe((id: string) => {
      if (id) {
        this.id = id;
        // console.log('sheetId: ', this.id);
        this.spreadSheetService.getMessage(id).subscribe((data) => {
          if (data._id) {
            if (data.user) {
              // console.log(
              //   `${data.user.email} is joining to fileId: ${data._id}`
              // );
              // console.log('data', data);
            }
            if (data.client) {
              let index = this.joinedList.findIndex(
                (dat) => dat.clientId === data.client
              );
              if (index === -1) {
                this.joinedList.push({
                  user: data.user,
                  clientId: data.client,
                });
                // console.log('joinedList', this.joinedList);
                this.clientId$.next(data.client);
              } else {
                return;
              }
            }
          }
        });
        this.spreadSheetService.sendMessage({
          _id: id,
          user: this.user,
        });
      }
    });
    this.clientId$.subscribe((id) => {
      // console.log('clientId: ', id);
      this.spreadSheetService.listenClient(id).subscribe((data) => {
        // console.log(data);
        let index = this.joinedList.findIndex(
          (dat) => dat.clientId === data.client
        );
        // console.log('index', index);
        if (index === -1) {
          return;
        } else {
          this.joinedList.splice(index, 1);
        }
      });
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      data: this.user,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  turnBackHome() {
    window.location.href = '/home';
  }

  handleError(event: any) {
    // console.log(event);
    event.target.src = '../../../assets/avatar.jpeg';
  }
}
