import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundapPageRoutingModule } from './segundap-routing.module';

import { SegundapPage } from './segundap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundapPageRoutingModule
  ],
  declarations: [SegundapPage]
})
export class SegundapPageModule {}
