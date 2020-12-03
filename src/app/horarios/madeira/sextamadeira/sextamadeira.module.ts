import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextamadeiraPageRoutingModule } from './sextamadeira-routing.module';

import { SextamadeiraPage } from './sextamadeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextamadeiraPageRoutingModule
  ],
  declarations: [SextamadeiraPage]
})
export class SextamadeiraPageModule {}
