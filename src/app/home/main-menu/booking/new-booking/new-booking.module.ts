import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBookingPageRoutingModule } from './new-booking-routing.module';

import { NewBookingPage } from './new-booking.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewBookingPageRoutingModule
  ],
  declarations: [NewBookingPage]
})
export class NewBookingPageModule {}
