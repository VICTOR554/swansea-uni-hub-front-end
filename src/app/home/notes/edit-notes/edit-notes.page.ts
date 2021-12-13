import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { NotesService } from '../notes.service';
import { Note } from '../notes.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.page.html',
  styleUrls: ['./edit-notes.page.scss'],
})
export class EditNotesPage implements OnInit, OnDestroy  {
  loadedNote: Note;
  form: FormGroup;
  private noteSub: Subscription;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private notesService: NotesService,
    private router: Router, private loadingCtrl: LoadingController,) { }

  ngOnInit() {
    // Subscribe to changes in route params
    this.route.paramMap.subscribe(paramMap => {
      // check if it has the note id if not go back to notes
      if (!paramMap.has('noteId')) {
        this.navCtrl.navigateBack('/home/tabs/notes');
        return;
      }
      console.log(paramMap);
      console.log(paramMap.get('noteId'));
      this.noteSub = this.notesService.getOneNote(paramMap.get('noteId')).subscribe((note: any) => {
        this.loadedNote = note.data;
        console.log(this.loadedNote);
        // load detail of item in form by removing null and calling the title and description
        this.form = new FormGroup({
          title: new FormControl(this.loadedNote.title, {
            updateOn: 'blur',
            validators: [Validators.required],
          }),
          moduleCode: new FormControl(this.loadedNote.moduleCode, {
            updateOn: 'blur',
          }),
          description: new FormControl(this.loadedNote.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)]
          })
        });
      });
    });
  }

  onUpdateNote() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
    this.loadingCtrl.create({
      message: 'Updating Note'
    }).then(loadingEl => {
      loadingEl.present();
      this.notesService.updateNote(
        this.form.value.title,
        this.form.value.moduleCode,
        this.form.value.description,
        this.loadedNote._id
      )
        .subscribe(() => {
          setTimeout(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/home/tabs/notes']);
          }, 1000);
        });
    });

  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }
}
