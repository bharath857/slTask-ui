import { ViewChild } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { People, PeopleResponse } from '../../modles/user.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, OnDestroy {

  peopleDetails = new MatTableDataSource<People>()

  length:number = 10;
  pageSize:number = 10;
  pageIndex:number = 0;

  pageEvent: PageEvent;
  subscriptions: Subscription[] = []
  displayedColumns: string[] = ['name', 'created', 'films', 'height','homeworld', 'starships', 'vehicles'];

  constructor(private users: UserService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getpeopledetails(1)
  }

  getpeopledetails(page: number) {
    this.subscriptions.push(this.users.getpeople(page).subscribe((response: PeopleResponse) => {
      this.length = response.count;
      this.peopleDetails = new MatTableDataSource(response.results)
    }))
  }

  handlePageEvent(e: PageEvent) {
    /* this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex; */

    this.getpeopledetails(e.pageIndex+1)
  }

  individualInfo:People;
  getDetails(element:People){
    this.individualInfo = element;
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}

