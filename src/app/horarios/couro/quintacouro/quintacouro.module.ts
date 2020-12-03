import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintacouroPageRoutingModule } from './quintacouro-routing.module';

import { QuintacouroPage } from './quintacouro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintacouroPageRoutingModule
  ],
  declarations: [QuintacouroPage]
})
export class QuintacouroPageModule {}
