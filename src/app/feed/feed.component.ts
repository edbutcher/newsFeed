import { Component, OnInit } from '@angular/core';

import { RedditData } from '../redditData';
import { RedditDataService } from '../reddit-data.service';
import {log} from 'util';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  subreddit = 'dogs';
  redditData: RedditData;

  constructor(private redditDataService: RedditDataService) { }

  showDataResponse() {
    this.redditDataService.getRedditData()
      .subscribe(resp => {
        this.redditData = { ... resp.body };
      });
  }

  ngOnInit() {
    this.showDataResponse();
    // this.showData();
  }

}
