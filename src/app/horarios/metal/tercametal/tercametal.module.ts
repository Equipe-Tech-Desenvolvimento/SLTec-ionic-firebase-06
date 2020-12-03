import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercametalPageRoutingModule } from './tercametal-routing.module';

import { TercametalPage } from './tercametal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercametalPageRoutingModule
  ],
  declarations: [TercametalPage]
})
export class TercametalPageModule {}
