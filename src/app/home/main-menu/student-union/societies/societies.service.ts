/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Contacts, MoreInfo, Societies } from './societies.model';

@Injectable({
  providedIn: 'root'
})
export class SocietiesService {

  private _societies: Societies[] = [
    new Societies(
      0,
      'victor',
      'Airsoft',
      'hobbies & interest',
      new MoreInfo(
        'What is Airsoft',
        'Airsoft is a combat simulation sport similar to paintball but without the ridiculous cost or bruises. Essentially, you get bb guns and the opportunty to shoot your friends in a controlled envoriment!',
        'What do we do',
        'We play casually several times a month, but we do also have an inter-university team that play the 25 other Airsoft societies around the UK',
      ),
      new Contacts(
        'airsoft@swansea-societies.co.uk',
        'https://www.facebook.com/swanseauniairsoft/',
        'https://www.instagram.com/su.airsoft'
      ),
      'joined',
    ),
    new Societies(
      0,
      'victor',
      'Steven Universe',
      'hobbies & interest',
      new MoreInfo(
        'What is Airsoft',
        'Airsoft is a combat simulation sport similar to paintball but without the ridiculous cost or bruises. Essentially, you get bb guns and the opportunty to shoot your friends in a controlled envoriment!',
        'What do we do',
        'We play casually several times a month, but we do also have an inter-university team that play the 25 other Airsoft societies around the UK',
      ),
      new Contacts(
        'airsoft@swansea-societies.co.uk',
        'https://www.facebook.com/swanseauniairsoft/',
        'https://www.instagram.com/su.airsoft'
      ),
      'all',
    ),
    ];

    get societies() {
      // eslint-disable-next-line no-underscore-dangle
      return [...this._societies];
    }
  constructor() { }
}
