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
  notasks = false;
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
          this.loadedFlaggedTasks = flaggedTask;
          console.log(flaggedTask);

          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          flaggedTask.forEach(element => {
            if (element.moduleCode) {
              this.getModule(element.moduleCode);
            } else {

              this.getModule('No module');
            }
          });

          if (flaggedTask.length === 0) {
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

  completeTask(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is Completed...' })
      .then(loadingEl => {
        loadingEl.present();
        task.is_completed = true;
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
