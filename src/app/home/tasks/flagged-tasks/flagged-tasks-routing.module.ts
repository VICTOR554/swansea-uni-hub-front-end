import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlaggedTasksPage } from './flagged-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: FlaggedTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlaggedTasksPageRoutingModule {}
