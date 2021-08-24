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
      'app',
      'maps does not work',
      '12/2/2021',
    ),
    new Report(
      2,
      'Timetable',
      'accomodation',
      'timetable is trash',
      '12/2/2021',
    ),
    new Report(
      3,
      'Blood on the beach',
      'beach',
      'There is a dead body',
      '12/2/2021',
    ),
    new Report(
      4,
      'timetable',
      'app',
      'Time table is down',
      '12/2/2021',
    ),
  ];

  get report() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._report];
  }
  constructor() { }
}
