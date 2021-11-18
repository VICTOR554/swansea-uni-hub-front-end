import { Component, OnInit } from '@angular/core';
import { Library } from './library.model';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  loadedLibrary: Library[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.loadedLibrary = this.libraryService.library;

  }

}
