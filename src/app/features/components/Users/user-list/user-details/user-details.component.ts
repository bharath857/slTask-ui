import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import { User } from '../../../../modles/user.model';

import * as UserListActions from '../../Userstore/user-list.actions';
import * as fromApp from '../../../../../store/app.reducer';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsForm: FormGroup;
  edit: boolean = false;
  editedItem: User;
  subscription: Subscription[] = [];

  constructor(private formbuilder: FormBuilder,
    private store: Store<fromApp.AppState>) {
    this.userDetailsForm = this.formbuilder.group({
      username: null,
      userValue: null
    })
  }

  ngOnInit(): void {
    this.getdata()
  }


  getdata() {
    this.subscription.push(this.store
      .select('userList')
      .subscribe(stateData => {
        if (stateData.editedUserIndex > -1) {
          this.edit = true;
          this.editedItem = stateData.editedUser;
          this.userDetailsForm.setValue({
            username: this.editedItem.username,
            userValue: this.editedItem.userValue
          });
        } else {
          this.edit = false;
        }
      }));
  }
  onSubmit() {
    const value = this.userDetailsForm.value;
    const new_User = new User(value.username, value.userValue);
    if (this.edit) {
      this.store.dispatch(
        new UserListActions.UpdateUser(new_User)
      );
    } else {
      this.store.dispatch(new UserListActions.AddUser(new_User));
    }
    this.edit = false;
    this.userDetailsForm.reset();
  }
  onClear() {
    this.userDetailsForm.reset();
    this.edit = false;
    this.store.dispatch(new UserListActions.StopEdit());
  }

  onDelete() {
    this.store.dispatch(new UserListActions.DeleteUser());
    this.onClear();
  }
}
