import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InProgress } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.page.html',
  styleUrls: ['./edit-tasks.page.scss'],
})
export class EditTasksPage implements OnInit {
  form: FormGroup;
  loadedalltask: InProgress;
  currentDate;
  constructor(private tasksService: TasksService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    // Subscribe to changes in route params
    this.route.paramMap.subscribe(paramMap => {
      // check if it has the note id if not go back to notes
      if (!paramMap.has('taskId')) {
        this.navCtrl.navigateBack('/home/tabs/tasks');
        return;
      }
      this.currentDate = new Date().toISOString();
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

    });
  }


  onUpdateTask() {
    console.log(this.form);
  }
}
