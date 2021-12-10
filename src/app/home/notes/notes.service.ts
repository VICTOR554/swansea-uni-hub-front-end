/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // private _notes: Note [] = [
  //   new Note(
  //     1,
  //     'HCI REVIEW',
  //     'HCI',
  //     'CSCM39',
  //     // eslint-disable-next-line max-len
  //     'Human-Computer Interaction is a discipline concerned with Design, Evaluation,and Implementation of interactive computer systems for human use, and◦with the study of the major phenomena surrounding them',
  //     '10 am'
  //   ),
  //   new Note(
  //     2,
  //     'Block',
  //     'Blockchain',
  //     'CSCM29',
  //     'The next block is protected by the transaction id',
  //     '12 pm'
  //   ),
  //   new Note(
  //     3,
  //     'Etherium',
  //     'Blockchain',
  //     'CSCM29',
  //     'The contract is vulnerable to attacks if the wrong element are utilised',
  //     '1:30 pm'
  //   ),
  //   new Note(
  //     4,
  //     'Input verification',
  //     'Software Testing',
  //     'CSCM64',
  //     'By looking at  the input and output of the system the user can verify, if the project is working as expected',
  //     '4 pm'
  //   ),
  // ];

  // get notes() {
  //   return [...this._notes];
  // }
  // constructor() { }

  // getNote(id: string) {
  //   return {...this._notes.find(p => p.id)};
  // }


  constructor(private authService: AuthService, private http: HttpClient) { }
  getAllNotes() {
    return this.http.get('http://swansea-uni-hub-api.herokuapp.com/student/note/', this.authService.httpOptions);
  }

  getOneNote(noteId: string) {
    console.log(noteId);
    return this.http.get('http://swansea-uni-hub-api.herokuapp.com/student/note/one/' + noteId, this.authService.httpOptions);

  }
  getModule(moduleCode: string) {
    return this.http.get('http://swansea-uni-hub-api.herokuapp.com/student/module/' + moduleCode, this.authService.httpOptions);
  }

  addNote(title: string, moduleCode: string, description: string) {
    // tslint:disable-next-line: variable-name
    const dateTime = +moment().format('X');
    console.log(this.authService.httpOptions.headers);
    const newNote = new Note(
      title,
      moduleCode,
      dateTime,
      description,
    );
    return this.http.post('http://swansea-uni-hub-api.herokuapp.com/student/note/new', newNote, this.authService.httpOptions);
  }

  updateNote(title: string, moduleCode: string, description: string, noteId: string) {
    // tslint:disable-next-line: variable-name
    const dateTime = +moment().format('X');
    console.log(this.authService.httpOptions.headers);
    const updatedNote = new Note(
      title,
      moduleCode,
      dateTime,
      description,

    );
    return this.http.put('http://swansea-uni-hub-api.herokuapp.com/student/note/edit/' + noteId, updatedNote, this.authService.httpOptions);
  }

  deleteNote(noteId: string) {
    return this.http.delete('http://swansea-uni-hub-api.herokuapp.com/student/note/delete/' + noteId, this.authService.httpOptions);
  }

}
