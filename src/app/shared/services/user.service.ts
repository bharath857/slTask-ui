import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { People, PeopleResponse } from 'src/app/features/modles/user.model';
import { UtilService, Param } from './util/util.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor
  (private http: HttpClient, private utilService: UtilService) { }

  getpeople(page:number): Observable<PeopleResponse> {
    let params: Param[] = [ {key: 'page',
      value: page.toString()}]
    let url = this.utilService.generateURL('people/', params)
    return this.http.get<PeopleResponse>(url)
  }
}
