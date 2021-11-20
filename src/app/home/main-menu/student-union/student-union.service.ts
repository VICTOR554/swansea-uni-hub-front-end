import { Injectable } from '@angular/core';
import { StudentUnion } from './student-union.model';

@Injectable({
  providedIn: 'root'
})
export class StudentUnionService {

  private _studentUnion: StudentUnion[] = [
    new StudentUnion(
      0,
      'accessibility-outline',
      'Societies',
      '/home/tabs/main-menu/student-union/group'
    ),
    new StudentUnion(
      1,
      'basketball-outline',
      'Sports',
      '/home/tabs/main-menu/student-union/group'
    ),
    new StudentUnion(
      2,
      'earth-outline',
      'Event',
      '/home/tabs/main-menu/student-union/event'
    ),
    new StudentUnion(
      3,
      'help-circle-outline',
      'About-Us',
      '/home/tabs/main-menu/student-union/about-us'
    ),
  ];


  constructor() { }
}
