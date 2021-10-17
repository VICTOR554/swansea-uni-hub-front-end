import { Component, OnInit } from '@angular/core';
import { StudentInformationService } from './student-information.service';
import { StudentInformation } from './student-information.model';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.page.html',
  styleUrls: ['./student-information.page.scss'],
})
export class StudentInformationPage implements OnInit {
  loadedStudentInformation: StudentInformation[];


  constructor(private studentInformationService: StudentInformationService) { }

  ngOnInit() {
    this.loadedStudentInformation = this.studentInformationService.studentInformation;
  }


}
