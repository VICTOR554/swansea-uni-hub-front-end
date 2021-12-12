import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  GetAllActivity(currentDay: number) {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/activity/day/' + currentDay, this.authService.httpOptions);
  }

  GetModule(moduleCode: string) {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/module/' + moduleCode, this.authService.httpOptions);
  }

  GetCurrentWeek() {
    const createdDateTime = +moment().format('X');
    console.log('Created_date_time', createdDateTime);
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/week/date/' + createdDateTime, this.authService.httpOptions);
  }

  getAllWeeks() {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/week/', this.authService.httpOptions);
  }

  getLocation(key) {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/student/location/' + key, this.authService.httpOptions);
  }

  GetWeekByNumber(weekNumber: number) {
    console.log('WeekNumber', weekNumber);
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/student/week/number/' + weekNumber, this.authService.httpOptions);
  }

}
