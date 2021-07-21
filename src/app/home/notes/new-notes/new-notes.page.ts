import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.page.html',
  styleUrls: ['./new-notes.page.scss'],
})
export class NewNotesPage implements OnInit {
  form: FormGroup;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
     this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required,Validators.minLength(1)]
      }),
      moduleCode: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(180), Validators.minLength(1)]
      }),
    });
  }

  onCreateNote() {
    console.log(this.form);
  }

}
