import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getAllNotes() {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/notes/all', this.authService.httpOptions);
  }

  getOneNote(noteId: string) {
    console.log(noteId);
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/notes/one/' + noteId, this.authService.httpOptions);

  }
  getModule(moduleCode: string) {
    return this.http.get('https://swansea-uni-hub-api.herokuapp.com/student/modules/' + moduleCode, this.authService.httpOptions);
  }

  createNote(title: string, moduleCode: string, description: string) {
    const dateTime = +moment().format('X');
    console.log(this.authService.httpOptions.headers);
    const newNote = new Note(
      title,
      moduleCode,
      dateTime,
      description,
    );
    return this.http.post('https://swansea-uni-hub-api.herokuapp.com/student/notes/new', newNote, this.authService.httpOptions);
  }

  updateNote(title: string, moduleCode: string, description: string, noteId: string) {
    const dateTime = +moment().format('X');
    console.log(this.authService.httpOptions.headers);
    const updatedNote = new Note(
      title,
      moduleCode,
      dateTime,
      description,

    );
    return this.http.put('https://swansea-uni-hub-api.herokuapp.com/student/notes/update/' + noteId, updatedNote, this.authService.httpOptions);
  }

  deleteNote(noteId: string) {
    return this.http.delete('https://swansea-uni-hub-api.herokuapp.com/student/notes/delete/' + noteId, this.authService.httpOptions);
  }

}
