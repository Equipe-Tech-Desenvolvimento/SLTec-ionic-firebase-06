import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouroPageRoutingModule } from './couro-routing.module';

import { CouroPage } from './couro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouroPageRoutingModule
  ],
  declarations: [CouroPage]
})
export class CouroPageModule {}
