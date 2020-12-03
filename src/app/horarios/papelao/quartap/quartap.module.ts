import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartapPageRoutingModule } from './quartap-routing.module';

import { QuartapPage } from './quartap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartapPageRoutingModule
  ],
  declarations: [QuartapPage]
})
export class QuartapPageModule {}
