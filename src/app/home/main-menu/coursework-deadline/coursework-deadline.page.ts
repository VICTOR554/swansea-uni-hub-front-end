import { Component, OnInit } from '@angular/core';
import { CourseworkDeadline } from './coursework-deadline.model';
import { CourseworkDeadlineService } from './coursework-deadline.service';

@Component({
  selector: 'app-coursework-deadline',
  templateUrl: './coursework-deadline.page.html',
  styleUrls: ['./coursework-deadline.page.scss'],
})
export class CourseworkDeadlinePage implements OnInit {
  loadedCourseworkDeadline: CourseworkDeadline[];
  selectSegment = 'current';

  constructor(private courseworkDeadlineService: CourseworkDeadlineService ) { }

  ngOnInit() {
    this.loadedCourseworkDeadline = this.courseworkDeadlineService.courseworkDeadline;
  }


}
