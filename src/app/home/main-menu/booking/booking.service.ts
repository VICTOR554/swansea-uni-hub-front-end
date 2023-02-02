import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _booking: Booking[] = [
    new Booking(
      1,
      'dissertation',
      'current',
      'online',
      'computer foundary 201',
      '1/11/2022',
    ),
    new Booking(
      2,
      'draft',
      'current',
      'online',
      'computer foundary 201',
      '12/11/2022',
    ),
    new Booking(
      3,
      'Presentation',
      'past',
      'online',
      'computer foundary 201',
      '17/11/2021',
    ),
    new Booking(
      4,
      'coursework',
      'past',
      'online',
      'computer foundary 201',
      '17/11/2021',
    ),
  ];

  get booking() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._booking];
  }

  constructor() { }
}
