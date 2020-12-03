import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundatPageRoutingModule } from './segundat-routing.module';

import { SegundatPage } from './segundat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundatPageRoutingModule
  ],
  declarations: [SegundatPage]
})
export class SegundatPageModule {}
