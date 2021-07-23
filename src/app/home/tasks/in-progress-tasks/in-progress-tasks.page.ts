import { Component, OnInit } from '@angular/core';
import { InProgress } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-in-progress-tasks',
  templateUrl: './in-progress-tasks.page.html',
  styleUrls: ['./in-progress-tasks.page.scss'],
})
export class InProgressTasksPage implements OnInit {
  loadedInProgressTasks: InProgress [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.loadedInProgressTasks = this.taskService.inProgress;
  }

}
