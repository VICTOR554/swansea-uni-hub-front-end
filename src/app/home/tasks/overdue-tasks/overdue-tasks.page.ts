import { Component, OnInit } from '@angular/core';
import { Overdue } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-overdue-tasks',
  templateUrl: './overdue-tasks.page.html',
  styleUrls: ['./overdue-tasks.page.scss'],
})
export class OverdueTasksPage implements OnInit {

  loadedOverdueTasks: Overdue [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.loadedOverdueTasks = this.taskService.overdue;
  }
}
