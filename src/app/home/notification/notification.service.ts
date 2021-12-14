import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getCurrentNotifications() {
    console.log(this.authService.httpOptions)

    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/notifications' + '?status=current' , this.authService.httpOptions);
  }

  getPastNotifications() {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/notifications' + '?status=past', this.authService.httpOptions);
  }
  getModule(moduleCode: string) {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/modules/' + moduleCode, this.authService.httpOptions);
  }
}
