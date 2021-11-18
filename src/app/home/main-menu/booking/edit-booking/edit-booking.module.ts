import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBookingPageRoutingModule } from './edit-booking-routing.module';

import { EditBookingPage } from './edit-booking.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditBookingPageRoutingModule
  ],
  declarations: [EditBookingPage]
})
export class EditBookingPageModule {}
