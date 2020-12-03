import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartacouroPageRoutingModule } from './quartacouro-routing.module';

import { QuartacouroPage } from './quartacouro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartacouroPageRoutingModule
  ],
  declarations: [QuartacouroPage]
})
export class QuartacouroPageModule {}
