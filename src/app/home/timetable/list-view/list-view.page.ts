import { Component, OnInit } from '@angular/core';
import { Activity } from '../timetable.model';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {

  loadedActivity: Activity [];

  constructor(private timetableService: TimetableService) { }

  ngOnInit() {
    this.loadedActivity = this.timetableService.activity;
  }
}
