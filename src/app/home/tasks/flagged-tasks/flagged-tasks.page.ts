import { Component, OnInit } from '@angular/core';
import { Flagged } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-flagged-tasks',
  templateUrl: './flagged-tasks.page.html',
  styleUrls: ['./flagged-tasks.page.scss'],
})
export class FlaggedTasksPage implements OnInit {
  loadedFlaggedTasks: Flagged [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.loadedFlaggedTasks = this.taskService.flagged;
  }

}
