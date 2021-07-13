import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmissionDeadlinePage } from './submission-deadline.page';

const routes: Routes = [
  {
    path: '',
    component: SubmissionDeadlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionDeadlinePageRoutingModule {}
