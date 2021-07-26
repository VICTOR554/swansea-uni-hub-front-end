import { Injectable } from '@angular/core';
import { Report } from './report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private _report: Report [] = [
    new Report(
      1,
      'Maps',
      'maps does not work',
    ),
    new Report(
      2,
      'Timetable',
      'timetable is trash',
    ),
    new Report(
      3,
      'Notes',
      'Notes is trash',
    ),
    new Report(
      4,
      'Event',
      'Event is trash',
    ),
  ];

  get notes() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._report];
  }
  constructor() { }
}
