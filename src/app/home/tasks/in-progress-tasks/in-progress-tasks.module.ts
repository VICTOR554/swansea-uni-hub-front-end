import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InProgressTasksPageRoutingModule } from './in-progress-tasks-routing.module';

import { InProgressTasksPage } from './in-progress-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InProgressTasksPageRoutingModule
  ],
  declarations: [InProgressTasksPage]
})
export class InProgressTasksPageModule {}
