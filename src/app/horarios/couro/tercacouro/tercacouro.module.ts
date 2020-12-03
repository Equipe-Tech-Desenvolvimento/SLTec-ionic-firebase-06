import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercacouroPageRoutingModule } from './tercacouro-routing.module';

import { TercacouroPage } from './tercacouro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercacouroPageRoutingModule
  ],
  declarations: [TercacouroPage]
})
export class TercacouroPageModule {}
