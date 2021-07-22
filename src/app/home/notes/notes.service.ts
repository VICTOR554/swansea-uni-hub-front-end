import { Injectable } from '@angular/core';
import { Note } from './notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _notes: Note [] = [
    new Note(
      1,
      'HCI REVIEW',
      'HCI',
      'CSCM39',
      // eslint-disable-next-line max-len
      'Human-Computer Interaction is a discipline concerned with Design, Evaluation,and Implementation of interactive computer systems for human use, and◦with the study of the major phenomena surrounding them',
      '10 am'
    ),
    new Note(
      2,
      'Block',
      'Blockchain',
      'CSCM29',
      'The next block is protected by the transaction id',
      '12 pm'
    ),
    new Note(
      3,
      'Etherium',
      'Blockchain',
      'CSCM29',
      'The contract is vulnerable to attacks if the wrong element are utilised',
      '1:30 pm'
    ),
    new Note(
      4,
      'Input verification',
      'Software Testing',
      'CSCM64',
      'By looking at  the input and output of the system the user can verify, if the project is working as expected',
      '4 pm'
    ),
  ];

  get notes() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._notes];
  }
  constructor() { }

  getNote(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return {...this._notes.find(p => p.id)};
  }
}
