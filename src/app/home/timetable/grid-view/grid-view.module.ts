import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridViewPageRoutingModule } from './grid-view-routing.module';

import { GridViewPage } from './grid-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridViewPageRoutingModule
  ],
  declarations: [GridViewPage]
})
export class GridViewPageModule {}
