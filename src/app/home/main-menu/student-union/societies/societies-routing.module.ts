import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietiesPage } from './societies.page';

const routes: Routes = [
  {
    path: '',
    component: SocietiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietiesPageRoutingModule {}
