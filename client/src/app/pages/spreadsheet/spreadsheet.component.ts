import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable, Subscription } from 'rxjs';
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
  isUpdate$ = this.store.select('sheetFile', 'isUpdate');

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
    this.user$.subscribe((user) => {
      if (user._id) {
        // console.log(user._id);
        this.user = user;
      }
    });
    this.idToken$.subscribe((idToken) => {
      if (idToken) {
        this.idToken = idToken;
        if (this.id) {
          // console.log('sheetId:', this.id);
          this.store.dispatch(
            SheetFileActions.getEdittingFile({
              _id: this.id,
              idToken: this.idToken,
            })
          );
        }
      }
    });

    this.route$.subscribe((id: string) => {
      if (id) {
        this.id = id;
        if (this.idToken) {
          // console.log('sheetId: ', this.id);
          this.store.dispatch(
            SheetFileActions.getEdittingFile({ _id: id, idToken: this.idToken })
          );

          this.spreadsheetService
            .getMessage(id)
            .pipe(
              mergeMap((data) => {
                if (data._id) {
                  if (data.change) {
                    // console.log('change', data);
                    return this.isUpdate$;
                  }
                }
                return this.isUpdate$;
              })
            )
            .subscribe((isUpdate) => {
              if (isUpdate) {
                this.store.dispatch(
                  SheetFileActions.getEdittingFile({
                    _id: id,
                    idToken: this.idToken,
                  })
                );
              }
            });
        }
      }
    });
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe();
    // this.routeSubscription.unsubscribe();
    // this.idTokenSubscription.unsubscribe();
    // this.spreadSheetSubscription.unsubscribe();
  }

  sendMessage(event: any): void {
    // console.log('event', event);
    if (event.change) {
      // console.log('send message: ', event.change);
      this.spreadsheetService.sendMessage({
        _id: this.id,
        change: event.change,
        user: this.user,
      });
    }
  }
}
