import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundametalPageRoutingModule } from './segundametal-routing.module';

import { SegundametalPage } from './segundametal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundametalPageRoutingModule
  ],
  declarations: [SegundametalPage]
})
export class SegundametalPageModule {}
