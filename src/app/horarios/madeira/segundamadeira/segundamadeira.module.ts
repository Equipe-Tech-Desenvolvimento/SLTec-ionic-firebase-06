import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundamadeiraPageRoutingModule } from './segundamadeira-routing.module';

import { SegundamadeiraPage } from './segundamadeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundamadeiraPageRoutingModule
  ],
  declarations: [SegundamadeiraPage]
})
export class SegundamadeiraPageModule {}
