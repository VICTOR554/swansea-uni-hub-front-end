import { Injectable } from '@angular/core';
import { StudentInformation } from './student-information.model';

@Injectable({
  providedIn: 'root'
})
export class StudentInformationService {
  private _studentInformation: StudentInformation[] = [];

  get studentInformation() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._studentInformation];
  }
  constructor() { }
}
