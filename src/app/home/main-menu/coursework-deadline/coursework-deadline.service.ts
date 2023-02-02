import { Injectable } from '@angular/core';
import { CourseworkDeadline } from './coursework-deadline.model';

@Injectable({
  providedIn: 'root'
})
export class CourseworkDeadlineService {
  private _courseworkDeadline: CourseworkDeadline[] = [
    new CourseworkDeadline(
      "Web Application Development",
      'coursework 1',
      'david',
      '20/08/2022',
      'current',
      10
    ),
    new CourseworkDeadline(
      "Web Application Development",
      'coursework 2',
      'david',
      '20/10/2022',
      'current',
      10
    ),
    new CourseworkDeadline(
      "Information Security Management",
      'coursework 1',
      'david',
      '20/08/2021',
      'past',
      10
    ),
    new CourseworkDeadline(
      "Information Security Management",
      'coursework 2',
      'david',
      '20/10/2021',
      'past',
      10
    )
  ];

  get courseworkDeadline() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._courseworkDeadline];
  }

  constructor() { }

  // constructor(private authService: AuthService, private http: HttpClient) { }

  // getCurrentCoursework() {
  //   console.log(this.authService.httpOptions)
  //   return this.https.get('https://swansea-uni-hub-api.herokuapp.com/student/courseworks/current' + this.authService.httpOptions);
  // }

  // getPastCoursework() {
  //   return this.https.get('https://swansea-uni-hub-api.herokuapp.com/student/courseworks/past' + this.authService.httpOptions);
  // }
}
