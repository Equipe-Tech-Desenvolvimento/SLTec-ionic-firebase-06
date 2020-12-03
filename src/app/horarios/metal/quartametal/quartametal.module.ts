import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartametalPageRoutingModule } from './quartametal-routing.module';

import { QuartametalPage } from './quartametal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartametalPageRoutingModule
  ],
  declarations: [QuartametalPage]
})
export class QuartametalPageModule {}
