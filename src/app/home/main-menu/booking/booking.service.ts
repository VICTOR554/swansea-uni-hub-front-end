import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _booking: Booking[] = [
    new Booking(
      'dissertation',
      'current',
      'online',
      'computer foundary 201',
      '17/11/2021',
    ),
    new Booking(
      'draft',
      'current',
      'online',
      'computer foundary 201',
      '17/11/2021',
    ),
    new Booking(
      'Presentation',
      'past',
      'online',
      'computer foundary 201',
      '17/11/2021',
    ),
    new Booking(
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
