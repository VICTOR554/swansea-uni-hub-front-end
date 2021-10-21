import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseworkDeadlinePage } from './coursework-deadline.page';

const routes: Routes = [
  {
    path: '',
    component: CourseworkDeadlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseworkDeadlinePageRoutingModule {}
