/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { AboutUs, Contact, Team, Location } from './about-us.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private _aboutUs: AboutUs[] = [
    new AboutUs(
      'About Us',
      'Through us, you can join a Society or Sports Club, get Advice and Support, use our Shops & Bars or attend one of our awesome Events.',
      new Contact(
        'info@swansea-union.co.uk',
        'If you have any queries or questions, pop us an email and we will ensure to put you in touch with the relevant member of our team to help you.',
        'press@swansea-union.co.uk',
        'Our Communications team will be happy to help with any media enquiries.',
        'sales@swansea-union.co.uk',
        'Our Sales team will be happy to help with any advertising and sales enquiries',
      ),
      [new Team(
        'Senior management',
        'david',
        'Chief executive',
      )],
      [
        new Location(
          'bay',
          'Y Twyni, Fabian Way, Crymlyn Burrows, Swansea SA1 8EN '
        ),
        new Location(
          'singleton',
          'Faraday Tower, Singleton Park, Swansea SA2 8PP'
        ),
      ],
    ),
  ];

  get aboutUs() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._aboutUs];
  }

  constructor() { }
}
