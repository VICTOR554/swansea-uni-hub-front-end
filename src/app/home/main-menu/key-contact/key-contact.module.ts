import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyContactPageRoutingModule } from './key-contact-routing.module';

import { KeyContactPage } from './key-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyContactPageRoutingModule
  ],
  declarations: [KeyContactPage]
})
export class KeyContactPageModule {}
