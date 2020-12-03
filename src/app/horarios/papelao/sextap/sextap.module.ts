import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextapPageRoutingModule } from './sextap-routing.module';

import { SextapPage } from './sextap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextapPageRoutingModule
  ],
  declarations: [SextapPage]
})
export class SextapPageModule {}
