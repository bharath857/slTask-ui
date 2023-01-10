import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-without-api',
  templateUrl: './twitter-without-api.component.html',
  styleUrls: ['./twitter-without-api.component.css']
})
export class TwitterWithoutAPIComponent implements OnInit {

  data!:any;
  constructor() { }

  ngOnInit(): void {
  }

  getvalue(value:string){
    this.data = {sourceType:"url", url:value}
  }
}
