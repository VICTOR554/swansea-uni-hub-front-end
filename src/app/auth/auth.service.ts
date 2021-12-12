/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface AuthResponseData {
  token?: string;
  text?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _userIsAuthenticated = false;

  private _token = '';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userToken() {
    return this._token;
  }

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this._token
    })
  };

  token(studentId: number, password: string) {
    return this.http.post('https://swansea-uni-hub-api.herokuapp.com/auth/login/student', {
      // eslint-disable-next-line id-blacklist
      number: studentId,
      password
    });
  }

  httpHeaderAuthorization(token) {
    console.log(token);
    this._token = "Bearer " + token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this._token);
  }

  logout() {
    console.log('before log out', this._userIsAuthenticated);
    this._userIsAuthenticated = false;
  }

  login() {
    console.log('before log in', this._userIsAuthenticated);
    this._userIsAuthenticated = true;
  }
}
