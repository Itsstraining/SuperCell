import * as SheetFileActions from '../actions/sheetFile.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, map, Subscription, switchMap } from 'rxjs';
import { SheetFileService } from 'src/app/services/sheet-file.service';

@Injectable()
export class SheetFileEffects {
  constructor(
    private actions$: Actions,
    private sheetFileService: SheetFileService
  ) {}

  getSheetFilesByUserId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.getSheetFilesByUserId),
      switchMap((action) =>
        this.sheetFileService.getSheetFiles(action.idToken, action._id)
      ),
      map((sheetFiles) => {
        // console.log("sheetFiles", sheetFiles);
        if (sheetFiles == null) {
          sheetFiles = [];
        }
        return SheetFileActions.getSheetFilesByUserIdSuccess({ sheetFiles });
      }),
      catchError((error: string) =>
        from([SheetFileActions.getSheetFilesByUserIdFailure({ error })])
      )
    )
  );

  getEdittingFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.getEdittingFile),
      switchMap((action) =>
        this.sheetFileService.getEdittingSheetFile(action.idToken, action._id)
      ),
      map((sheetFile) => {
        if (sheetFile._id != null) {
          // console.log('sheetFile', sheetFile);
          return SheetFileActions.getEdittingFileSuccess({ sheetFile });
        } else {
          return SheetFileActions.getEdittingFileFailure({
            error: 'Editting Sheet file not found',
          });
        }
      }),
      catchError((error: string) =>
        from([SheetFileActions.getEdittingFileFailure({ error })])
      )
    )
  );

  createSheetFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.createSheetFile),
      switchMap((action) =>
        this.sheetFileService.create(action.sheetFile, action.idToken)
      ),
      map((sheetFile) => {
        // console.log('sheetFile', sheetFile);
        return SheetFileActions.createSheetFileSuccess({ sheetFile });
      }),
      catchError((error: string) =>
        from([SheetFileActions.createSheetFileFailure({ error })])
      )
    )
  );

  updateSheetFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.updateSheetFile),
      switchMap((action) => {
        // console.log('action', action.sheetFile);
        return this.sheetFileService.update(action.sheetFile, action.idToken);
      }),
      map((sheetFile) => {
        console.log('sheetFile', sheetFile);
        return SheetFileActions.updateSheetFileSuccess({ sheetFile });
      }),
      catchError((error: string) =>
        from([SheetFileActions.updateSheetFileFailure({ error })])
      )
    )
  );

  reNameSheetFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.renameSheetFile),
      switchMap((action) =>
        this.sheetFileService.rename(action.sheetFile, action.idToken)
      ),
      map((sheetFile) => {
        if (sheetFile._id) {
          // console.log('sheetFile', sheetFile);
          return SheetFileActions.renameSheetFileSuccess({ isRename: true });
        } else {
          return SheetFileActions.renameSheetFileFailure({
            error: 'Sheet file not found',
          });
        }
      }),
      catchError((error: string) =>
        from([SheetFileActions.renameSheetFileFailure({ error })])
      )
    )
  );

  inviteSheetFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.inviteSheetFile),
      switchMap((action) =>
        this.sheetFileService.invite(action.sheetFile, action.idToken)
      ),
      map((sheetFile: any) => {
        if (sheetFile._id) {
          // console.log('sheetFile', sheetFile);
          return SheetFileActions.inviteSheetFileSuccess({ isInvite: true });
        } else {
          // console.log('sheetFile', sheetFile);
          return SheetFileActions.inviteSheetFileFailure({
            error: sheetFile.error,
          });
        }
      }),
      catchError((error: string) => {
        console.log('error', error);
        return from([SheetFileActions.inviteSheetFileFailure({ error })]);
      })
    )
  );

  acceptRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.acceptRequest),
      switchMap((action) =>
        this.sheetFileService.acceptRequest(
          action.sheetFile,
          action.idToken,
          action.uid
        )
      ),
      map((sheetFile) => {
        if (sheetFile) {
          // console.log('sheetFile', sheetFile);
          return SheetFileActions.acceptRequestSuccess({ isAccept: true });
        } else {
          return SheetFileActions.acceptRequestFailure({
            error: 'Sheet file not found',
          });
        }
      }),
      catchError((error: string) =>
        from([SheetFileActions.acceptRequestFailure({ error })])
      )
    )
  );

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SheetFileActions.findRequestList),
      switchMap((action) =>
        this.sheetFileService.findRequestList(action.idToken, action._id)
      ),
      map((sheetFiles) => {
        if (sheetFiles && sheetFiles.length > 0) {
          console.log('requests', sheetFiles);
          return SheetFileActions.findRequestListSuccess({ sheetFiles });
        } else {
          return SheetFileActions.findRequestListSuccess({ sheetFiles: [] });
        }
      }),
      catchError((error: string) =>
        from([SheetFileActions.findRequestListFailure({ error })])
      )
    )
  );
}
