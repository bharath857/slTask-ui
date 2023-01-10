import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Param } from 'src/app/shared/services/util/util.service';
import { TwitterSearchService } from '../../services/twitter-search/twitter-search.service';

@Component({
  selector: 'app-twitter-home',
  templateUrl: './twitter-home.component.html',
  styleUrls: ['./twitter-home.component.css']
})
export class TwitterHomeComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = []


  constructor(private twittersearch: TwitterSearchService) { }
  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe())
  }

  ngOnInit(): void {
  }

  searchtweets: Searchtweet[]
  getRecentTweets(param: Param) {
    let params: Param[] = [param, { key: 'max_results', value: '100' }]
    this.subscription.push(this.twittersearch.getRecentTweets(params).subscribe((response: SearchTweets) => {
      this.searchtweets = response.data;
    }))
  }

  tweetdetails: TweetUserId
  getTweetDetails(id: string) {

    this.subscription.push(this.twittersearch.getAutonDetails(id).subscribe((response: TweetUserId) => {
      this.tweetdetails = response;
      this.getUSerDetails(response.data.author_id);
    }))
  }
  userDetails: TwitterUser
  getUSerDetails(id: string) {
    this.subscription.push(this.twittersearch.getuserdetails(id).subscribe((response: TwitterUser) => {
      this.userDetails = response;
    }))
  }
}

export interface TweetUserId {
  data: {
    author_id: string
  }
}

export interface TwitterUser {
  data: {
    public_metrics: {
      followers_count: number,
      following_count: number,
      tweet_count: number,
      listed_count: number
    },
    name: string,
    username: string
  }
}

export interface SearchTweets extends BaseResponse {
  data: Searchtweet[]
}

export interface Searchtweet {
  id: string,
  text: string
}

export interface BaseResponse {
  meta: {
    newest_id: string,
    oldest_id: string,
    result_count: string,
    next_token: string
  }
}
