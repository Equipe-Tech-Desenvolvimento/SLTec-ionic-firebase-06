import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResiduoPageRoutingModule } from './residuo-routing.module';

import { ResiduoPage } from './residuo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResiduoPageRoutingModule
  ],
  declarations: [ResiduoPage]
})
export class ResiduoPageModule {}
