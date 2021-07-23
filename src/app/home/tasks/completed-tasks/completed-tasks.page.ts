import { Component, OnInit } from '@angular/core';
import { Completed } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit {
  loadedCompletedTasks: Completed [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.loadedCompletedTasks = this.taskService.completed;
  }

}
