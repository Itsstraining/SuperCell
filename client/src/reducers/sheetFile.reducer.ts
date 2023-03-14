import { createReducer, on } from "@ngrx/store";
import { SheetFile } from "src/app/models/sheetFile.model";
import { SheetFileState } from "src/states/sheetFile.state";
import * as SheetFileActions from "../actions/sheetFile.action";


const initialState: SheetFileState = {
    sheetFiles: [],
    error: '',
    edittingFile: <SheetFile>{},
    isRename: false,
    isInvite: false,
    isAccept: false,
    requestList: [],
};

export const sheetFileReducer = createReducer(
    initialState,
    on(SheetFileActions.getEdittingFile, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
        };
        return newState;
    }),
    on(SheetFileActions.getEdittingFileSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            editingFile: action.sheetFile,
        };
        return newState;
    }),
    on(SheetFileActions.getEdittingFileFailure, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
        };
        return newState;
    }),
    on(SheetFileActions.getSheetFilesByUserId, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
        };
        return newState;
    }),
    on(SheetFileActions.getSheetFilesByUserIdSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            sheetFiles: action.sheetFiles,
        };
        return newState;
    }),
    on(SheetFileActions.getSheetFilesByUserIdFailure, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
        };
        return newState;
    }),
    on(SheetFileActions.updateSheetFile, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
        };
        return newState;
    }),
    on(SheetFileActions.updateSheetFileSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            edittingFile: action.sheetFile,
        };
        return newState;
    }),
    on(SheetFileActions.updateSheetFileFailure, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
        };
        return newState;
    }),
    on(SheetFileActions.createSheetFile, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
        };
        return newState;
    }),
    on(SheetFileActions.createSheetFileSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            edittingFile: action.sheetFile,
        };
        return newState;
    }),
    on(SheetFileActions.createSheetFileFailure, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
        };
        return newState;
    }),
    on(SheetFileActions.renameSheetFile, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            isRename: false,
        };
        return newState;
    }),
    on(SheetFileActions.renameSheetFileSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: '',
            isRename: true,
        };
        return newState;
    }),
    on(SheetFileActions.renameSheetFileFailure, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
            isRename: false,
        };
        return newState;
    }),
    on(SheetFileActions.clearUserSheetFiles, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            sheetFiles: [],
            edittingFile: <SheetFile>{},
        };
        return newState;
    }),
    on(SheetFileActions.inviteSheetFile, (state, action) => {

        console.log(action.type);
        let newState = {
            ...state,
            isInvite: false,
        };
        return newState;
    }),
    on(SheetFileActions.inviteSheetFileSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: '',
            isInvite: true,
        };
        return newState;
    }),
    on(SheetFileActions.inviteSheetFileFailure, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
            isInvite: false,
        };
        return newState;
    }),
    on(SheetFileActions.acceptRequest, (state, action) => {

        console.log(action.type);
        let newState = {

            ...state,
            isAccept: false,
        };
        return newState;
    }),
    on(SheetFileActions.acceptRequestSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: '',
            isAccept: true,
        };
        return newState;
    }),
    on(SheetFileActions.acceptRequestFailure, (state, action) => {

        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
            isAccept: false,
        };
        return newState;
    }),
    on(SheetFileActions.findRequestList, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
        };
        return newState;
    }),
    on(SheetFileActions.findRequestListSuccess, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            requestList: action.sheetFiles,
        };
        return newState;
    }),
    on(SheetFileActions.findRequestListFailure, (state, action) => {
        console.log(action.type);
        let newState = {
            ...state,
            error: action.error,
        };
        return newState;
    }),





);

