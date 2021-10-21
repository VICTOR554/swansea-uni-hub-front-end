import { Injectable } from '@angular/core';
import { StudentInformation, Module, Finance, Duration } from './student-information.model';

@Injectable({
  providedIn: 'root'
})
export class StudentInformationService {

  private _studentInformation: StudentInformation[] = [
    new StudentInformation(
      1234567,
      'victor',
      'male',
      '12/15/1999',
      'Nigeria',
      '07832876674',
      '2039887@swansea.ac.uk',
      'bay room 2',
      'bay',
      'science',
      201010,
      'bachelor',
      'current',
      'enrolled',
      new Duration(
        '12/2/2015',
        '15/9/2020'
      ),
      'software engineering',
      new Module(
        ['Data visualisation', 'Human Computer Interaction', 'Blockchain'],
        20,
        2
      ),
      new Finance(
        40,
        [2, 3, 4]
      )
    )
  ];

  get studentInformation() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._studentInformation];
  }
  constructor() { }
}
