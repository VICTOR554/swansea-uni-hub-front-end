/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { AboutUs, Contact, Location } from './about-us.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private _aboutUs: AboutUs[] = [
    new AboutUs(
      'Through us, you can join a Society or Sports Club, get Advice and Support, use our Shops & Bars or attend one of our awesome Events.',
      new Contact(
        'info@swansea-union.co.uk',
        'press@swansea-union.co.uk',
        'sales@swansea-union.co.uk',
      ),
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
