import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SpreadsheetService } from 'src/app/services/spreadsheet.service';
import { AuthState } from '../../states/auth.state';
import { SheetFileState } from '../../states/sheetFile.state';
import { UserState } from '../../states/user.state';
import * as SheetFileActions from '../../actions/sheetFile.action';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
})
export class SpreadsheetComponent {
  user$ = this.store.select('user', 'user');
  userSubscription!: Subscription;
  user: User = <User>{};

  routeSubscription!: Subscription;
  route$ = this.route.params.pipe(map((p) => p['id']));
  id: string = '';

  idTokenSubscription!: Subscription;
  idToken$ = this.store.select('auth', 'idToken');
  idToken: string = '';

  constructor(
    private store: Store<{
      user: UserState;
      sheetFile: SheetFileState;
      auth: AuthState;
    }>,
    private route: ActivatedRoute,
    private spreadsheetService: SpreadsheetService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.user$.subscribe((user) => {
      if (user._id) {
        // console.log(user._id);
        this.user = user;
      }
    });
    this.idTokenSubscription = this.idToken$.subscribe((idToken) => {
      if (idToken) {
        this.idToken = idToken;
        if (this.id) {
          console.log('sheetId:', this.id);
          this.store.dispatch(
            SheetFileActions.getEdittingFile({
              _id: this.id,
              idToken: this.idToken,
            })
          );
        }
      }
    });

    this.routeSubscription = this.route$.subscribe((id: string) => {
      if (id) {
        this.id = id;
        if (this.idToken) {
          console.log('sheetId: ', this.id);
          this.store.dispatch(
            SheetFileActions.getEdittingFile({ _id: id, idToken: this.idToken })
          );

          this.spreadsheetService.getMessage(id).subscribe((data) => {
            if (data._id) {
              if (data.user) {
                console.log(
                  `${data.user.email} is joining to fileId: ${data._id}`
                );
                console.log('data', data);
              }
              if (data.change) {
                console.log('change', data);
                this.store.dispatch(
                  SheetFileActions.getEdittingFile({
                    _id: id,
                    idToken: this.idToken,
                  })
                );
              }
            }
          });
          this.spreadsheetService.sendMessage({
            _id: id,
            user: this.user,
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
    this.idTokenSubscription.unsubscribe();
    // this.spreadSheetSubscription.unsubscribe();
  }

  sendMessage(event: any): void {
    console.log('event', event);
    if (event.change) {
      console.log('send message: ', event.change);
      this.spreadsheetService.sendMessage({
        _id: this.id,
        change: event.change,
      });
    } else {
      console.log('id', this.id);
      this.spreadsheetService.sendMessage({
        _id: this.id,
      });
    }
  }
}
