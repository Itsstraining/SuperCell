import * as AuthActions from '../actions/auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, map, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(() => this.authService.login()),
    map((idToken) => {
      console.log("idToken", idToken);
      return  AuthActions.loginSuccess(idToken )
    }),
    catchError((error:string) =>
    from([AuthActions.loginFailure(error)])
  )));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    switchMap(async () => this.authService.logout()),
    map(() => AuthActions.logoutSuccess()),
  ));


}
