import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyContactPage } from './key-contact.page';

const routes: Routes = [
  {
    path: '',
    component: KeyContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyContactPageRoutingModule {}
