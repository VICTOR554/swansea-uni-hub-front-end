import { Injectable } from '@angular/core';
import { Menu } from './main-menu.model';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  private _menu: Menu[] = [
    new Menu(
      'calendar',
      'Student information'
    ),
    new Menu(
      'notifications-outline',
      'Library'
    ),
    new Menu(
      'journal',
      'Submission'
    ),
  ];

  get menu() {
    return [...this._menu];
  }
  constructor() { }
}
