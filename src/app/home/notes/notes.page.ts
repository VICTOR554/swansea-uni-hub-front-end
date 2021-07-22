import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  loadedNotes: Note[];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.loadedNotes = this.notesService.notes;
  }

}
