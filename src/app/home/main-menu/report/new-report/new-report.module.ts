import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewReportPageRoutingModule } from './new-report-routing.module';

import { NewReportPage } from './new-report.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewReportPageRoutingModule
  ],
  declarations: [NewReportPage]
})
export class NewReportPageModule {}
