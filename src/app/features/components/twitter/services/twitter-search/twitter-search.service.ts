import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/shared/services/util/util.service';
import { TwitterUtilService } from 'src/app/shared/twitter/twitter-util/twitter-util.service';
import { SearchTweets, TwitterUser } from '../../components/twitter-home/twitter-home.component';

@Injectable({
  providedIn: 'root'
})
export class TwitterSearchService {

  constructor(private http: HttpClient, private utilService: TwitterUtilService) { }

  getRecentTweets(params: Param[]): Observable<SearchTweets> {
    let url = this.utilService.generateURL('tweets/search/recent', params)
    return this.http.get<SearchTweets>(url)
  }
  getuserdetails(id: string): Observable<TwitterUser> {
    let params: Param[] = [{ key: 'user.fields', value: 'public_metrics' }];
    let url = this.utilService.generateURL('users/' + id, params)
    return this.http.get<TwitterUser>(url)
  }
  getAutonDetails(id: string) {
    let params: Param[] = [{ key: 'tweet.fields', value: 'author_id' }];
    let url = this.utilService.generateURL('tweets/' + id, params)
    return this.http.get<any>(url)
  }
}
