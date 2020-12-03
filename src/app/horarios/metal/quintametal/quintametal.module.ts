import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintametalPageRoutingModule } from './quintametal-routing.module';

import { QuintametalPage } from './quintametal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintametalPageRoutingModule
  ],
  declarations: [QuintametalPage]
})
export class QuintametalPageModule {}
