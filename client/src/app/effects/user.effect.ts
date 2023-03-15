import * as UserActions from '../actions/user.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, map, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserInfo),
      switchMap((action) => this.userService.getUserInfo(action.idToken)),
      map((user: User) => {
        // console.log("user", user);
        return UserActions.getUserInfoSuccess({ user: user });
      }),
      catchError((error: string) =>
        from([UserActions.getUserInfoFailure({ error })])
      )
    )
  );

  getUserInfoByEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserInfoByEmail),
      switchMap((action) =>
        this.userService.getUserInfoByEmail(action.email, action.idToken)
      ),
      map((user: User) => {
        console.log('user invited: ', user.email);
        if (user == null) {
          return UserActions.getUserInfoByEmailFailure({
            error: 'User not found',
          });
        } else {
          return UserActions.getUserInfoByEmailSuccess({ user: user });
        }
      }),
      catchError((error: string) => {
        return from([UserActions.getUserInfoByEmailFailure({ error })]);
      })
    )
  );
}
