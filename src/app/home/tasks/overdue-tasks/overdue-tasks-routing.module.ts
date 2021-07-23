import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverdueTasksPage } from './overdue-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: OverdueTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverdueTasksPageRoutingModule {}
