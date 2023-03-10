import { User } from "./user.model";

export interface SheetFile {
  _id: string;
  title: string | null;
  created_At: number;
  updated_At: number;
  owner: User;
  shared: User[];
  content: [];
  color: string;
  canCollab: boolean;
}
