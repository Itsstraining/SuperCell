import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';

const initialState = {
  idToken: "",
  error: ""
};

export const authReducer = createReducer(initialState,
  on(AuthActions.login, (state) => ({ ...state, error: "" })),
  on(AuthActions.loginSuccess, (state, { idToken }) => ({ ...state, idToken, error: "" })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.logout, (state) => ({ ...state, idToken: "", error: "" }))
);
