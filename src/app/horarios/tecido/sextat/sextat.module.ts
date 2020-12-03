import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextatPageRoutingModule } from './sextat-routing.module';

import { SextatPage } from './sextat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextatPageRoutingModule
  ],
  declarations: [SextatPage]
})
export class SextatPageModule {}
