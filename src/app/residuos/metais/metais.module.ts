import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaisPageRoutingModule } from './metais-routing.module';

import { MetaisPage } from './metais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaisPageRoutingModule
  ],
  declarations: [MetaisPage]
})
export class MetaisPageModule {}
