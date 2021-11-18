import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.page.html',
  styleUrls: ['./edit-booking.page.scss'],
})
export class EditBookingPage implements OnInit {
  form: FormGroup;
  currentDate;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date().toISOString();
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required,Validators.minLength(1)]
      }),
      type: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      date: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      location: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(180), Validators.minLength(1)]
      }),
    });
  }

  onUpdateBooking() {
    console.log(this.form);
  }


}
