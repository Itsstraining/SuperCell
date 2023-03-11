import * as SheetFileActions from '../actions/sheetFile.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, map, switchMap } from 'rxjs';
import { SheetFileService } from 'src/app/services/sheet-file.service';

@Injectable()
export class SheetFileEffects {

    constructor(
        private actions$: Actions,
        private sheetFileService: SheetFileService
    ) { }

    getSheetFilesByUserId$ = createEffect(() => this.actions$.pipe(
        ofType(SheetFileActions.getSheetFilesByUserId),
        switchMap((action) => this.sheetFileService.getSheetFiles(action.idToken, action._id)),
        map((sheetFiles) => {
            // console.log("sheetFiles", sheetFiles);
            if (sheetFiles == null) {
                sheetFiles = [];
            }
            return SheetFileActions.getSheetFilesByUserIdSuccess({ sheetFiles })
        }),
        catchError((error: string) =>
            from([SheetFileActions.getSheetFilesByUserIdFailure({ error })])
        )));

    getEdittingFile$ = createEffect(() => this.actions$.pipe(
        ofType(SheetFileActions.getEdittingFile),
        switchMap((action) => this.sheetFileService.getEdittingSheetFile(action.idToken, action._id)),
        map((sheetFile) => {
            console.log("sheetFile", sheetFile);
            return SheetFileActions.getEdittingFileSuccess({ sheetFile })
        }),
        catchError((error: string) =>
            from([SheetFileActions.getEdittingFileFailure({ error })])
        )));

    createSheetFile$ = createEffect(() => this.actions$.pipe(
        ofType(SheetFileActions.createSheetFile),
        switchMap((action) => this.sheetFileService.create(action.sheetFile, action.idToken)),
        map((sheetFile) => {
            console.log("sheetFile", sheetFile);
            return SheetFileActions.createSheetFileSuccess({ sheetFile })
        }),
        catchError((error: string) =>
            from([SheetFileActions.createSheetFileFailure({ error })])
        )));

    updateSheetFile$ = createEffect(() => this.actions$.pipe(
        ofType(SheetFileActions.updateSheetFile),
        switchMap((action) => this.sheetFileService.update(action.sheetFile, action.idToken)),
        map((sheetFile) => {
            console.log("sheetFile", sheetFile);
            return SheetFileActions.updateSheetFileSuccess({ sheetFile })
        }),
        catchError((error: string) =>
            from([SheetFileActions.updateSheetFileFailure({ error })])
        )));

    reNameSheetFile$ = createEffect(() => this.actions$.pipe(
        ofType(SheetFileActions.renameSheetFile),
        switchMap((action) => this.sheetFileService.rename(action.sheetFile, action.idToken)),
        map((sheetFile) => {
            if(sheetFile._id){
              console.log("sheetFile", sheetFile);
            }else{
              return SheetFileActions.renameSheetFileFailure({ error: "Sheet file not found" })
            }
            return SheetFileActions.renameSheetFileSuccess({ sheetFile })
        }),
        catchError((error: string) =>
            from([SheetFileActions.renameSheetFileFailure({ error })])
    )));



}
