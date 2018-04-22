import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { RedditData } from './redditData';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RedditDataService {

  BaseUrl = 'https://www.reddit.com/r/dogs/hot.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.BaseUrl);
  }

  getRedditData(): Observable<HttpResponse<RedditData>> {
    return this.http.get<RedditData>(this.BaseUrl, { observe: 'response' });
  }

}
