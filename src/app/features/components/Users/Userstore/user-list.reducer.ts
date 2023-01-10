import { User } from '../../../modles/user.model';
import * as UserListActions from './user-list.actions';

export interface State {
  users: User[];
  editedUser: User;
  editedUserIndex: number;
}

const initialState: State = {
  users: [new User('Dummy 1', 5), new User('Dummy 2', 10)],
  editedUser: null,
  editedUserIndex: -1
};

export function UserListReducer(
  state: State = initialState,
  action: UserListActions.UserListActions
) {
  switch (action.type) {
    case UserListActions.ADD_User:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case UserListActions.UPDATE_User:
      const user = state.users[state.editedUserIndex];
      const updateduser = {
        ...user,
        ...action.payload
      };
      const updatedUsers = [...state.users];
      updatedUsers[state.editedUserIndex] = updateduser;

      return {
        ...state,
        users: updatedUsers,
        editedUserIndex: -1,
        editedUser: null
      };
    case UserListActions.DELETE_User:
      return {
        ...state,
        users: state.users.filter((ele, index) => {
          return index !== state.editedUserIndex;
        }),
        editedUserIndex: -1,
        editedUser: null
      };
    case UserListActions.START_EDIT:
      return {
        ...state,
        editedUserIndex: action.payload,
        editedUser: { ...state.users[action.payload] }
      };
    case UserListActions.STOP_EDIT:
      return {
        ...state,
        editedUser: null,
        editedUserIndex: -1
      };
    default:
      return state;
  }
}
