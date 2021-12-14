import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Task, Module } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-flagged-tasks',
  templateUrl: './flagged-tasks.page.html',
  styleUrls: ['./flagged-tasks.page.scss'],
})
export class FlaggedTasksPage implements OnInit, OnDestroy {
  noTasks = false;
  loadedFlaggedTasks: Task[];
  loadedModules: Module[];
  private taskSub: Subscription;

  constructor(private tasksService: TasksService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.receiveFlaggedTasks();
  }
  receiveFlaggedTasks() {
    this.loadingCtrl.create({ message: 'Loading Flagged Tasks...' })
      .then(loadingEl => {
        loadingEl.present();
        this.taskSub = this.tasksService.getFlaggedTasks().subscribe((flaggedTask: any) => {
          this.loadedFlaggedTasks = flaggedTask.data;
          console.log(flaggedTask);

          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          flaggedTask.data.forEach(element => {
            if (element.moduleCode) {
              this.onGetModule(element.moduleCode);
            } else {

              this.onGetModule('No module');
            }
          });

          if (flaggedTask.data.length === 0) {
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
    if (moduleCode === 'No module') {
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
        console.log('modules tasks', this.loadedModules);
      });
    }
  }

  completeTask(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Completed...' })
      .then(loadingEl => {
        loadingEl.present();
        task.completed = true;
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
          console.log('updated to complete', task);
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

  onDeleteTask(taskId: string, slidingItem: IonItemSliding) {
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
