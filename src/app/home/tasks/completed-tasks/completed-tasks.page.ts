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
  noTasks = false;
  loadedCompletedTasks: Task[];
  loadedModules: Module[];
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
        this.taskSub = this.tasksService.getCompleteTasks().subscribe((completedTasks: any) => {
          this.loadedCompletedTasks = completedTasks.data;
          console.log(completedTasks.data);

          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          completedTasks.data.forEach(element => {
            if (element.module_code) {
              this.onGetModule(element.module_code);
            } else {

              this.onGetModule('No module');
            }
          });

          if (completedTasks.data.length === 0) {
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
      name: 'No module',
      code: 'No module',
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

  incompleteTask(task: any, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Task is not Completed...' })
      .then(loadingEl => {
        loadingEl.present();
        task.completed = false;
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
