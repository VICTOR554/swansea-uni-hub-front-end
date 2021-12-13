import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Module, Note } from './notes.model';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit, OnDestroy {
  noNotes;
  loadedNotes: Note[];
  loadedModules: Module[];
  private noteSub: Subscription;

  constructor(private notesService: NotesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }
  ionViewWillEnter() {
    this.receiveNotes();
  }

  receiveNotes() {
    this.loadingCtrl.create({ message: 'Loading Note...' })
      .then(loadingEl => {
        loadingEl.present();
        this.noteSub = this.notesService.getAllNotes().subscribe((notes: any) => {
          this.loadedNotes = notes.data;
          console.log(notes);
          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          notes.data.forEach(element => {
            if (element.moduleCode) {
              this.receiveModule(element.moduleCode);
            } else {

              this.receiveModule('no module');
            }
          });
          if (notes.data.length === 0) {
            this.noNotes = true;
          } else {
            this.noNotes = false;
          }
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

  receiveModule(moduleCode) {
    if (moduleCode === 'no module') {
      this.loadedModules.push({
        name: 'no module',
        code: 'no module',
        courseCode: 0
      });
    } else {
      this.noteSub = this.notesService.getModule(moduleCode).subscribe((module: any) => {
        this.loadedModules.push(module.data);
        console.log('Module Code', moduleCode);
        console.log('Module', module);
        console.log('modules for the week', this.loadedModules);
      });
    }
  }


  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting Note...' })
      .then(loadingEl => {
        loadingEl.present();
        this.notesService.deleteNote(noteId).subscribe(() => {
          this.ionViewWillEnter();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete item', noteId);
        }, 1000);
      });
  }


  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }

}
