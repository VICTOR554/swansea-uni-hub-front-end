import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportPage } from './report.page';

const routes: Routes = [
  {
    path: '',
    component: ReportPage
  },
  {
    path: 'new',
    loadChildren: () => import('./new-report/new-report.module').then( m => m.NewReportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportPageRoutingModule {}
