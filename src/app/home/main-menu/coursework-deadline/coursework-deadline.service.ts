import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseworkDeadlineService {
  constructor(private authService: AuthService, private http: HttpClient) { }

  getCurrentCoursework() {
    console.log(this.authService.httpOptions)
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/courseworks/current' + this.authService.httpOptions);
  }

  getPastCoursework() {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/courseworks/past' + this.authService.httpOptions);
  }
}
