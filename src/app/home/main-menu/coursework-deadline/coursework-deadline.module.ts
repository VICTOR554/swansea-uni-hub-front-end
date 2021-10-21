import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseworkDeadlinePageRoutingModule } from './coursework-deadline-routing.module';

import { CourseworkDeadlinePage } from './coursework-deadline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseworkDeadlinePageRoutingModule
  ],
  declarations: [CourseworkDeadlinePage]
})
export class CourseworkDeadlinePageModule {}
