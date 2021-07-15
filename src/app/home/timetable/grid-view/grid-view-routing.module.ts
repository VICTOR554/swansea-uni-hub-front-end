import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridViewPage } from './grid-view.page';

const routes: Routes = [
  {
    path: '',
    component: GridViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridViewPageRoutingModule {}
