
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubDataService {

  userInfo: any;

  constructor(
    public http: HttpClient
  ) { }

  searchUser( userName ) {
    return this.http.get<Observable<any>>(`https://api.github.com/users/${userName}`);
  }

  saveUser(user) {
    this.userInfo = user;
  }

  getUser() {
    return this.userInfo;
  }
}
