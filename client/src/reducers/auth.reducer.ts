import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';

const initialState = {
  idToken: "",
  error: ""
};

export const authReducer = createReducer(initialState,
  on(AuthActions.login, (state, action) => {
    console.log(action.type);
    return { ...state, error: "" }
  }),
  on(AuthActions.loginSuccess, (state, { type }) => {
    console.log(type);
    return { ...state, error: "" }
  }),
  on(AuthActions.loginFailure, (state, { error }) => {
    console.log(error);
    return { ...state, error }
  }),
  on(AuthActions.logout, (state, { type }) => {
    console.log(type);
    return { ...state, idToken: "", error: "" }
  }),
  on(AuthActions.storeIdToken, (state, { type, idToken }) => {
    console.log(type, idToken);
    return { ...state, idToken: idToken }
  }),
);
