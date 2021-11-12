import { Injectable } from '@angular/core';
import { AcademicService, CampusAddress, Contact, GeneralEnquiries } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _contact: Contact[] = [
    new Contact(
      new GeneralEnquiries(
        '+44 (0)1792 205678',
        '+44 (0)1792 513100'
      ),
      new CampusAddress(
        ['Singleton', 'Bay Campus'],
        ['Swansea University, Singleton Park, Swansea, SA2 8PP, Wales, UK', 'Swansea University, Bay campus, Swansea, SA2 8PP, Wales, UK' ]
      ),
      new AcademicService(
        'Lorem Ipsum',
        '+44 (0) 1792 606000',
        'unihub@swansea.ac.uk',
        ' 8am- 4pm',
        'singleton'
      ),
    ),
  ];


  get contact() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._contact];
  }

  constructor() { }
}
