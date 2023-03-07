import { User } from "src/app/models/user.model";

export interface UserState{
  user: User;
  error: string;
}
