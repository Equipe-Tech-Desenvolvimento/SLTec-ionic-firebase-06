import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercatPageRoutingModule } from './tercat-routing.module';

import { TercatPage } from './tercat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercatPageRoutingModule
  ],
  declarations: [TercatPage]
})
export class TercatPageModule {}
