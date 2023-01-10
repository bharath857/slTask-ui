import { ActionReducerMap } from '@ngrx/store';

import * as fromUserList from '../features/components/Users/Userstore/user-list.reducer';


export interface AppState {
  userList: fromUserList.State;

}

export const appReducer: ActionReducerMap<AppState> = {
  userList: fromUserList.UserListReducer,

};
