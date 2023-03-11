import { createAction, props } from "@ngrx/store";
import { SheetFile } from "src/app/models/sheetFile.model";

export const getEdittingFile = createAction("[Sheet File] Get Editting Sheet File", props<{ idToken: string, _id: string }>());
export const getEdittingFileSuccess = createAction("[Sheet File] Get Editting Sheet File Success", props<{ sheetFile: SheetFile }>());
export const getEdittingFileFailure = createAction("[Sheet File] Get Editting Sheet File Failure", props<{ error: string }>());

export const getSheetFilesByUserId = createAction("[Sheet File] Get Sheet Files By User Id", props<{ idToken: string, _id: string }>());
export const getSheetFilesByUserIdSuccess = createAction("[Sheet File] Get Sheet Files By User Id Success", props<{ sheetFiles: SheetFile[] }>());
export const getSheetFilesByUserIdFailure = createAction("[Sheet File] Get Sheet Files By User Id Failure", props<{ error: string }>());

//update sheet file
export const updateSheetFile = createAction("[Sheet File] Update Sheet File", props<{ idToken: string, sheetFile: SheetFile }>());
export const updateSheetFileSuccess = createAction("[Sheet File] Update Sheet File Success", props<{ sheetFile: SheetFile }>());
export const updateSheetFileFailure = createAction("[Sheet File] Update Sheet File Failure", props<{ error: string }>());

//create sheet file
export const createSheetFile = createAction("[Sheet File] Create Sheet File", props<{ idToken: string, sheetFile: SheetFile }>());
export const createSheetFileSuccess = createAction("[Sheet File] Create Sheet File Success", props<{ sheetFile: SheetFile }>());
export const createSheetFileFailure = createAction("[Sheet File] Create Sheet File Failure", props<{ error: string }>());

//rename sheet file
export const renameSheetFile = createAction("[Sheet File] Rename Sheet File", props<{ idToken: string, sheetFile: SheetFile }>());
export const renameSheetFileSuccess = createAction("[Sheet File] Rename Sheet File Success", props<{ isRename: boolean }>());
export const renameSheetFileFailure = createAction("[Sheet File] Rename Sheet File Failure", props<{ error: string }>());

export const clearUserSheetFiles = createAction("[Sheet File] Clear User Sheet Files");

