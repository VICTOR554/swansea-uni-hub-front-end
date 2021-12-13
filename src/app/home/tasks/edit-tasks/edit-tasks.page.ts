import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Task } from '../tasks.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.page.html',
  styleUrls: ['./edit-tasks.page.scss'],
})
export class EditTasksPage implements OnInit, OnDestroy {
  currentDate;
  completed = false;
  flagged = false;
  dueDate;
  loadedalltask: Task;
  form: FormGroup;
  private taskSub: Subscription;

  constructor(private tasksService: TasksService, private route: ActivatedRoute,
     private navCtrl: NavController, private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
    // Subscribe to changes in route params
    this.route.paramMap.subscribe(paramMap => {
      // check if it has the note id if not go back to notes
      if (!paramMap.has('taskId')) {
        this.navCtrl.navigateBack('/home/tabs/tasks');
        return;
      }
      this.currentDate = new Date().toISOString();
      this.taskSub = this.tasksService.getOneTask(paramMap.get('taskId')).subscribe((alltasks: any) => {
        this.loadedalltask = alltasks.data;
        console.log('task', this.loadedalltask);
        // load detail of item in form by removing null and calling the title and description
        this.form = new FormGroup({
            title: new FormControl(this.loadedalltask.title, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            moduleCode: new FormControl(this.loadedalltask.moduleCode, {
                updateOn: 'blur',
            }),
            dueDateTime: new FormControl(this.loadedalltask.dueDateTime, {
                updateOn: 'blur',
                validators: [Validators.required],
            }),
            description: new FormControl(this.loadedalltask.description, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(180)]
            })
        });
        this.dueDate = moment.unix(this.loadedalltask.dueDateTime).toISOString();
        this.currentDate = moment().toISOString();
        console.log('date', this.dueDate);
        console.log('datenow', this.currentDate);

    });

    });
  }

  onUpdateTask() {
    console.log(this.form);
    console.log(this.completed);
    console.log(this.flagged);
    if (!this.form.valid) {
        return;
    }
    this.loadingCtrl.create({
        message: 'Updating Task'
    }).then(loadingEl => {
        loadingEl.present();
        this.tasksService.updateTask
            (
                this.form.value.title,
                this.form.value.moduleCode,
                this.form.value.dueDateTime,
                this.form.value.description,
                this.loadedalltask._id,
                this.completed,
                this.flagged
            )
            .subscribe(() => {
                setTimeout(() => {
                    loadingEl.dismiss();
                    this.form.reset();
                    this.router.navigate(['/home/tabs/tasks']);
                }, 1000);
            });
    });

}

// used to clear subscription to avoid memory leaks
ngOnDestroy() {
  if (this.taskSub) {
      this.taskSub.unsubscribe();
  }
}
}
