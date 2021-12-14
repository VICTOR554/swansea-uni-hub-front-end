import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlaggedTasksPageRoutingModule } from './flagged-tasks-routing.module';

import { FlaggedTasksPage } from './flagged-tasks.page';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlaggedTasksPageRoutingModule,
    SharedModule
  ],
  declarations: [FlaggedTasksPage]
})
export class FlaggedTasksPageModule {}
