import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.scss'],
})
export class NewBookingPage implements OnInit {
  form: FormGroup;
  currentDate;

  constructor(private bookingService: BookingService) { }

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

  onCreateBooking() {
    console.log(this.form);
  }

}
