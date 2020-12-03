import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapelaoPageRoutingModule } from './papelao-routing.module';

import { PapelaoPage } from './papelao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapelaoPageRoutingModule
  ],
  declarations: [PapelaoPage]
})
export class PapelaoPageModule {}
