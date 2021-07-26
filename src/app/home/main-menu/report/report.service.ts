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
      '12/2/2021',
      'maps does not work',
    ),
    new Report(
      2,
      'Timetable',
      '12/2/2021',
      'timetable is trash',
    ),
    new Report(
      3,
      'Notes',
      '12/2/2021',
      'Notes is trash',
    ),
    new Report(
      4,
      'Event',
      '12/2/2021',
      'Event is trash',
    ),
  ];

  get report() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._report];
  }
  constructor() { }
}
