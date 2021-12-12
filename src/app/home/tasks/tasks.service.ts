/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Task } from './tasks.model';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getInProgressTasks() {
    console.log(this.authService.token)
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/tasks?sort=createdDateTime&completed=false', this.authService.httpOptions);
  }
  getCompleteTasks() {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/tasks?&sort=createdDateTime&completed=true', this.authService.httpOptions);
  }
  getFlaggedTasks() {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/tasks?sort=createdDateTime&flagged=true', this.authService.httpOptions);
  }
  getOverdueTasks() {
    const date = moment(Date.now(), 'X');
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/tasks?sort=createdDateTime&dueDateTime$ltdate', this.authService.httpOptions);
  }

  getOneTask(taskId: string) {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/tasks/' + taskId, this.authService.httpOptions);
  }
  getModule(moduleCode: string) {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/modules/' + moduleCode, this.authService.httpOptions);
  }

  createTask(title: string, moduleCode: string, description: string, dueDateTime: string) {
    const createdDateTime = +moment().format('X');
    const completed = false;
    const flagged = false;
    const dueDate = +moment(dueDateTime.toString()).format('X');
    const newTask = new Task(
      title,
      moduleCode,
      createdDateTime,
      description,
      dueDate,
      completed,
      flagged
    );
    return this.http.post('https://swansea-uni-hub-api.herokuapp.com/student/tasks/new/', newTask, this.authService.httpOptions);
  }

  updateTask(
    title: string,
    moduleCode: string,
    dueDateTime: any,
    description: string,
    taskId: string,
    completed: boolean,
    flagged: boolean
  ) {
    const createdDateTime = +moment().format('X');
    console.log(dueDateTime);
    let dueDate;
    if (typeof dueDateTime === 'string') {
      dueDateTime = +moment(dueDateTime.toString()).format('X');
    } else {
      dueDate = dueDateTime;
    }

    console.log(dueDateTime);
    const updatedTask = new Task(
      title,
      moduleCode,
      createdDateTime,
      description,
      dueDateTime,
      completed,
      flagged
    );
    return this.http.put('https://swansea-uni-hub-api.herokuapp.com/student/tasks/edit/' + taskId, updatedTask, this.authService.httpOptions);
  }

  deleteTask(taskId: string) {
    return this.http.delete('https://swansea-uni-hub-api.herokuapp.com/student/tasks/delete/' + taskId, this.authService.httpOptions);
  }
}
