import { Injectable } from '@angular/core';
import { Notification } from './notification.model';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notification: Notification[] = [
    new Notification(
      202030,
      'No class',
      'david',
      'Lorem ipsum dolor sit amet consectetur adipisicing',
      'current',
      '20/08/2021',
    ),
    new Notification(
      202030,
      'Change of coursework 1',
      'sandra',
      'Lorem ipsum dolor sit amet consectetur adipisicing',
      'current',
      '20/08/2021',
    ),
    new Notification(
      202030,
      'Change classrooms',
      'bullock',
      'Lorem ipsum dolor sit amet consectetur adipisicing',
      'past',
      '20/08/2020',
    ),
    new Notification(
      202030,
      'No lab',
      'tom',
      'Lorem ipsum dolor sit amet consectetur adipisicing',
      'past',
      '20/08/2020',
    ),
  ];

  get notification() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._notification];
  }

  constructor() { }
}
