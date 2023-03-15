import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const getUserInfo = createAction("[User] Get User Info", props<{ idToken: string }>());
export const getUserInfoSuccess = createAction("[User] Get User Info Success", props<{ user: User }>());
export const getUserInfoFailure = createAction("[User] Get User Info Failure", props<{ error: string }>());
export const clearUserInfo = createAction("[User] Clear User Info");
export const getUserInfoByEmail = createAction("[User] Get User Info By Email", props<{ idToken: string, email: string | null }>());
export const getUserInfoByEmailSuccess = createAction("[User] Get User Info By Emai Success", props<{ user: User }>());
export const getUserInfoByEmailFailure = createAction("[User] Get User Info By Emai Failure", props<{ error: string }>());
