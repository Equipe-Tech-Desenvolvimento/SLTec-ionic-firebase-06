import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundacouroPageRoutingModule } from './segundacouro-routing.module';

import { SegundacouroPage } from './segundacouro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundacouroPageRoutingModule
  ],
  declarations: [SegundacouroPage]
})
export class SegundacouroPageModule {}
