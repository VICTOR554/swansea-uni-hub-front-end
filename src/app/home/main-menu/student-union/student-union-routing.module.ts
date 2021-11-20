import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentUnionPage } from './student-union.page';

const routes: Routes = [
  {
    path: '',
    component: StudentUnionPage
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'societies',
    loadChildren: () => import('./societies/societies.module').then( m => m.SocietiesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentUnionPageRoutingModule {}
