import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { UserState } from '../states/user.state';
import * as UserActions from '../actions/user.action';

const initialState: UserState = {
  user: <User>{},
  inviteUser: <User>{},
  error: '',
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUserInfo, (state, action) => {
    // console.log(action.type);
    let newState = {
      ...state,
    };
    return newState;
  }),
  on(UserActions.getUserInfoSuccess, (state, action) => {
    // console.log(action.type);
    let newState = {
      ...state,
      user: action.user,
    };
    return newState;
  }),
  on(UserActions.getUserInfoFailure, (state, action) => {
    // console.log(action.type);
    let newState = {
      ...state,
      error: action.error,
    };
    return newState;
  }),
  on(UserActions.clearUserInfo, (state, action) => {
    // console.log(action.type);
    let newState = {
      ...state,
      user: <User>{},
    };
    return newState;
  }),
  on(UserActions.getUserInfoByEmail, (state, action) => {
    // console.log(action.type);
    let newState = {
      ...state,
    };
    return newState;
  }),
  on(UserActions.getUserInfoByEmailSuccess, (state, action) => {
    // console.log(action.type);
    let newState = {
      ...state,
      inviteUser: action.user,
    };
    return newState;
  }),
  on(UserActions.getUserInfoByEmailFailure, (state, action) => {
    // console.log(action.type);
    let newState = {
      ...state,
      error: action.error,
    };
    return newState;
  })
);
