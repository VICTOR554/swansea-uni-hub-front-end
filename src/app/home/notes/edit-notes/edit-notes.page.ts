import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NotesService } from '../notes.service';
import { Note } from '../notes.model';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.page.html',
  styleUrls: ['./edit-notes.page.scss'],
})
export class EditNotesPage implements OnInit {
note: Note;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private notesService: NotesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('noteId')) {
        this.navCtrl.navigateBack('/home/tabs/notes');
        return;
      }
      this.note = this.notesService.getNote(paramMap.get('noteId'));
    });
  }

}
