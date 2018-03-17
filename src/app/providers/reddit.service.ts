import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RedditService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getSubReddits() {
    return this.http.get('https://www.reddit.com/subreddits/.json?limit=10000', this.httpOptions);
  }

  getRssArticles() {
    return this.http.get('https://www.reddit.com/.json', this.httpOptions);
  }

  getSubRedditsArticles(articleName) {
    let endpoint = 'https://www.reddit.com';

    if (articleName) {
      endpoint +=  '/r/' + articleName + '/';
    }

    endpoint += '.json';

    return this.http.get(endpoint, this.httpOptions);
  }

  getUserArticles(username) {
    return this.http.get('https://www.reddit.com/user/' + username + '/.json', this.httpOptions);
  }

}
