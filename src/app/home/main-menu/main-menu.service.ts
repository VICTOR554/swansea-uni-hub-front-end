import { Injectable } from '@angular/core';
import { Menu } from './main-menu.model';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  private _menu: Menu[] = [
    new Menu(
      0,
      'information-circle-outline',
      'Student information',
      '/home/tabs/main-menu/student-information'
    ),
    new Menu(
      1,
      'calendar-number-outline',
      'Submission Deadline',
      '/home/tabs/main-menu/submission-deadline'
    ),
    new Menu(
      2,
      'library-outline',
      'Library',
      '/home/tabs/main-menu/submission-deadline'
    ),
    new Menu(
      3,
      'map-outline',
      'Maps',
      '/home/tabs/main-menu/maps'
    ),
    new Menu(
      4,
      'book-outline',
      'Booking',
      '/home/tabs/main-menu/booking'
    ),
    new Menu(
      5,
      'body-outline',
      'Student Union',
      '/home/tabs/main-menu/student-union'
    ),
    new Menu(
      6,
      'earth-outline',
      'Event',
      '/home/tabs/main-menu/event'
    ),
    new Menu(
      7,
      'call-outline',
      'Key Contact',
      '/home/tabs/main-menu/key-contact'
    ),
    new Menu(
      8,
      'alert-circle-outline',
      'Report',
      '/home/tabs/main-menu/report'
    ),
  ];

  get menu() {
    return [...this._menu];
  }
  constructor() { }
}
