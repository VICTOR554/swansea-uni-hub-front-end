/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Contacts, Sports, TrainingTime } from './sports.model';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  private _sports: Sports[] = [
    new Sports (
      0,
      'victor',
      'Airial sports',
      'other sports',
     'Aerial sports is a fun and alternative way to improve strength, balance, flexibility and increase your confidence! Check out our promo video: https://youtu.be/7J2_k7XN3Fo',
     [
      new TrainingTime(
        '4-5pm',
        'Bay Campus',
      ),
     ],
      ['Fortnightly socials ', 'Numerous community projects'],
     new Contacts(
        '',
        '',
        '',
        ''
      ),
      'all'
    ),
    new Sports (
      0,
      'victor',
      'archery',
      'Other sports',
     'Aerial sports is a fun and alternative way to improve strength, balance, flexibility and increase your confidence! Check out our promo video: https://youtu.be/7J2_k7XN3Fo',
     [
      new TrainingTime(
        '4-5pm',
        'Bay Campus',
      ),
     ],
      ['Fortnightly socials ', 'Numerous community projects'],
     new Contacts(
        '',
        '',
        '',
        '',
      ),
      'all'
    ),
    new Sports (
      0,
      'victor',
      'Martial Art',
      'other sports',
     'Aerial sports is a fun and alternative way to improve strength, balance, flexibility and increase your confidence! Check out our promo video: https://youtu.be/7J2_k7XN3Fo',
     [
      new TrainingTime(
        '4-5pm',
        'Bay Campus',
      ),
     ],
      ['Fortnightly socials ', 'Numerous community projects'],
     new Contacts(
        '',
        '',
        '',
        '',
      ),
      'joined'
    ),
    new Sports (
      0,
      'victor',
      'Footbal',
      'ball based sport',
     'Aerial sports is a fun and alternative way to improve strength, balance, flexibility and increase your confidence! Check out our promo video: https://youtu.be/7J2_k7XN3Fo',
     [
      new TrainingTime(
        '4-5pm',
        'Bay Campus',
      ),
      new TrainingTime(
        '4-5pm',
        'Bay Campus',
      ),
     ],
      ['Fortnightly socials ', 'Numerous community projects'],
     new Contacts(
        '',
        '',
        '',
        '',
      ),
      'joined'
    ),
  ];

  get sports() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._sports];
  }


  constructor() { }
}
