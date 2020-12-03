import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintapPageRoutingModule } from './quintap-routing.module';

import { QuintapPage } from './quintap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintapPageRoutingModule
  ],
  declarations: [QuintapPage]
})
export class QuintapPageModule {}
