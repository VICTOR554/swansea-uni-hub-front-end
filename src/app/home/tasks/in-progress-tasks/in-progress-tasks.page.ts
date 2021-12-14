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
    this.receiveInProgressTasks();
  }
  ionViewWillEnter() {
    this.receiveInProgressTasks();
  }

  receiveInProgressTasks() {
    this.loadingCtrl.create({ message: 'Loading In Progress Tasks...' })
      .then(loadingEl => {
        loadingEl.present();
        this.taskSub = this.tasksService.getInProgressTasks().subscribe((inProgressTasks: any) => {
          this.loadedInProgressTasks = inProgressTasks.data;
          console.log("In progress task", inProgressTasks.data);




          this.loadedModules = [];

          // checks the module code and calls getmodule to get module name
          inProgressTasks.data.forEach(element => {
            if (element.moduleCode) {
              this.onGetModule(element.moduleCode);
            } else {
              this.onGetModule('No module');
            }
          });

          if (inProgressTasks.data.length === 0) {
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
  onGetModule(moduleCode) {
    if (moduleCode === 'No data') {
      this.loadedModules.push({
        name: '',
        code: '',
        courseCode: 0
      });
    } else {
      this.taskSub = this.tasksService.getModule(moduleCode).subscribe((module: any) => {
        this.loadedModules.push(module.data);
        console.log('Module Code', moduleCode);
        console.log('Module', module.data);
        console.log('modules for the week', this.loadedModules);
      });
    }
  }

  // Delete Task
  onDeleteTask(taskId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting Task...' })
      .then(loadingEl => {
        loadingEl.present();
        console.log('task id', taskId);

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
  flaggedTask(task: any, slidingItem: IonItemSliding) {
    console.log(task);
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Flagged...' })
      .then(loadingEl => {
        loadingEl.present();

        task.flagged = true;

        this.tasksService.updateTask(
          task.title,
          task.moduleCode,
          task.dueDateTime,
          task.description,
          task._id,
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
        task.flagged = false;

        this.tasksService.updateTask(
          task.title,
          task.moduleCode,
          task.dueDateTime,
          task.description,
          task._id,
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
          task._id,
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
