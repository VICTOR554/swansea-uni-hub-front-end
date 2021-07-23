import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverdueTasksPageRoutingModule } from './overdue-tasks-routing.module';

import { OverdueTasksPage } from './overdue-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverdueTasksPageRoutingModule
  ],
  declarations: [OverdueTasksPage]
})
export class OverdueTasksPageModule {}
