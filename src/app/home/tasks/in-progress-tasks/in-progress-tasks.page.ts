import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Task, Module } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-in-progress-tasks',
  templateUrl: './in-progress-tasks.page.html',
  styleUrls: ['./in-progress-tasks.page.scss'],
})
export class InProgressTasksPage implements OnInit, OnDestroy {
  noTasks = false;
  loadedInProgressTasks: Task[];
  loadedModules: Module[];
  private taskSub: Subscription;


  constructor(private tasksService: TasksService, private loadingCtrl: LoadingController) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.receiveInProgressTasks();
  }

  receiveInProgressTasks() {
    this.loadingCtrl.create({ message: 'Loading In Progress Tasks...' })
      .then(loadingEl => {
        loadingEl.present();
        this.taskSub = this.tasksService.getInProgressTasks().subscribe((inProgressTask: any) => {
          this.loadedInProgressTasks = inProgressTask;
          console.log(inProgressTask);

          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          inProgressTask.forEach(element => {
            if (element.moduleCode) {
              this.getModule(element.moduleCode);
            } else {

              this.getModule('No module');
            }
          });

          if (inProgressTask.length === 0) {
            this.noTasks = true;
          } else {
            this.noTasks = false;
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
      this.loadedModules.push({
        name: 'No module',
        code: 'No module',
        courseCode: 0
      });
    } else {
      this.taskSub = this.tasksService.getModule(moduleCode).subscribe((module: any) => {
        this.loadedModules.push(module);
        console.log('Module Code', moduleCode);
        console.log('Module', module);
        console.log('modules for the week', this.loadedModules);
      });
    }
  }

  // Delete Task
  deleteTask(taskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting Task...' })
      .then(loadingEl => {
        loadingEl.present();
        this.tasksService.deleteTask(taskId).subscribe(() => {
          this.ionViewWillEnter();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete task', taskId);
        }, 1000);
      });
  }

  // Flag Task
  flagTask(task: any, slidingItem: IonItemSliding) {
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

  unflagTask(task: any, slidingItem: IonItemSliding) {
    console.log(task);
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Unflagged...' })
      .then(loadingEl => {
        loadingEl.present();
        task.is_flagged = false;

        this.tasksService.updateTask(
          task.title,
          task.module_code,
          task.due_date_time,
          task.body,
          task.id,
          task.icompleted,
          task.flagged).subscribe(() => {
            this.ionViewWillEnter();
          });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('updated to flag', task);
        }, 1000);
      });
  }

  // Complete Task
  completeTask(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Completed...' })
      .then(loadingEl => {
        loadingEl.present();
        task.completed = true;
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

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }
}
