import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.page.html',
  styleUrls: ['./new-report.page.scss'],
})
export class NewReportPage implements OnInit {

  form: FormGroup;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
     this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required,Validators.minLength(1)]
      }),
      topic: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(180), Validators.minLength(1)]
      }),
    });
  }

  onCreateReport() {
    console.log(this.form);
  }


}
