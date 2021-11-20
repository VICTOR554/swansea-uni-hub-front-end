import { Component, OnInit } from '@angular/core';
import { StudentUnion } from './student-union.model';
import { StudentUnionService } from './student-union.service';

@Component({
  selector: 'app-student-union',
  templateUrl: './student-union.page.html',
  styleUrls: ['./student-union.page.scss'],
})
export class StudentUnionPage implements OnInit {
  loadedStudentUnion: StudentUnion[];
  constructor(private studentUnionService: StudentUnionService) { }

  ngOnInit() {
    this.loadedStudentUnion = this.studentUnionService.studentUnion;

  }

}
