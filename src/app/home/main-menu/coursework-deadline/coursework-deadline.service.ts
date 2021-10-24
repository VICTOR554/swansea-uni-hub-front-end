import { Injectable } from '@angular/core';
import { CourseworkDeadline } from './coursework-deadline.model';

@Injectable({
  providedIn: 'root'
})
export class CourseworkDeadlineService {
  private _courseworkDeadline: CourseworkDeadline[] = [
    new CourseworkDeadline(
      202020,
      'coursework 1',
      'david',
      '20/08/2021',
      'past',
      10
    ),
    new CourseworkDeadline(
      202020,
      'coursework 2',
      'david',
      '20/10/2021',
      'past',
      10
    ),
    new CourseworkDeadline(
      202050,
      'coursework 1',
      'david',
      '20/08/2021',
      'current',
      10
    ),
    new CourseworkDeadline(
      202050,
      'coursework 2',
      'david',
      '20/10/2021',
      'current',
      10
    )
  ];

  get courseworkDeadline() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._courseworkDeadline];
  }

  constructor() { }
}
