import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietiesPageRoutingModule } from './societies-routing.module';

import { SocietiesPage } from './societies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietiesPageRoutingModule
  ],
  declarations: [SocietiesPage]
})
export class SocietiesPageModule {}
