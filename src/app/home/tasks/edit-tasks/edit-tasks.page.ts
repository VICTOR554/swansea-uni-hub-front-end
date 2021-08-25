import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.page.html',
  styleUrls: ['./edit-tasks.page.scss'],
})
export class EditTasksPage implements OnInit {
  form: FormGroup;
  date;
  constructor() { }

  ngOnInit() {
    this.date = new Date().toISOString();
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      moduleCode: new FormControl(null, {
        updateOn: 'blur',
      }),
      dueDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      descripton: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onUpdateTask() {
    console.log(this.form);
  }
}
