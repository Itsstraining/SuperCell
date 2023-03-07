import * as UserActions from '../actions/user.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, map, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  getUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.getUserInfo),
    switchMap((action) => this.userService.getUserInfo(action.idToken)),
    map((user:User[]) => {
      console.log("user", user);
      return  UserActions.getUserInfoSuccess({user:user[0]})
    }),
    catchError((error:string) =>
    from([UserActions.getUserInfoFailure({error})])
  )));

}
