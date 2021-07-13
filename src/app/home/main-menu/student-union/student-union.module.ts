import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentUnionPageRoutingModule } from './student-union-routing.module';

import { StudentUnionPage } from './student-union.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentUnionPageRoutingModule
  ],
  declarations: [StudentUnionPage]
})
export class StudentUnionPageModule {}
