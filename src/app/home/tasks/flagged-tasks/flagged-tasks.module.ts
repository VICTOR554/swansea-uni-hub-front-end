import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlaggedTasksPageRoutingModule } from './flagged-tasks-routing.module';

import { FlaggedTasksPage } from './flagged-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlaggedTasksPageRoutingModule
  ],
  declarations: [FlaggedTasksPage]
})
export class FlaggedTasksPageModule {}
