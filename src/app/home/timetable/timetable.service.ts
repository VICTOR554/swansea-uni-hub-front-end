import { Injectable } from '@angular/core';
import { Activity } from './timetable.model';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private _activity: Activity [] = [
    new Activity(
      1,
      'HCI',
      'Lab',
      '10 am',
      '11 am',
      'david',
      'engineering building',
    ),
    new Activity(
      2,
      'Block chain',
      'Lecture',
      '12 pm',
      '1 pm',
      'sam',
      'engineering building',
    ),
    new Activity(
      3,
      'Data visualisation',
      'Seminar',
      '2 pm',
      '4 pm',
      'conor',
      'engineering building',
    ),
    new Activity(
      4,
      'Software Testing',
      'Lab',
      '5 pm',
      '6 pm',
      'david',
      'engineering building',
    ),
    new Activity(
      5,
      'HCI',
      'Lab',
      '7 pm',
      '8 pm',
      'david',
      'engineering building',
    ),
  ];

  constructor() { }

  get activity() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._activity];
  }
}
