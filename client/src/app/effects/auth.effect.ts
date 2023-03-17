import * as AuthActions from '../actions/auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, map, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(() => this.authService.login()),
      map((idToken) => {
        // console.log("idToken", idToken);
        let user = this.userService.createUser(idToken);
        user.subscribe((data) => {
          if (data != null) {
            // console.log('data', data);
          } else {
            // console.log('user is existed');
          }
        });
        return AuthActions.loginSuccess();
      }),
      catchError((error: string) => from([AuthActions.loginFailure(error)]))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(async () => this.authService.logout()),
      map(() => AuthActions.logoutSuccess())
    )
  );
}
