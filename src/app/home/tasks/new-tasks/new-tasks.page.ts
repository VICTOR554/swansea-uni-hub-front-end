import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.page.html',
  styleUrls: ['./new-tasks.page.scss'],
})
export class NewTasksPage implements OnInit {
  form: FormGroup;
  currentDate;

  constructor(private tasksService: TasksService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.currentDate = new Date().toISOString();
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      moduleCode: new FormControl(null, {
        updateOn: 'blur',
      }),
      dueDateTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      descripton: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onCreateTask() {
    console.log(this.form);
    if (!this.form.valid) {

      return;
    }
    this.loadingCtrl.create({
      message: 'Creating Task'
    }).then(loadingEl => {
      loadingEl.present();
      this.tasksService.createTask(
        this.form.value.title,
        this.form.value.moduleCode,
        this.form.value.description,
        this.form.value.dueDateTime,
      ).subscribe((res) => {
        setTimeout(() => {
          loadingEl.dismiss();
          console.log(res);
          this.form.reset();
          this.router.navigate(['home/tabs/tasks']);
        }, 1000);
      });
    });
  }

}
