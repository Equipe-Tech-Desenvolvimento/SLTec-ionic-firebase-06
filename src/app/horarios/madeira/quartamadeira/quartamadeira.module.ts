import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartamadeiraPageRoutingModule } from './quartamadeira-routing.module';

import { QuartamadeiraPage } from './quartamadeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartamadeiraPageRoutingModule
  ],
  declarations: [QuartamadeiraPage]
})
export class QuartamadeiraPageModule {}
