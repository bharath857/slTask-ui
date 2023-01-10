import { Action } from '@ngrx/store';
import { User } from '../../../modles/user.model';

export const ADD_User = 'ADD_User';
export const UPDATE_User = 'UPDATE_User';
export const DELETE_User = 'DELETE_User';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddUser implements Action {
  readonly type = ADD_User;

  constructor(public payload: User) {}
}

export class UpdateUser implements Action {
  readonly type = UPDATE_User;

  constructor(public payload: User ) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_User;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type UserListActions =
  | AddUser
  | UpdateUser
  | DeleteUser
  | StartEdit
  | StopEdit;
