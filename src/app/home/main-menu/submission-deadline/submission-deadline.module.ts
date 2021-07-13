import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmissionDeadlinePageRoutingModule } from './submission-deadline-routing.module';

import { SubmissionDeadlinePage } from './submission-deadline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmissionDeadlinePageRoutingModule
  ],
  declarations: [SubmissionDeadlinePage]
})
export class SubmissionDeadlinePageModule {}
