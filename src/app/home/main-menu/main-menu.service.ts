import { Injectable } from '@angular/core';
import { Menu } from './main-menu.model';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  private _menu: Menu[] = [
    new Menu(
      'information-circle-outline',
      'Student information',
      '/home/tabs/main-menu/student-information'
    ),
    new Menu(
      'calendar-number-outline',
      'Submission Deadline',
      '/home/tabs/main-menu/submission-deadline'
    ),
    new Menu(
      'library-outline',
      'Library',
      '/home/tabs/main-menu/submission-deadline'
    ),
    new Menu(
      'map-outline',
      'Maps',
      '/home/tabs/main-menu/maps'
    ),
    new Menu(
      'book-outline',
      'Booking',
      '/home/tabs/main-menu/booking'
    ),
    new Menu(
      'body-outline',
      'Student Union',
      '/home/tabs/main-menu/student-union'
    ),
    new Menu(
      'earth-outline',
      'Event',
      '/home/tabs/main-menu/event'
    ),
    new Menu(
      'call-outline',
      'Key Contact',
      '/home/tabs/main-menu/key-contact'
    ),
    new Menu(
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
