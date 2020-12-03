import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadeiraPageRoutingModule } from './madeira-routing.module';

import { MadeiraPage } from './madeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadeiraPageRoutingModule
  ],
  declarations: [MadeiraPage]
})
export class MadeiraPageModule {}
