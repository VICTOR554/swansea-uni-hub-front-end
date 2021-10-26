import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _contact: Contact[] = [
    new Contact(
      'Campus address',
      'Lorem',
      'Swansea University Singleton Park SwanseaSA2 8PP Wales, UK',
      'Nigeria',
      '07832876674',
      '2039887@swansea.ac.uk',
    ),
  ];


  get contact() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._contact];
  }

  constructor() { }
}
