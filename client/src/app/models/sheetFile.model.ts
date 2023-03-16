import { Cell } from './cell.model';
import { User } from './user.model';

export interface SheetFile {
  _id: string;
  title: string | null;
  createdAt: number;
  updatedAt: number;
  owner: User;
  shared: User[];
  content: Cell[][];
  color: string;
  canCollab: boolean;
  inviteList: User[];
}
