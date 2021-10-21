import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursework-deadline',
  templateUrl: './coursework-deadline.page.html',
  styleUrls: ['./coursework-deadline.page.scss'],
})
export class CourseworkDeadlinePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
