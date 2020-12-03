import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercapPageRoutingModule } from './tercap-routing.module';

import { TercapPage } from './tercap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercapPageRoutingModule
  ],
  declarations: [TercapPage]
})
export class TercapPageModule {}
