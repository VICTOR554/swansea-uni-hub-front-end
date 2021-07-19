import { Injectable } from '@angular/core';
import { Notes } from './notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _notes: Notes [] = [
    new Notes(
      'HCI REVIEW',
      'HCI',
      'CSCM39',
      'KAJVHILZFSGHLVJAILBJVADIVB DIBFAIBVIADFBIVIDFBVIDBDIBEKD',
      '10 am'
    ),
    new Notes(
      'Block',
      'Blockchain',
      'CSCM29',
      'KAJVHILZFSGHLVJAILBJVADIVB DIBFAIBVIADFBIVIDFBVIDBDIBEKD',
      '12 pm'
    ),
    new Notes(
      'Etherium',
      'Blockchain',
      'CSCM29',
      'KAJVHILZFSGHLVJAILBJVADIVB DIBFAIBVIADFBIVIDFBVIDBDIBEKD',
      '1:30 pm'
    ),
    new Notes(
      'input verification',
      'Software Testing',
      'CSCM64',
      'KAJVHILZFSGHLVJAILBJVADIVB DIBFAIBVIADFBIVIDFBVIDBDIBEKD',
      '4 pm'
    ),
  ];

  get notes() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._notes];
  }
  constructor() { }
}
