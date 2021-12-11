import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Task, Module } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit, OnDestroy {
  notasks = false;
  loadedcompletedtask: Task[];
  loadedmodules: Module[];
  private taskSub: Subscription;

  constructor(private tasksService: TasksService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.receiveCompletedTasks();
  }
  receiveCompletedTasks() {
    this.loadingCtrl.create({ message: 'Loading Completed Tasks...' })
      .then(loadingEl => {
        loadingEl.present();
        this.taskSub = this.tasksService.getCompleteTasks().subscribe((completedtasks: any) => {
          this.loadedcompletedtask = completedtasks;
          console.log(completedtasks);

          this.loadedmodules = [];
          // checks the module code and calls getmodule to get module name
          completedtasks.forEach(element => {
            if (element.module_code) {
              this.getModule(element.module_code);
            } else {

              this.getModule('No module');
            }
          });

          if (completedtasks.length === 0) {
            this.notasks = true;
          } else {
            this.notasks = false;
          }
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

 // gets module name
 getModule(moduleCode) {
  if (moduleCode === 'No module') {
    this.loadedmodules.push({
      name: 'No module',
      code: 'No module',
      courseCode: 0
    });

  } else {
    this.taskSub = this.tasksService.getModule(moduleCode).subscribe((module: any) => {
      this.loadedmodules.push(module);
      console.log('Module Code', moduleCode);
      console.log('Module', module);
      console.log('modules for the week', this.loadedmodules);
    });
  }
}

  flaggedTask(task: any, slidingItem: IonItemSliding) {
    console.log(task);
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Flagged...' })
      .then(loadingEl => {
        loadingEl.present();
        task.is_flagged = true;

        this.tasksService.updateTask(
          task.title,
          task.module_code,
          task.due_date_time,
          task.body,
          task.id,
          task.completed,
          task.flagged).subscribe(() => {
            this.ionViewWillEnter();
          });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('updated to flag', task);
        }, 1000);
      });
  }

  incomplete(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is not Completed...' })
      .then(loadingEl => {
        loadingEl.present();
        task.is_completed = false;
        this.tasksService.updateTask(
          task.title,
          task.module_code,
          task.due_date_time,
          task.body,
          task.id,
          task.completed,
          task.flagged).subscribe(() => {
            this.ionViewWillEnter();
          });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('updated to complete', task);
        }, 1000);
      });
  }

  deleteTask(taskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting...' })
      .then(loadingEl => {
        loadingEl.present();
        this.tasksService.deleteTask(taskId).subscribe(() => {
          this.ionViewWillEnter();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete item', taskId);
        }, 1000);
      });
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }
}
