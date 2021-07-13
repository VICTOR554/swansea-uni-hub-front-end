import { Injectable } from '@angular/core';
import { Menu } from './main-menu.model';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  private _menu: Menu[] = [
    new Menu(
      'information-circle-outline',
      'Student information'
    ),
    new Menu(
      'calendar-number-outline',
      'Submission Deadline'
    ),
    new Menu(
      'library-outline',
      'Library'
    ),
    new Menu(
      'map-outline',
      'Maps'
    ),
    new Menu(
      'book-outline',
      'Booking'
    ),
    new Menu(
      'body-outline',
      'Student Union'
    ),
    new Menu(
      'earth-outline',
      'Event'
    ),
    new Menu(
      'call-outline',
      'Key Contact'
    ),
    new Menu(
      'alert-circle-outline',
      'Report'
    ),
  ];

  get menu() {
    return [...this._menu];
  }
  constructor() { }
}
