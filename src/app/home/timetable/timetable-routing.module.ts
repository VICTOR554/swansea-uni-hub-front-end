import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimetablePage } from './timetable.page';

const routes: Routes = [
  {
    path: '',
    component: TimetablePage
  },
  {
    path: 'list-view',
    loadChildren: () => import('./list-view/list-view.module').then( m => m.ListViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimetablePageRoutingModule {}
