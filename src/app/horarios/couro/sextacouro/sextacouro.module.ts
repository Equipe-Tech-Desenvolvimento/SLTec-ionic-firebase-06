import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextacouroPageRoutingModule } from './sextacouro-routing.module';

import { SextacouroPage } from './sextacouro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextacouroPageRoutingModule
  ],
  declarations: [SextacouroPage]
})
export class SextacouroPageModule {}
