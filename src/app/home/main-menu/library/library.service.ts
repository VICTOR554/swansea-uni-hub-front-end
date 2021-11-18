import { Injectable } from '@angular/core';
import { Library } from './library.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private _library: Library[] = [
    new Library(
      1,
      'Software Engineering',
      'Sommerville, Ian, 1951',
      'Software Engineering',
      'Boston : Pearson',
      '2011',
      'Bay & Singleton'
    ),
    new Library(
      2,
      'Mechanical Engineering',
      'Steven, Universe, 1951',
      'Mechanical Engineering',
      'Boston : Pearson',
      '2018',
      'Singleton'
    ),
    new Library(
      3,
      'Medicap practice',
      'Jack, Anderson, 1959',
      'Medicine',
      'Boston : Pearson',
      '2010',
      'Bay'
    ),
    new Library(
      4,
      'Cryptography',
      'Dave, Kensington, 1950',
      'Software Engineering',
      'Boston : Pearson',
      '2020',
      'Bay & Singleton'
    ),

  ];

  get library() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._library];
  }


  constructor() { }
}
