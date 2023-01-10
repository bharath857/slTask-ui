import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/features/modles/user.model';
import * as fromApp from '../../../../store/app.reducer';
import * as UserListActions from '../Userstore/user-list.actions';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<{ users: User[] }>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.users = this.store.select('userList');
  }
  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new UserListActions.StartEdit(index));
  }

}
